import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { slice } from 'lodash'

import {
  GridContainer,
  GridRow,
  GridItem
} from 'components/Grid'
import FilterBox from 'components/FilterBox'
import SearchForm from 'components/SearchForm'
import NftGridCard from 'components/NftGridCard'
import NftListCard from 'components/NftListCard'
import Pagination from 'components/Pagination'
import SaleTypesFilter from 'components/SaleTypesFilter'

import {
  ExploreWrapper,
  SearchFormWrapper,
  NftCardList,
  TabContent,
  TabPane,
  PaginationBox,
  LoadingLabel
} from './styles'

const SELECT_SALE_TYPES = [
  { value: 'fixed', text: 'Fixed Price' },
  { value: 'auction', text: 'Live Auction' }
];

const SELECT_ORDER_BY_ITEMS = [
  { value: 'timestamp', text: 'Recently listed' },
  { value: 'likeCount', text: 'Most favorited' },
  { value: 'name', text: 'Name' },
];

const Explore = () => {

  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [searchText, setSearchText] = useState("")
  const [saleType, setSaleType] = useState(['fixed', 'auction']);
  const [sortBy, setSortBy] = useState("timestamp")
  const [loading, setLoading] = useState(false)

  const [pageSize, setPageSize] = useState(9)
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(pageSize)
  const [viewMethod, setViewMethod] = useState('grid')

  const fetchItems = useCallback((searchTextKey, saleTypeKey, sortByKey) => {
    setLoading(true)
    let paramData = { sortDir: 'desc' }

    if (sortByKey) {
      paramData.sortBy = sortByKey;
    }
    if (searchTextKey) {
      paramData.searchTxt = searchTextKey;
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
  }, [pageSize])

  const onChangePagination = (pageNum) => {
    setPage(pageNum)
    setStartIndex((pageNum - 1) * pageSize)
    setEndIndex(pageNum * pageSize)
  }

  useEffect(() => {
    fetchItems(searchText, saleType, sortBy)
  }, [fetchItems, searchText, saleType, sortBy])

  return (
    <ExploreWrapper>
      <GridContainer>
        <GridRow>
          <GridItem xl={3} lg={4} md={4} sm={12}>
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

                fetchItems(searchText, newSaleTypes, sortBy)
                setSaleType(newSaleTypes)
              }}
              values={saleType}
            />
            <FilterBox
              title='Sort By'
              name='sortBy'
              filterOptions={SELECT_ORDER_BY_ITEMS}
              handleChange={(e) => {
                fetchItems(searchText, saleType, e.target.value)
                setSortBy(e.target.value)
              }}
              value={sortBy}
            />
          </GridItem>

          <GridItem xl={9} lg={8} md={8} sm={12}>
            <SearchFormWrapper>
              <SearchForm
                onSelectView={(view) => {
                  setPageSize(view === 'grid' ? 9 : 5)
                  setPage(1)
                  setStartIndex(0)
                  setEndIndex(view === 'grid' ? 9 : 5)
                  setViewMethod(view)
                }}
                onChangeInput={(val) => {
                  fetchItems(val, saleType, sortBy)
                  setSearchText(val)
                }}
                viewMethod={viewMethod}
              />
            </SearchFormWrapper>

            <NftCardList>
              {
                loading ? (
                  <LoadingLabel>Loading...</LoadingLabel>
                ) : (
                  <>
                    <TabContent>
                      <TabPane active={viewMethod === 'grid'}>
                        <GridRow>
                          {
                            slice(items, startIndex, endIndex).map((item, index) => (
                              <GridItem xl={4} lg={4} md={4} sm={6} xs={12} key={`grid-${index}`}>
                                <NftGridCard item={item} />
                              </GridItem>
                            ))
                          }
                        </GridRow>
                      </TabPane>
                      <TabPane active={viewMethod === 'list'}>
                        <GridRow>
                          {
                            slice(items, startIndex, endIndex).map((item, index) => (
                              <GridItem xl={12} lg={12} md={12} sm={12} xs={12} key={`grid-${index}`}>
                                <NftListCard item={item} />
                              </GridItem>
                            ))
                          }
                        </GridRow>
                      </TabPane>
                    </TabContent>
                    <PaginationBox>
                      <Pagination
                        page={page}
                        handleChange={(_, pageNum) => onChangePagination(pageNum)}
                        count={Math.ceil(items.length / pageSize)}
                      />
                    </PaginationBox>
                  </>
                )
              }
            </NftCardList>
          </GridItem>
        </GridRow>
      </GridContainer>
    </ExploreWrapper>
  )
}

export default Explore
