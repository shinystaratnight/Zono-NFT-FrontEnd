import styled from 'styled-components';
import {ContentCopy} from "@styled-icons/material";
import {Verified} from "@styled-icons/material";

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
        font-size: 60px;
        @media(max-width:1199px){
            font-size: 60px;
        }
        @media(max-width:767px){
            font-size: 40px;
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
        padding: 12px 45px;
        border:1px solid var(--colorOrange);
        border-radius: 100px;
        display: inline-block;
        color: #fff;
        cursor: pointer;
        transition: all 0.3s;   
        @media(max-width:1400px){
            padding: 12px 20px;
        }
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


export const ProfileInfo = styled.div`
    display: block;
  @media (min-width: 768px){
    display flex;
  }
`;

export const ProfileAvatarContainer = styled.div`
    display: flex;
    align-items; center;
    justify-content: center;
    position: relative;
`;

export const AvatarContent = styled.div`
    position: relative;
`;

export const ProfileAvatar = styled.img`
    width: 160px;
    height: 160px;
    border-radius: 80px;
`;

export const VerifiedStatusIcon = styled(Verified)`
    position: absolute;
    right: 8px;
    bottom: 8px;
`;

export const ProfileInfoContent = styled.div`
    flex-grow: 1;
    margin-left: 40px;
`;

export const Name = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
`;

export const AddressContainer = styled.div`
    display: flex;
    align-items: center;
    display: block;
    @media (min-width: 768px){
    display flex;
  }
`;

export const AddressContent = styled.div`
    display: flex;
`;

export const Address = styled.div`
    margin-right: 12px;
`;

export const CopyActionIcon = styled(ContentCopy)`
    margin-right: 24px;
    background: grey;
    padding: 4px;
    border-radius: 4px;
    cursor: pointer;
`;

export const Email = styled.div`

`;

export const Caption = styled.div`
    margin-top: 20px;
`;

export const ProfileActions = styled.div`
    text-align: center;
`;

export const EditProfileBtn = styled.div`
    background-image: linear-gradient(180deg,#F8D12F 0%,var(--colorOrange); 100%);
    padding: 12px 24px;
    font-size: 24px;
    border-radius: 4px;
    cursor: pointer;
    width: 120px;
    margin: 0 auto;
    margin-top: 12px;
`;

export const TabContainer = styled.div`
    margin-top: 60px;
`;


export const TabBar = styled.div`
    display: flex;
    flex-wrap: wrap;
`;


export const tab = styled.div`
    font-size: 24px;
    padding: 8px 20px;
    margin: 0 12px;
    cursor: pointer;
    &:hover {
       background-color: #e3e3e3;
    }
    &.active {
       border-bottom: solid 4px #F8D12F;
    }
`;

export const TabContent = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    width: 100%;
    flex-wrap: wrap;
`;

export const HomeCardList = styled.div`
    padding: 100px 0;
    @media(max-width: 767px){
        padding-top: 50px;        
    }
    .tabBox{
        
        .tagLinks{
            width: 100%;
            white-space: nowrap;
            overflow-x: auto;
            ul{
                display: flex;
                margin: 0;
                padding: 0;
                list-style: none;
                border-bottom: 2px solid #EBEBEB;
                li{
                    cursor: pointer;
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
                    @media(max-width:1200px){
                        font-size: 18px;
                    }
                }
            }
        }
    }

    .resultCountBox{
        display: flex;
        flex-wrap: wrap;
        margin: 30px 0;
        @media(max-width:1200px){
            flex-direction: column;
        }
        .resultCountLinks{
            margin: 0 -5px;
            .link{
                cursor: pointer;
                font-size: 20px;
                padding: 15px 30px;
                border-radius: 100px;
                display: inline-block;
                text-decoration: none;
                margin-right: 5px;
                margin: 5px;
                &:hover{
                    text-decoration: none;
                    background-color: #EBEBEB;
                }
                &.is-active{
                    background-color: var(--colorOrange);
                    color: #fff;
                }
                @media(max-width:1200px){
                    font-size: 16px;
                }
                @media(max-width:767px){
                    font-size: 14px;
                    padding: 12px 20px 10px;
                }
            }
        }
        .button-box{
            flex: 1;
            display: flex;
            justify-content: flex-end;
            @media(max-width:1200px){
                 justify-content: flex-start;
                 margin-top: 30px;
                 width: 100%;
                 display: block;
            }
            .cta-button{
                display: inline-flex;
                align-items: center;
                margin-left: 20px;
                img{
                    margin-right: 8px;
                }
                @media(max-width:1200px){
                    margin: 5px;
                    &:first-of-type{
                        margin-left: 0px;
                    }
                    img{
                        width: 18px;
                    }
                }
                @media(max-width:767px){
                    font-size: 14px;
                    padding: 12px 20px 10px;
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
            position:relative;
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
            padding: 0px 30px;
            width: 100%;
            border:1px solid var(--colorOrange);
            border-radius: 100px;
            display: inline-block;
            color: #fff;
            cursor: pointer;
            @media (max-width:1199px) {
                padding: 0px 20px;
            }
            select{
                background: var(--colorOrange);
                color: #fff;
                width: 100%;
                outline: 0;
                border: 0;
                font-size: 18px;
                box-shadow: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                height: 100%;
                background-image: url(./images/arrow-down.png);
                background-position: right center;
                background-repeat: no-repeat;
                padding-right: 25px;
                &:-ms-expand {
                    display: none;
                }
                @media (max-width:1199px) {
                    height: 60px;
                    font-size: 16px;
                }
            }
            
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

    .full-column{
        display: block;
        .item-box{
            padding: 50px 0;
            border-bottom: 2px solid #ddd;
            @media(max-width:767px){
                padding: 70px 0;

            }
            >.inner-wrap{
                display: grid;
                grid-template-columns: 2fr 1fr;
                @media(max-width:767px){
                    grid-template-columns: 1fr;

                }
            }
            .left-box{
                display: grid;
                grid-template-columns: 1fr 2fr;
                grid-column-gap: 50px;
                align-items: center;
                padding: 0 50px;
                position: relative;
                @media(max-width:1199px){
                    grid-template-columns: 1fr 1.1fr;
                    padding: 0;
                    padding-right: 10px;
                    grid-column-gap: 20px;
                }
                @media(max-width:767px){
                    padding-bottom: 0px;
                    grid-template-columns: 1fr 2fr;
                }
                @media(max-width:575px){
                    grid-template-columns: 1fr;
                    
                }
                &:after{
                    content:"";
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    height: 90%;
                    width: 3px;
                    background-color: #777;
                    @media(max-width:767px){
                       width: 100%;
                       height: 2px;
                       top: auto;
                       bottom: 0;
                       display: none
                    }
                }
                .img-box{
                    height: 270px;
                    position: relative;
                    overflow: hidden;
                    @media(max-width:1199px){
                        height:220px;
                    }
                    @media(max-width:575px){
                       height: 0;
                       padding-bottom: 100%;
                       margin-bottom: 20px;
                    }
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
                        &.wonBid{
                            background: rgba(23, 226, 67, 0.64);
                            text-transform: uppercase;
                            font-size: 16px;
                            padding: 10px 20px 8px;
                        }
                        &.lostBid{
                            background: rgba(226, 47, 23, 0.64);
                            text-transform: uppercase;
                            font-size: 16px;
                            padding: 10px 20px 8px;

                        }
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
                .topTitle{
                    font-size: 20px;
                    color: #838383;
                     @media(max-width:1199px){
                         font-size: 16px;
                     }
                }
                .titleTag-box{
                    display: flex;
                    margin: 10px 0;
                    // border: 1px solid red;
                    h2{
                        font-size: 35px;
                        margin: 0;
                        padding-right: 15px;
                        @media(max-width:1199px){
                            font-size: 20px;
                        }
                    }
                    .tag{
                        padding: 2px 15px 0px;
                        border-radius:30px;
                        font-size:18px;
                        height: 40px;
                        font-weight: 700;
                        background: #E4E4E4;
                        text-transform: uppercase;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                        @media(max-width:1199px){
                            font-size: 13px;
                            height: auto;
                            padding: 0px 15px 0px;
                        }
                    }
                }
                .timing{
                    font-size: 18px;
                    color: #838383;
                    margin: 15px 0;
                     @media(max-width:1199px){
                            font-size: 14px;
                            
                        }
                }
                .creator-box{
                    margin: 10px 0;
                    display: flex;
                    font-size: 22px;
                    @media(max-width:1199px){
                        font-size: 16px;
                        
                    }
                    .col-1{
                        color: #838383;
                        display: inline-block;
                        padding-right: 15px;
                    }
                    .col-2{
                        display: flex;
                        align-items: center;
                        img{
                            width:25px;
                            margin-top: -2px;
                            margin-right: 5px;
                        }
                        
                    }
                }
            }
            .right-box{
                text-align: right;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                padding: 0 50px;
                @media(max-width:1199px){
                    padding: 0;
                    padding-left: 10px;
                }
                @media(max-width:767px){
                    justify-content: flex-start;
                    padding: 10px 0 0;
                    text-align: left;
                    .inner-wrap{
                        display: flex;
                        width: 100%;
                        >div{
                            flex:1;
                            margin: 0;
                        }
                    }
                }
                @media(max-width:575px){
                    .inner-wrap{
                        flex-direction: column;
                        .bidPrice{
                            margin-top: 20px;
                        }
                    }
                }
                .heading{
                    font-size: 20px;
                    font-weight: 500;
                    margin-bottom: 5px;
                    color: #838383;
                    @media(max-width:1199px){
                        font-size: 16px;
                    }
                }
                .price-wrap{
                    img{
                        width:35px;
                        margin-right: 10px;
                        @media(max-width:1199px){
                             width:25px;
                        }
                    }
                    .price{
                        text-align: right;
                        font-size: 25px;
                        font-weight: bold;
                        @media(max-width:1199px){
                            font-size: 20px;
                        }
                        small{
                            font-size: 15px;
                            color: #838383;
                            display: block;
                            @media(max-width:767px){
                                text-align: left;
                                margin: 10px 0 0;
                            }
                        }
                    }
                }
                .bidPrice{
                    margin-top: 30px;
                    .heading{
                        color: #85B22F;
                    }
                }
            }
        }
    }
`;

export const ProfileBanner = styled.div`
    padding: 50px 0;
    background-color: var(--colorOrange);
    color: #fff;

    .inner-wrap{
        min-height: 370px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        @media(max-width: 1400px){
            min-height: 320px;
        }
        @media(max-width:1199px){
            flex-direction: column;
            align-items: flex-start;
            text-align: center;
        }
        .content-box{
            width: 60%;
            @media(max-width:1199px){
               width: 100%;
               margin-bottom: 30px;
            }
            .profile-box{
                display: flex;
                @media(max-width:1199px){
                    display: block;
                }
                .profileimg{
                    border-radius: 100px;
                    margin-right: 30px;
                    width:150px;
                }
                h1{
                    font-size: 40px;
                    margin-bottom: 20px;
                    margin-top: 10px;
                    @media(max-width: 1400px){
                        font-size: 35px;
                    }
                    @media(max-width: 1199px){
                        margin-bottom: 10px;
                    }
                    @media(max-width: 767px){
                        font-size: 27px;
                    }
                }
                .pinId{
                    font-size:27px;
                    .copy-button{
                        padding: 6px;
                        background-color:#fff;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 6px;
                        margin: 0 20px;
                        cursor: pointer;
                         @media(max-width: 767px){
                            padding: 4px;
                            img{
                                width: 11px;
                            }
                        }
                    }
                    @media(max-width: 1400px){
                        font-size: 20px;
                    }
                    @media(max-width: 767px){
                        font-size: 16px;
                    }
                }
                
            }
        }
        .button-box{
            flex: 1;
            text-align: right;
            @media(max-width:1199px){
                   text-align: center;
                   width: 100%;
                }
            .cta-button{
                margin: 10px 8px;
               
            }
            .account-button{
                background-color: #FF8B67;
                border-color: #FF8B67;
            }
            .setting-button{
                background-color: #962C0B;
                border-color: #962C0B;
            }
        }
        .cta-button{
            background: var(--colorOrange);
            padding: 12px 45px;
            border:1px solid var(--colorOrange);
            border-radius: 100px;
            display: inline-block;
            color: #fff;
            cursor: pointer;
            transition: all 0.3s;  
            @media(max-width:767px){
                min-width: 200px;
            } 
            &:hover{
                background: #000 !important;
                text-decoration: none;
                border-color: #000 !important;
                outline: none !important;
            }
        }
    }
`;

export const ProfilePageWrap = styled.div`
    position: relative;
`;