/* eslint-disable react-hooks/exhaustive-deps */
import React , {useState,useEffect} from "react";
import { ethers } from "ethers";
import {useParams} from "react-router-dom";
import { useWeb3React } from '@web3-react/core'
import axios from 'axios'
import { Link } from "react-router-dom";

import * as HomeElement from '../Home/styles';
import Nft from "../Home/nft";
import { getTokenBalance } from "../../utils/contracts";
import { shorter, formatNum } from "../../utils";

import * as Element from "./styles";

import FilterIcon from "../../assets/images/filter.png";
import CopyIcon from "../../assets/images/copyIcon.png";

const SELECT_SALE_TYPES = [
  {value: 'fixed', text: 'Fixed Price'},
  {value: 'auction', text: 'Live Auction'}
];

const SELECT_ORDER_BY_ITEMS = [
  {value: 'timestamp', text: 'Recently listed'},
  {value: 'likeCount', text: 'Most favorited'},
  {value: 'name', text: 'Name'},
];

function Profile(props) {
  let { id } = useParams();
  const { user, login } = props;
  const [userProfile, setUserProfile] = useState(undefined)
  const { account, chainId, library } = useWeb3React();
  const [balance, setBalance] = useState()
  const [etherBalance, setEtherBalance] = useState()

  const [curTab, setCurTab] = useState(1); // 1: Owned, 2: On sale, 3: Created, 4: Liked

  const [showFilter, setShowFilter] = useState(false);
  const [showSortBy, setShowSortBy] = useState(false);

  const [filters, setFilters] = useState({
      saleType: null, 
  });
  const [selectedFilters, setSelectedFilters] = useState({
      saleType: null, 
  });
  
  const [items, setItems] = useState([]) 
  const [searchTxt, setSearchTxt] = useState("")   
  const [tempSearchTxt, setTempSearchTxt] = useState("") 
  const [sortBy, setSortBy] = useState("timestamp") 
  const [sortByText, setSortByText] = useState("Recently listed")

  const [page, setPage] = useState(1)
  const [noItems, setNoItems] = useState(false)
  const [initialItemsLoaded, setInitialItemsLoaded] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {        
    if (!userProfile){
      getUser()
    }        
  }, [user])

  useEffect(() => {
    if(!!user) {
      login();
    }
  }, [user, account, library])

  useEffect(() => {
    if(!!account && !!library) {
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

  function getUser(){
    axios.get(`/api/user/${id ? id : ""}`)
    .then(res => {
      setUserProfile(res.data.user)                
    })
  }

  function onSetSaleType(saleType) {
    if (filters.saleType && (filters.saleType?.value === saleType.value)) {
        setFilters({ saleType:null })
    } else {
        setFilters({ saleType:saleType })
    }  
  }

  function removeSaleType() {
    setFilters({ saleType:null })
    setSelectedFilters({ saleType:null })        
  }

  function onSetSelectedFilters() {
    setShowFilter(false)
    setSelectedFilters(filters)        
  }
  function onClearAll() {
    setFilters({saleType: null})
    setSelectedFilters({saleType: null})
  }

  useEffect(() => {    
    setItems([]);
    setNoItems(false)
    setInitialItemsLoaded(false);
    setLoading(true);
    setPage(1);
    fetchItems(true); 		   
  }, [id, selectedFilters, searchTxt, sortBy, curTab])

  useEffect(() => {
    setLoading(true)    
    if (initialItemsLoaded) {
      fetchItems(false); 	   
    }
  }, [page])

  function fetchItems(reset) {
    let paramData = {sortDir:'desc'}

    if (sortBy) {
      paramData.sortBy = sortBy            
    }
    if (searchTxt) {
      paramData.searchTxt = searchTxt            
    }   
    
    switch (curTab) {
      case 1:
        // Owned
        paramData.owner = id;
        break;
      case 2:
        // On sale
        paramData.itemOwner = id;
        paramData.saleType = 'all'; 
        break;
      case 3:
        // Created
        paramData.creator = id;
        break;
      case 4:
        // Liked
        paramData.likes = id; 
        break;
      default:
        break;
    }    

    if (selectedFilters.saleType) {
      paramData.saleType = selectedFilters.saleType.value            
    }

    if (reset) {
      paramData.page = 1 ;            
    } else {
      paramData.page = page ;
    }
    
    axios.get("/api/item", {
      params: paramData
    })
    .then(res => {            
      setLoading(false)  
      
      if (res.data.items.length === 0) setNoItems(true)      
      if (reset){        
          setItems(res.data.items)
          setInitialItemsLoaded(true)
      }else{
          let prevArray = JSON.parse(JSON.stringify(items))
          prevArray.push(...res.data.items)
          setItems(prevArray)        
      }            
    })
    .catch(err => {            
      setLoading(false) 
      
      console.log(err)  
      setNoItems(true)      
    })
  }

  function loadMore() {
    if (!loading) {
      setPage(page => {return (page + 1)}) 
    }      
  }

  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  return (
    <Element.ProfilePageWrap>
      <Element.ProfileBanner>
        <Element.Container>
          <div className="inner-wrap">
            <div className="content-box">
              <div className="profile-box">
                <img
                  className="profileimg"
                  src={userProfile && userProfile.profilePic ? userProfile.profilePic : "/images/profile.png"}
                  alt="ProfileImage"
                />
                <div className="profileInfo-box">
                  <h1>{userProfile && userProfile.name ? userProfile.name : "NoName"}</h1>
                  <div className="pinId">
                    <span className="uid">{`${shorter(id)}`}</span>
                    <span className="copy-button">
                      <img src={CopyIcon} alt="ProfileImage" onClick={() => copyToClipboard(id)}/>
                    </span>
                    <span className="email">{userProfile && userProfile.socialLink ? userProfile.socialLink : ""}</span>
                  </div>
                  <span className="uid">Balance : {formatNum(balance)} {process.env.REACT_APP_TOKEN} , {formatNum(etherBalance)} BNB</span>
                </div>
              </div>
            </div>
            <div className="button-box">
              <Link to="/edit_profile" className="cta-button setting-button">
                Setting
              </Link>
            </div>
          </div>
        </Element.Container>
      </Element.ProfileBanner>

      <Element.HomeCardList>
        <Element.Container>
          <div className="tabBox">
            <div className="tabContent">
              <div className="resultCountBox">
                <div className="resultCountLinks">
                  <div className={curTab === 1 ? 'link is-active' : 'link'} onClick={() => setCurTab(1)}>
                    Owned
                  </div>
                  <div className={curTab === 2 ? 'link is-active' : 'link'} onClick={() => setCurTab(2)}>
                    On Sale
                  </div>
                  <div className={curTab === 3 ? 'link is-active' : 'link'} onClick={() => setCurTab(3)}>
                    Created
                  </div>
                  <div className={curTab === 4 ? 'link is-active' : 'link'} onClick={() => setCurTab(4)}>
                    Liked
                  </div>
                </div>                
              </div>
              
              <div className="filterBox">
                <div className="item-box" onClick={() => setShowSortBy(false)}>
                  <input type="text" value={tempSearchTxt} className="form-search" placeholder="Search Items" onChange={event => {setTempSearchTxt(event.target.value)}} onKeyDown={event => {
                    if (event.key === 'Enter')
                      setSearchTxt(event.target.value)
                  }}/>
                </div>
                <div className="item-box" onClick={() => setShowSortBy(false)}>
                  <button className="cta-button filter-button" onClick={() => setShowFilter(!showFilter)}><img src={FilterIcon} alt="FilterIcon" /> Filters</button>
                </div>
                <div className="item-box">                      
                  <button className="cta-button filter-button" onClick={() => setShowSortBy(!showSortBy)}> {sortByText}</button>
                  <HomeElement.DropDownMenus style={{display : showSortBy ? '' : 'none'}}>
                  {
                    SELECT_ORDER_BY_ITEMS.map(o => <HomeElement.DropDownMenu
                        onClick={() => { setSortBy(o.value); setSortByText(o.text); setShowSortBy(false)}}>
                        {o.text}
                      </HomeElement.DropDownMenu> )
                  }                                          
                  </HomeElement.DropDownMenus>                      
                </div>
                {
                  showFilter &&
                  <HomeElement.FilterContent>
                    <HomeElement.FilterFooter>
                      <HomeElement.FilterCurrencyContainer>
                        <HomeElement.FilterLabel>Sale Types: </HomeElement.FilterLabel>
                        <HomeElement.FilterCurrencies>
                        {
                          SELECT_SALE_TYPES.map((saleType, index) => <HomeElement.FilterCategory key={index} onClick={() => onSetSaleType(saleType)} className={filters.saleType?.value === saleType.value?'active':''}>{saleType.text}</HomeElement.FilterCategory>)
                        }                                            
                        </HomeElement.FilterCurrencies>                                        
                      </HomeElement.FilterCurrencyContainer>
                      <button className="cta-button" onClick={() => onSetSelectedFilters()}>Ok</button>
                    </HomeElement.FilterFooter>                            
                  </HomeElement.FilterContent>
                }
              </div>
              {
                selectedFilters.saleType &&
                <HomeElement.FilterString>
                  {
                    selectedFilters.saleType &&
                    <HomeElement.FilterStringItem>
                      <label>Sale Type: </label>
                      <HomeElement.FilterValue>{selectedFilters.saleType.text}<HomeElement.RemoveIcon size={12} onClick={() => removeSaleType()}/></HomeElement.FilterValue>
                    </HomeElement.FilterStringItem>
                  }                        
                  <HomeElement.FilterClearAll onClick={() => onClearAll()} >
                    clear all
                  </HomeElement.FilterClearAll>
                </HomeElement.FilterString>
              }
              
              <div className="cardList">
              {
                items.map((item, index)=> <Nft key={index} {...props} item={item} />)                        
              }
              </div>                
               
              <div className="cardList" style={{display: noItems ? "none" : ""}}>
                <button className="cta-button"  onClick={() => loadMore()}>
                  {loading ? "Loading..." : "Load more"}
                </button>
              </div>           
            </div>
          </div>
        </Element.Container>
      </Element.HomeCardList>        
    </Element.ProfilePageWrap>
  );
  
}

export default Profile;
