import styled from 'styled-components';
import { Search } from "@styled-icons/material/Search";
import { FilterAlt } from "@styled-icons/material/FilterAlt";
import { PlayCircleOutline } from "@styled-icons/material";
import { Image } from "@styled-icons/material/Image";
import { Heart } from "@styled-icons/feather/Heart";
import { Circle } from "@styled-icons/fa-regular/Circle";
import { DotCircle } from "@styled-icons/fa-regular/DotCircle"
import { Close } from "@styled-icons/material/Close";
import { MusicNote } from "@styled-icons/material/MusicNote";
import { Heart as HeartFill } from "@styled-icons/fa-solid/Heart";

export const Container = styled.div`
    max-width: 1480px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index:1;
    @media(max-width:1199px){
        max-width: 780px;
    }
    @media(max-width:991px){
        max-width: 680px;
    }
    h1,h2,h3,h4,h5,h6{
        margin: 0;
        margin-bottom: 30px;
        font-weight: 500;
        line-height: 1.4;
    }
    h1{
        font-size: 50px;
        @media(max-width:1199px){
            font-size: 50px;
        }
        @media(max-width:767px){
            font-size: 35px;
        }
    }
    h2{
        font-size: 60px;
        @media(max-width:1199px){
            font-size: 50px;
        }
        @media(max-width:767px){
            font-size: 30px;
        }
    }
    h3{
        font-size: 50px;
        @media(max-width:1199px){
            font-size: 40px;
        }
        @media(max-width:767px){
            font-size: 22px;
        }
    }
    h4{
        font-size: 40px;
        @media(max-width:1199px){
            font-size: 30px;
        }
        @media(max-width:767px){
            font-size: 18px;
        }
    }
    h5{
        font-size: 30px;
        @media(max-width:1199px){
            font-size: 20px;
        }
        @media(max-width:767px){
            font-size: 18px;
        }
    }
    h6{
        font-size: 20px;
        @media(max-width:1199px){
            font-size: 16px;
        }
    }
    a{
        text-decoration: none;
        color: #000;
        transition: all .3s;
        outline: none !important;

        &:hover{
            text-decoration: underline;
            outline: none !important;
        }
    }
    img{
        vertical-align: top;
    }
    p{
        margin: 0;
        margin-bottom: 15px;
        &:last-of-type{
            margin-bottom: 0;
        }
    }
    .cta-button{
        background: var(--colorOrange);
        padding: 12px 30px;
        border:1px solid var(--colorOrange);
        border-radius: 100px;
        display: inline-block;
        color: #fff;
        cursor: pointer;
        transition: all 0.3s;   
        &:hover{
            background: #000 !important;
            text-decoration: none;
            border-color: #000 !important;
            outline: none !important;
        }
    }

    input,button{
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
    }
    .formWrap,
    form{
        .form-control{
            background: #fff;
            padding: 12px 24px;
            outline: none !important;
            border: none !important;
        }
        .inputGroup{
            display: flex;
            flex-wrap: wrap;
            @media(max-width:767px){
                flex-wrap: nowrap;

            }
        }
    }
    .sectionHeading{
        text-align: center;
    }
    
`


