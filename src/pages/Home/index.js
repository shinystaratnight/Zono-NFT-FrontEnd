/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from 'axios'

// filter images
import FilterIcon from '../../assets/images/filter.png';

import * as Element from './styles';
import Nft from './nft';

const SELECT_SALE_TYPES = [
    { value: 'fixed', text: 'Fixed Price' },
    { value: 'auction', text: 'Live Auction' }
];

const SELECT_ORDER_BY_ITEMS = [
    { value: 'timestamp', text: 'Recently listed' },
    { value: 'likeCount', text: 'Most favorited' },
    { value: 'name', text: 'Name' },
];

function Home(props) {
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

    function onSetSaleType(saleType) {
        if (filters.saleType && (filters.saleType?.value === saleType.value)) {
            setFilters({ saleType: null })
        } else {
            setFilters({ saleType: saleType })
        }
    }

    function removeSaleType() {
        setFilters({ saleType: null })
        setSelectedFilters({ saleType: null })
    }

    function onSetSelectedFilters() {
        setShowFilter(false)
        setSelectedFilters(filters)
    }
    function onClearAll() {
        setFilters({ saleType: null })
        setSelectedFilters({ saleType: null })
    }

    useEffect(() => {
        setItems([])
        setNoItems(false)
        setInitialItemsLoaded(false)
        setLoading(true)
        setPage(1)
        fetchItems(true)
    }, [selectedFilters, searchTxt, sortBy])

    useEffect(() => {
        setLoading(true)
        if (initialItemsLoaded) {
            fetchItems(false);
        }
    }, [page])

    function fetchItems(reset) {
        let paramData = { sortDir: 'desc' }

        if (sortBy) {
            paramData.sortBy = sortBy;
        }
        if (searchTxt) {
            paramData.searchTxt = searchTxt;
        }
        if (selectedFilters.saleType) {
            paramData.saleType = selectedFilters.saleType.value;
        } else {
            paramData.saleType = 'all';
        }
        if (reset) {
            paramData.page = 1;
        } else {
            paramData.page = page;
        }

        axios.get("/api/item", {
            params: paramData
        })
            .then(res => {
                setLoading(false)
                if (res.data.items.length === 0) setNoItems(true)
                if (reset) {
                    setItems(res.data.items)
                    setInitialItemsLoaded(true)
                } else {
                    let prevArray = JSON.parse(JSON.stringify(items))
                    prevArray.push(...res.data.items)
                    setItems(prevArray)
                }
            })
            .catch(err => {
                setLoading(false)
                if (err.response.data.message === 'No Items found') {
                    setNoItems(true)
                }
            })
    }

    function loadMore() {
        if (!loading) {
            setPage(page => { return (page + 1) })
        }
    }

    return (
        <Element.HomePageWrap onClick={() => { setSearchTxt(tempSearchTxt); }}>
            <Element.HomeCardList>
                <Element.Container>
                    {/* <div className="sectionHeading">
                        <div className="inner-wrap">
                            <h1>Marketplace</h1>
                        </div>
                    </div> */}
                    {/* <div className="divider-line"></div> */}
                    {/* <Element.DividerLine> </Element.DividerLine> */}
                    <div className="filterBox">
                        <div className="item-box" onClick={() => setShowSortBy(false)}>
                            <input type="text" value={tempSearchTxt} className="form-search"
                                placeholder="Search Items"
                                onChange={event => { setTempSearchTxt(event.target.value) }}
                                onKeyDown={event => {
                                    if (event.key === 'Enter')
                                        setSearchTxt(event.target.value)
                                }} />
                        </div>
                        <div className="item-box" onClick={() => setShowSortBy(false)}>
                            <button className="cta-button filter-button"
                                onClick={() => setShowFilter(!showFilter)}>
                                <img src={FilterIcon} alt="FilterIcon" /> Filters
                            </button>
                        </div>
                        <div className="item-box">
                            <div className="selectWrap">
                                < button className="cta-button filter-button" onClick={() => setShowSortBy(!showSortBy)}> {sortByText}</button>
                                <Element.DropDownMenus style={{ display: showSortBy ? '' : 'none' }}>
                                    {
                                        SELECT_ORDER_BY_ITEMS.map((orderItem, index) => <Element.DropDownMenu key={index}
                                            onClick={() => { setSortBy(orderItem.value); setSortByText(orderItem.text); setShowSortBy(false) }}>
                                            {orderItem.text}
                                        </Element.DropDownMenu>)
                                    }
                                </Element.DropDownMenus>
                            </div>
                        </div>
                        {
                            showFilter &&
                            <Element.FilterContent>
                                <Element.FilterFooter>
                                    <Element.FilterCurrencyContainer>
                                        <Element.FilterLabel>Sale Types: </Element.FilterLabel>
                                        <Element.FilterCurrencies>
                                            {
                                                SELECT_SALE_TYPES.map((saleType, index) => <Element.FilterCategory key={index} onClick={() => onSetSaleType(saleType)} className={filters.saleType?.value === saleType.value ? 'active' : ''}>{saleType.text}</Element.FilterCategory>)
                                            }
                                        </Element.FilterCurrencies>
                                    </Element.FilterCurrencyContainer>
                                    <button className="cta-button" onClick={() => onSetSelectedFilters()}>Ok</button>
                                </Element.FilterFooter>
                            </Element.FilterContent>
                        }
                    </div>
                    {
                        (selectedFilters.saleType) &&
                        <Element.FilterString>
                            {
                                selectedFilters.saleType &&
                                <Element.FilterStringItem>
                                    <label>Sale Type: </label>
                                    <Element.FilterValue>{selectedFilters.saleType.text}<Element.RemoveIcon size={12} onClick={() => removeSaleType()} /></Element.FilterValue>
                                </Element.FilterStringItem>
                            }
                            <Element.FilterClearAll onClick={() => onClearAll()} >
                                clear all
                            </Element.FilterClearAll>
                        </Element.FilterString>
                    }
                    <div className="cardList">
                        {
                            items.map((item, index) => <Nft key={index} {...props} item={item} />)
                        }
                    </div>
                    <div className="cardList" style={{ display: noItems ? "none" : "" }}>
                        <button className="cta-button" onClick={() => loadMore()}>
                            {loading ? "Loading..." : "Load more"}
                        </button>
                    </div>
                </Element.Container>
            </Element.HomeCardList>
        </Element.HomePageWrap>
    );
}

export default Home;
