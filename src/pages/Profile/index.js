import React, { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import { useParams } from "react-router-dom";
import { useWeb3React } from '@web3-react/core'
import axios from 'axios'
import { slice } from 'lodash'

import { getTokenBalance } from "utils/contracts";
import { shorter, formatNum } from "utils";

import { GridContainer, GridRow, GridItem } from 'components/Grid'
import SearchForm from 'components/SearchForm'
import NftGridCard from 'components/NftGridCard'
import Pagination from 'components/Pagination'
import * as Element from "./styles";

import CopyIcon from "assets/images/copyIcon.png";

const SELECT_ITEM_TYPE = [
  { value: 'owned', text: 'Owned' },
  { value: 'onSale', text: 'On Sale' },
  { value: 'created', text: 'Created' },
  { value: 'liked', text: 'Liked' },
]

const Profile = (props) => {

  let { id } = useParams();
  const { user } = props;

  const pageSize = 9;

  const [userProfile, setUserProfile] = useState(undefined)
  const { account, chainId, library } = useWeb3React();
  const [balance, setBalance] = useState()
  const [etherBalance, setEtherBalance] = useState()

  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)  
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(pageSize)  
  const [searchText, setSearchText] = useState("")  
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

  const fetchItems = useCallback((searchTextKey, itemTypeKey) => {

    setLoading(true)

    let paramData = { 
      sortDir: 'desc',
      sortBy: 'timestamp'
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

    axios.get("/api/item", {
      params: paramData
    })
      .then(res => {
        console.log(res)
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
    fetchItems(searchText, itemType)
  }, [fetchItems, itemType, searchText])

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
            <GridItem xl={12} lg={12} md={12} sm={12}>
              <Element.TabList>
                {
                  SELECT_ITEM_TYPE.map((item) => (
                    <Element.TabLink
                      key={item.value}
                      active={itemType === item.value}
                      onClick={() => { 
                        fetchItems(searchText, item.value)
                        setItemType(item.value) 
                      }}
                    >
                      { item.text }
                    </Element.TabLink>
                  ))
                }
              </Element.TabList>
            </GridItem>          

            <GridItem xl={12} lg={12} md={12} sm={12}>
              <Element.SearchFormWrapper>
                <SearchForm
                  onSelectView={() => {}}
                  onChangeInput={(val) => {
                    fetchItems(val, itemType)
                    setSearchText(val)
                  }}
                  viewMethod={'grid'}
                  hideViewTab={true}
                />
              </Element.SearchFormWrapper>

              <Element.NftCardList>
                {
                  loading ? (
                    <Element.LoadingLabel>Loading...</Element.LoadingLabel>
                  ) : (
                    <>
                      <Element.TabContent>
                        <Element.TabPane active={true}>
                          <GridRow>
                            {
                              slice(items, startIndex, endIndex).map((item, index) => (
                                <GridItem xl={4} lg={4} md={4} sm={6} xs={12} key={`grid-${index}`}>
                                  <NftGridCard item={item} buttonText='Details' />
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