export const HomeCardList = styled.div`
    padding-bottom: 100px;

    .tabBox {
        .tagLinks {
            ul {
                display: flex;
                margin: 0;
                padding: 0;
                list-style: none;
                border-bottom: 2px solid #EBEBEB;
                li{
                    margin-right: 40px;
                    font-size: 25px;
                    padding-bottom: 6px;
                    border-bottom: 2px solid transparent;
                    &.is-active{
                        border-color: var(--colorOrange);
                    }
                    span{
                        position: relative;
                        display: inline-block;
                        
                    }
                }
            }
        }
    }

    .resultCountBox{
        display: flex;
        flex-wrap: wrap;
        margin: 30px 0;
        .resultCountLinks{
            .link{
                font-size: 20px;
                padding: 15px 30px;
                border-radius: 100px;
                display: inline-block;
                text-decoration: none;
                margin-right: 5px;
                &:hover{
                    text-decoration: none;
                    background-color: #EBEBEB;
                }
                &.is-active{
                    background-color: var(--colorOrange);
                    color: #fff;
                }
            }
        }
        .button-box{
            flex: 1;
            display: flex;
            justify-content: flex-end;
            .cta-button{
                display: inline-flex;
                align-items: center;
                margin-left: 20px;
                img{
                    margin-right: 8px;
                }
            }
        }
    }
    
    .filterBox{
        position: relative;
        display: grid;
        grid-template-columns: 3fr .8fr 1fr;
        grid-gap: 30px;
        margin: 60px 0;
        @media(max-width:1199px){
            grid-template-columns: 2.4fr .8fr 1fr;
            grid-gap: 10px;
            margin: 40px 0 60px;
        }
        @media(max-width:767px){
            grid-template-columns:1fr;
        }
        .item-box{
            display: flex;
            width: 100%;
        }
        .form-search{
            background-color:#EBEBEB;
            background-image: url(/images/search-icon.png);
            background-position:left 40px center;
            background-repeat: no-repeat;
            padding: 0 40px;
            padding-left: 76px;
            border: none;
            border-radius: 50px;
            height: 60px;
            font-size: 20px;
            flex: 1;
            @media (max-width:1199px) {
                height: 60px;
                font-size: 16px;
                background-size: 20px;
            }
            @media (max-width:767px) {
                max-width:100%;
                padding: 0 20px;
                padding-left: 45px;
                background-position:left 15px center;
            }
        }

        .filter-button{
            width: 100%;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            height: 60px;
            img{
                margin-right: 8px;
            }
            @media (max-width:1199px) {
                height: 60px;
                font-size: 16px;
                img{
                   max-width: 20px;
                }
            }
        }
        
        .selectWrap{
            position: relative;
            background: var(--colorOrange);
            width: 100%;
            border:1px solid var(--colorOrange);
            border-radius: 100px;
            display: inline-block;
            color: #fff;
            cursor: pointer;                        
        }
    }
    
    .cardList{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .item-box{
            width: 300px;     
            margin: 10px;       
        }
        .cardBox{
            .img-box{
                // height: 308px;
                height: 0;
                    padding-bottom: 98%;
                position: relative;
                overflow: hidden;
                .imageIcon{
                    position: absolute;
                    width: 40px;
                    height: 40px;
                    border-radius: 50px;
                    background: rgba(226, 71, 23, .64);
                    z-index: 2;
                    top: 13px;
                    left: 13px;
                    display: grid;
                    place-items: center;
                    img{
                        width:20px;
                        
                    }
                }
                .timer{
                    position: absolute;
                    background: rgba(226, 71, 23, .64);
                    z-index: 2;
                    top: 30px;
                    right: 0px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 20px 0 0 20px;
                    color: #fff;
                    padding: 10px 15px;
                    font-size: 20px;
                    img{
                        margin-right: 7px;
                    }
                }
                .cardImage{
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 0;
                }
            }
            .info-box{
                padding: 20px 26px;
                background: #F4F4F4;
                border-radius: 0 0 5px 5px;
            }
            .titleTag-box{
                display: flex;
                justify-content: space-between;
                // border: 1px solid red;
                h2{
                    font-size: 18px;
                    margin: 0;
                    padding-right: 15px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
                .tag{
                    padding: 5px 7px;
                    border-radius:30px;
                    font-size:10px;
                    font-weight: 700;
                    background: #E4E4E4;
                    text-transform: uppercase;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                }
            }
            .price-box{
                margin: 10px 0;
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                .bid{
                    color: #838383;
                    display: inline-block;
                    padding-right: 15px;
                }
                .price-wrap{
                    img{
                        width:20px;
                        margin-top: -2px;
                        margin-right: 5px;
                    }
                    .price{
                        text-align: right;
                        small{
                            fons-size: 10px;
                            color: #838383;
                            display: block;
                        }
                    }
                }
            }
            .creator-box{
                border-top: 2px solid #A7A7A7;
                padding-top: 10px;
                margin: 10px 0;
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                .col-1{
                    color: #838383;
                    display: inline-block;
                    padding-right: 15px;
                }
                .col-2{
                    display: flex;
                    align-items: center;
                    img{
                        width:20px;
                        margin-top: -2px;
                        margin-right: 5px;
                    }
                    
                }
            }
        }
    }
`;

