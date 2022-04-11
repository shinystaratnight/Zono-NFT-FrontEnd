import React, { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import { useParams } from "react-router-dom";
import { useWeb3React } from '@web3-react/core'
import axios from 'axios'
import { slice } from 'lodash'

import { getTokenBalance } from "utils/contracts";
import { shorter, formatNum } from "utils";

import { GridContainer, GridRow, GridItem } from 'components/Grid'
import FilterBox from 'components/FilterBox'
import SearchForm from 'components/SearchForm'
import NftGridCard from 'components/NftGridCard'
import NftListCard from 'components/NftListCard'
import Pagination from 'components/Pagination'
import SaleTypesFilter from 'components/SaleTypesFilter'
import * as Element from "./styles";

import CopyIcon from "assets/images/copyIcon.png";

const SELECT_SALE_TYPES = [
  { value: 'fixed', text: 'Fixed Price' },
  { value: 'auction', text: 'Live Auction' }
];

const SELECT_ORDER_BY_ITEMS = [
  { value: 'timestamp', text: 'Recently listed' },
  { value: 'likeCount', text: 'Most favorited' },
  { value: 'name', text: 'Name' },
];

const SELECT_ITEM_TYPE = [
  { value: 'owned', text: 'Owned' },
  { value: 'onSale', text: 'On Sale' },
  { value: 'created', text: 'Created' },
  { value: 'liked', text: 'Liked' },
]

const Profile = (props) => {

  let { id } = useParams();
  const { user } = props;

  const [userProfile, setUserProfile] = useState(undefined)
  const { account, chainId, library } = useWeb3React();
  const [balance, setBalance] = useState()
  const [etherBalance, setEtherBalance] = useState()

  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(9)
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(pageSize)
  const [viewMethod, setViewMethod] = useState('grid')
  const [searchText, setSearchText] = useState("")
  const [saleType, setSaleType] = useState(['fixed', 'auction']);
  const [sortBy, setSortBy] = useState("timestamp")
  const [itemType, setItemType] = useState('owned')
  const [loading, setLoading] = useState(false)

  const getUser = useCallback(() => {
    axios.get(`/api/user/${id ? id : ""}`)
      .then(res => {
        setUserProfile(res.data.user)
      })
  }, [id])

  const copyToClipboard = (text) => {
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }

  const fetchItems = useCallback((searchTextKey, itemTypeKey, saleTypeKey, sortByKey) => {

    setLoading(true)

    let paramData = { sortDir: 'desc' }

    if (sortByKey) {
      paramData.sortBy = sortByKey
    }
    if (searchTextKey) {
      paramData.searchTxt = searchTextKey
    }

    switch (itemTypeKey) {
      case 'owned':
        // Owned
        paramData.owner = id;
        break;
      case 'onSale':
        // On sale
        paramData.itemOwner = id;
        paramData.saleType = 'all';
        break;
      case 'created':
        // Created
        paramData.creator = id;
        break;
      case 'liked':
        // Liked
        paramData.likes = id;
        break;
      default:
        break;
    }

    if (saleTypeKey.length === 1) {
      paramData.saleType = saleTypeKey[0];
    } else if (saleTypeKey.length === 2) {
      paramData.saleType = 'all'
    }

    axios.get("/api/item", {
      params: paramData
    })
      .then(res => {
        setItems(res.data.items)
        setPage(1)
        setStartIndex(0)
        setEndIndex(pageSize)
        setLoading(false)
      })
      .catch(() => {
        setItems([])
        setLoading(false)
      })
  }, [id, pageSize])

  const onChangePagination = (pageNum) => {
    setPage(pageNum)
    setStartIndex((pageNum - 1) * pageSize)
    setEndIndex(pageNum * pageSize)
  }

  useEffect(() => {
    fetchItems(searchText, itemType, saleType, sortBy)
  }, [fetchItems, itemType, saleType, sortBy, searchText])

  useEffect(() => {
    if (!userProfile) {
      getUser()
    }
  }, [user, userProfile, getUser])

  useEffect(() => {
    if (!!account && !!library) {
      getTokenBalance(account, chainId, library.getSigner())
        .then((balance) => {
          setBalance(balance)
        })
        .catch(() => {
          setBalance(null)
        })
      library.getBalance(account)
        .then((balance) => {
          const etherVal = parseFloat(ethers.utils.formatEther(balance));
          setEtherBalance(etherVal.toFixed(4));
        })
        .catch(() => {
          setEtherBalance(null)
        })
    }
    return () => {
      setBalance(undefined)
      setEtherBalance(undefined)
    }
  }, [account, chainId, library])

  return (
    <Element.ProfilePageWrap>
      <Element.ProfileBanner>
        <GridContainer>
          <Element.InnerWrap>
            <Element.ProfileContentBox>
              <Element.ProfileBox>
                <Element.ProfileImg
                  src={userProfile && userProfile.profilePic ? userProfile.profilePic : "/images/profile.png"}
                  alt="ProfileImage"
                />
                <div>
                  <Element.UserName>{userProfile && userProfile.name ? userProfile.name : "NoName"}</Element.UserName>
                  <Element.PinIdBox>
                    <Element.UidValue>{`${shorter(id)}`}</Element.UidValue>
                    <Element.CopyButton>
                      <img src={CopyIcon} alt="ProfileImage" onClick={() => copyToClipboard(id)} />
                    </Element.CopyButton>
                    <span className="email">{userProfile && userProfile.socialLink ? userProfile.socialLink : ""}</span>
                  </Element.PinIdBox>
                  <Element.BalanceValue>Balance : {formatNum(balance)} {process.env.REACT_APP_TOKEN} , {formatNum(etherBalance)} BNB</Element.BalanceValue>
                </div>
              </Element.ProfileBox>
            </Element.ProfileContentBox>
            <Element.SettingBox>
              <Element.SettingLink to="/edit_profile">
                Setting
              </Element.SettingLink>
            </Element.SettingBox>
          </Element.InnerWrap>
        </GridContainer>
      </Element.ProfileBanner>

      <Element.CardSection>
        <GridContainer>
          <GridRow>
            <GridItem xl={3} lg={4} md={4} sm={12}>
              <FilterBox
                title='Types'
                name='type'
                filterOptions={SELECT_ITEM_TYPE}
                handleChange={(e) => {
                  fetchItems(searchText, e.target.value, saleType, sortBy)
                  setItemType(e.target.value)
                }}
                value={itemType}
              />
              <SaleTypesFilter
                title='Sale Types'
                name='saleType'
                filterOptions={SELECT_SALE_TYPES}
                handleChange={(e) => {
                  let newSaleTypes = []

                  if (saleType.includes(e.target.value)) {
                    newSaleTypes = saleType.filter((val) => val !== e.target.value)
                  } else {
                    newSaleTypes = [...saleType, e.target.value]
                  }

                  fetchItems(searchText, itemType, newSaleTypes, sortBy)
                  setSaleType(newSaleTypes)
                }}
                values={saleType}
              />
              <FilterBox
                title='Sort By'
                name='sortBy'
                filterOptions={SELECT_ORDER_BY_ITEMS}
                handleChange={(e) => {
                  fetchItems(searchText, itemType, saleType, e.target.value)
                  setSortBy(e.target.value)
                }}
                value={sortBy}
              />
            </GridItem>

            <GridItem xl={9} lg={8} md={8} sm={12}>
              <Element.SearchFormWrapper>
                <SearchForm
                  onSelectView={(view) => {
                    setPageSize(view === 'grid' ? 9 : 5)
                    setPage(1)
                    setStartIndex(0)
                    setEndIndex(view === 'grid' ? 9 : 5)
                    setViewMethod(view)
                  }}
                  onChangeInput={(val) => {
                    fetchItems(val, itemType, saleType, sortBy)
                    setSearchText(val)
                  }}
                  viewMethod={viewMethod}
                />
              </Element.SearchFormWrapper>

              <Element.NftCardList>
                {
                  loading ? (
                    <Element.LoadingLabel>Loading...</Element.LoadingLabel>
                  ) : (
                    <>
                      <Element.TabContent>
                        <Element.TabPane active={viewMethod === 'grid'}>
                          <GridRow>
                            {
                              slice(items, startIndex, endIndex).map((item, index) => (
                                <GridItem xl={4} lg={4} md={4} sm={6} xs={12} key={`grid-${index}`}>
                                  <NftGridCard item={item} />
                                </GridItem>
                              ))
                            }
                          </GridRow>
                        </Element.TabPane>
                        <Element.TabPane active={viewMethod === 'list'}>
                          <GridRow>
                            {
                              slice(items, startIndex, endIndex).map((item, index) => (
                                <GridItem xl={12} lg={12} md={12} sm={12} xs={12} key={`grid-${index}`}>
                                  <NftListCard item={item} />
                                </GridItem>
                              ))
                            }
                          </GridRow>
                        </Element.TabPane>
                      </Element.TabContent>
                      <Element.PaginationBox>
                        <Pagination
                          page={page}
                          handleChange={(_, pageNum) => onChangePagination(pageNum)}
                          count={Math.ceil(items.length / pageSize)}
                        />
                      </Element.PaginationBox>
                    </>
                  )
                }
              </Element.NftCardList>
            </GridItem>
          </GridRow>
        </GridContainer>
      </Element.CardSection>
    </Element.ProfilePageWrap>
  )
}

export default Profile