export const HomePageWrap = styled.div`
    position: relative;
`;

export const DividerLine = styled.div`
    height: 30px;
    position: relative;
    &:before{
        position: absolute;
        left: 0;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
        background-color: #EBEBEB;
        content: "";
        height:1px;
    }
`


// clean end


export const Header = styled.div`
   height: 200px;
    position: relative;
    @media (min-width: 768px){
        height: 500px;
    }
    
    img{
        width: 200px;
        height: 200px;
        border-radius: 8px;
        box-shadow: rgb(0 0 0 / 15%) 2px 2px 0px;
    }
    @media (min-width: 768px){
     img{
            width: 500px;
            height: 500px;
        }
    }
    .slider_index_0{
        left: 10%;
        position: absolute;
       @media (min-width: 768px){
            left: 0;
        }
    }
    .slider_index_1{
        left: 18%;
        position: absolute;
        @media (min-width: 768px){
            left: 15%;
        }
    }
    .slider_index_2{
        left: 26%;
        position: absolute;
        @media (min-width: 768px){
            left: 30%;
        }
    }
    .slider_index_3{
        left: 34%;
        position: absolute;
        @media (min-width: 768px){
            left: 45%;
        }
    }
    .slider_index_4{
        left: 40%;
        position: absolute;
        @media (min-width: 768px){
            left: 60%;
        }
    }
    .slider_0{
        transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1);
        z-index: 5;
        position: absolute;
    }
    .slider_1{
        transform: translate3d(20px, 0px, 0px) scale3d(0.9, 0.9, 1);
        z-index: 4;
        .backCover{
            background: linear-gradient(rgba(255, 255, 255, 0.16) 50%, rgba(255, 255, 255, 0.5) 100%);
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
        }
    }
    .slider_1-1{
        transform: translate3d(-20px, 0px, 0px) scale3d(0.9, 0.9, 1);
        z-index: 4;
        .backCover{
            background: linear-gradient(rgba(255, 255, 255, 0.16) 50%, rgba(255, 255, 255, 0.5) 100%);
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
        }
    }
     .slider_2{
        transform: translate3d(40px, 0px, 0px) scale3d(0.8, 0.8, 1);
        z-index: 3;
        .backCover{
           background: linear-gradient(rgba(255, 255, 255, 0.16) 50%, rgba(255, 255, 255, 0.5) 100%);
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
        }
    }
     .slider_2-1{
        transform: translate3d(-40px, 0px, 0px) scale3d(0.8, 0.8, 1);
        z-index: 3;
        .backCover{
           background: linear-gradient(rgba(255, 255, 255, 0.16) 50%, rgba(255, 255, 255, 0.5) 100%);
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
        }
    }
     .slider_3{
        transform: translate3d(60px, 0px, 0px) scale3d(0.7, 0.7, 1);
        z-index: 2;
        .backCover{
           background: linear-gradient(rgba(255, 255, 255, 0.16) 50%, rgba(255, 255, 255, 0.5) 100%);
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
        }
    }
     .slider_3-1{
        transform: translate3d(-60px, 0px, 0px) scale3d(0.7, 0.7, 1);
        z-index: 2;
        .backCover{
           background: linear-gradient(rgba(255, 255, 255, 0.16) 50%, rgba(255, 255, 255, 0.5) 100%);
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
        }
    }
     .slider_4{
        transform: translate3d(80px, 0px, 0px) scale3d(0.6, 0.6, 1);
        z-index: 1;
        .backCover{
            background: linear-gradient(rgba(255, 255, 255, 0.16) 50%, rgba(255, 255, 255, 0.5) 100%);
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
        }
    }
     .slider_4-1{
        transform: translate3d(-80px, 0px, 0px) scale3d(0.6, 0.6, 1);
        z-index: 1;
        .backCover{
            background: linear-gradient(rgba(255, 255, 255, 0.16) 50%, rgba(255, 255, 255, 0.5) 100%);
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
        }
    }
   
`;

export const SlideContainer = styled.div`
    cursor: pointer;
    position: relative;
    transform-origin: 50% 50% 0px;
    transition: transform 500ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
`;

export const SlideInfo = styled.div`
    position: absolute;
    bottom: 4px;
    left: 0;
    width: 100%;
    .title{
        color: white;
        font-size: 28px;
        font-weight: bold;
        padding: 0 8px;
    }
    .bottomInfo{
        padding: 4px 8px;
        .createName{
            color: white;
        }
        .bidTimeContainer{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            color: white;
            .bidTime{
                background: black;
                padding: 4px;
                border-radius: 4px;
            }
        }
    }
        
  @media (min-width: 768px){
    bottom: 20px;
    .title{
       font-size: 20px;
        padding: 0 8px;
    }
    .bottomInfo{
        padding: 8px 12px;
       display: flex;
       justify-content: space-between;
       .bideTime{
            text-align: right;
       }
   }
  }
`;

export const Filter = styled.div`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 0 20px;
  @media (min-width: 768px){
    display flex;
  }
`;

export const FilterLeft = styled.div`
    display: block;
    align-items: center;
    margin-top: 8px;
  @media (min-width: 480px){
    display flex;
  }
`;

export const FilterRight = styled.div`
    display: block;
    align-items: center;
     margin-top: 8px;
   @media (min-width: 480px){
    display flex;
  }
`;

export const FilterBtn = styled.div`
    display: flex;
    align-items: center;
    border: solid 1px grey;
    padding: 4px 12px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 4px;
`;

export const FilterAltIcon = styled(FilterAlt)`

`;

export const DropDownMenus = styled.div`
    background: white;
    color: var(--colorOrange);
    width: 100%;
    position: absolute;
    bottom: -140px;
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 15px;
    z-index: 99;    
`;

export const DropDownMenu = styled.div`
    padding 12px 24px;
    cursor: pointer;
    display: flex;
    font-size: 14px;
    align-items: center;
    &:hover {
        background-color: #e3e3e3;
    }
`;



export const Categories = styled.div`
    display: flex;
    align-items: center;
    margin-top: 4px;
   @media (min-width: 480px){
    margin-left: 2rem;
  }
`;

export const Category = styled.div`
    margin: 0 8px;
    cursor: pointer;
    &.active{
        color: #c99400;
    }
`;

export const SearchContainer = styled.div`
    border: solid 1px grey;
    padding: 4px 12px;
    border-radius: 4px;
    margin-top: 4px;
    display: flex;
`;

export const SearchIcon = styled(Search)`
    
`;

export const SearchInput = styled.input`
    border: unset;
    flex-grow: 1;
    &:focus-visible{
        outline: unset;
    }
`;

export const FilterContent = styled.div`
    position: absolute;
    background-color: white;
    top: 60px;
    width: 100%;
    z-index: 999;
    padding: 20px 0px;
`;

export const FilterCategoryContainer = styled.div`
    display: flex;
    margin-top: 8px;
`;

export const FilterLabel = styled.div`
    padding: 4px;
`;

export const FilterCategories = styled.div`
     display: flex;
     flex-wrap: wrap;
`;

export const FilterClearAll = styled.div`
    margin-left: 20px;
    padding-top: 4px;
    text-decoration: underline;
    color: #c99400;
    cursor: pointer;
`;

export const FilterCategory = styled.div`
    color: grey;
    padding: 4px 12px;
    margin-left: 12px;
    cursor: pointer;
    &.active {
        color: #c99400;
        background: #f5f5f5;
        font-weight: 500;
    }
    
`;

export const FilterFooter = styled.div`
     display: block;
     justify-content: space-between;
     align-items: center;
    @media (min-width: 768px){
        display: flex;
    }
`;

export const FilterCurrencyContainer = styled.div`
     display: flex;
`;

export const FilterActionBtn = styled.div`
    background-image: linear-gradient(180deg,#F8D12F 0%,var(--colorOrange); 100%);
    padding: 8px 36px;
    font-size: 20px;
    margin-right: 80px;
    border-radius: 4px;
    cursor: pointer;
    width: 48px;
    text-align: center;
`;

export const FilterCurrencies = styled.div`
     display: flex;
`;

export const CurrencyPrices = styled.div`
     display: flex;
     align-items: center;
     margin-left: 20px;
`;

export const CurrencyInputContainer = styled.div`
    border: 1px solid transparent;
    border-color: #EAECEF;
    border-radius: 4px;
`;

export const CurrencyInput = styled.input`
    color: #1E2329;
    padding: 4px;
    font-size: 14px;
    width: 136px;
    outline: none;
    border: none;
    border-color: #EAECEF;
    &::-webkit-inner-spin-button, &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export const CurrencyInputDivider = styled.div`
    margin-right: 11px;
    margin-left: 11px;
`;

export const FilterCurrency = styled.div`
    color: grey;
    padding: 4px 12px;
    margin-left: 12px;
    display: flex;
    align-items: center;
    cursor: pointer;
     &.active {
        color: var(--colorOrange);;
        font-weight: 500;
    }
`;

export const CircleIcon = styled(Circle)`
    margin-right: 4px;
`;

export const DotCircleIcon = styled(DotCircle)`
    margin-right: 4px
`;

export const FilterString = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 40px;
    padding: 10px;
`;

export const FilterStringItem = styled.div`
    display: flex;
    align-items: center;
    margin-right: 16px;
    margin-top: 8px;
          
    label{
        margin-right: 8px;
    }
`;

export const FilterValues = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  margin-top: 4px;
`;

export const FilterValue = styled.div`
    display: flex;
    align-items: center;
    margin-right: 8px;
    color: grey;
    font-size: 14px;
`;

export const RemoveIcon = styled(Close)`
    background: grey;
    border-radius: 8px;
    color: white;
    padding: 2px;
    margin-left: 4px;
`;


export const Nfts = styled.div`
    display: flex;
    margin-top: 40px;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
`;

export const NftContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px 16px 36px 16px;
    margin: 16px 10px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        box-shadow: rgb(0 0 0 / 10%) 0px 0px 15px;
    }
`;

export const NftImageContainer = styled.div`
    position: relative;
`;

export const NftImage = styled.img`
    border-radius: 8px;
    width: 248px;
    height: 248px;
`;

export const NftType = styled.div`
    background: black;
    padding: 4px;
    border-radius: 4px;
    position: absolute;
    left: 16px;
    top: 16px;
`;

export const VideoIcon = styled(PlayCircleOutline)`

`;

export const ImageIcon = styled(Image)`

`;

export const AudioIcon = styled(MusicNote)`

`;

export const BidTime = styled.div`
    background: black;
    padding: 4px;
    border-radius: 4px;
    position: absolute;
    right: 16px;
    top: 18px;
    color: white;
    font-size: 12px;
`;

export const Favourites = styled.div`
    background: black;
    padding: 4px;
    border-radius: 4px;
    position: absolute;
    right: 16px;
    bottom: 16px;
    color: white;
    font-size: 12px;
    display: flex;
    align-items: center;
`;

export const LoveFillIcon = styled(HeartFill)`
    color: var(--colorOrange);;
`;

export const LoveIcon = styled(Heart)`

`;


export const FavouritesCount = styled.div`
    margin-left: 4px;
`;

export const NftTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
`;

export const NftTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

export const NftNetwork = styled.div`
    padding: 4px 8px;
    background: #d1d1d1;
    color: black;
    font-size: 12px;
    border-radius: 4px;
`;


export const CurrentPrice = styled.div`
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
`;

export const OptionText = styled.div`
    font-size: 14px;
    color: grey;
`;

export const OptionContent = styled.div`
    text-align: right;
`;

export const PriceContainer = styled.div`
    display: flex;
`;

export const CoinImage = styled.img`
    width: 16px;
    height: 16px;
`;

export const Price = styled.div`
    
`;


export const Unit = styled.div`
    
`;


export const UsdPrice = styled.span`
    
`;


export const Creator = styled.div`
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
`;

export const CreatorImage = styled.img`
    width: 12px;
    height: 12px;
    border-radius: 6px;
`;

export const CreatorName = styled.div`
    
`;

export const CreatorContent = styled.div`
    display: flex;
    align-items: center;
`;


export const ProgressContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;


