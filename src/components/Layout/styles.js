import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1480px;
    width: 100%;
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

export const SiteBanner = styled.div`
    img {
        width: 100%;
        height: auto;

        &.banner {
            display: none;
            @media (max-width: 1024px) {
                display: block;
            }
        }
        &.banner-lg {
            display: none;
            @media (min-width: 1024px) {
                display: block;  
            }
        }
    }
`

export const SiteHeader = styled.div`

    background:#EAEAEA;
    padding: 20px 0;
    position: sticky;
    top: 0;
    z-index: 999;
    .headerWrap{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .headerLogo{
            width: 33.333%;
            @media(max-width:1300px){
                width: 25%;    
            }
        }
        .menutriggerButton{
            margin-left: auto;
            .menuTrigger{
                width: 33px;
                height: 33px;
                display: inline-block;
                /* border: 1px solid red; */
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: center;
                cursor: pointer;
            }
            .menuTrigger .line{
                width: 33px;
                height: 2px;
                background-color: var(--colorOrange);
                display: block;
                margin: 4px 0;
                -webkit-transition: all 0.3s ease-in-out;
                -o-transition: all 0.3s ease-in-out;
                transition: all 0.3s ease-in-out;
            }
            .menuTrigger .line:first-of-type{
                margin-top: 0;
            }
            .menuTrigger .line:last-of-type{
                margin-bottom: 0;
            }
            @media(min-width:1200px){
                display: none;
            }
        }
        .menuClose{
            background: var(--colorOrange);
            background-image: url(./images/crossIcon.svg);
            background-position: center;
            background-repeat: no-repeat;
            background-size: 15px;
            padding: 8px;
            display: block;
            width: 40px;
            height: 40px;
            position: absolute;
            top: 20px;
            left: 20px;
            display: flex;
            align-items: center;
            border-radius: 50px;
            transition: all 0.3s;
            display: none;
            cursor: pointer;
            @media(max-width: 1199px){
                display: flex;
            }
            &:hover{                
                    transform: rotate(180deg);
            }
            img{
                height: 18px;
                width: 100%;
            }
        }
        .headerMenu{
            width: auto;
            flex: 1;
            // border: 1px solid red;
            .innerWrap{
                display: flex;
                flex-wrap: wrap;
                .menuLink{
                    text-decoration: none;
                }
                .col{
                    flex: auto;
                    width: auto;
                    // border: 1px solid red;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                    .cta-button{
                        @media(min-width: 1200px){
                            margin-right: 20px;
                        }
                    }
                    @media(max-width:1199px){
                        flex-direction: column;
                        a{
                            margin:10px 0;
                        }
                    }
                }
                .col-2{
                    justify-content: flex-end;
                    width: 60%;
                }
                .headSetting{
                    display: inline-block;
                    margin-right: 20px;
                    span{
                        display: inline-block;
                        padding: 0 8px;
                        cursor: default;
                        &:first-of-type{
                            padding-left: 0;
                        }
                        &:last-of-type{
                            padding-right: 0;
                        }
                    }
                    @media(max-width:1199px){
                        margin: 10px 0;
                    }
                }
            }
            @media(max-width:1199px){
                position: fixed;
                top:0;
                right: 0;
                height: 100vh;
                background: #fff;
                padding: 60px 30px;
                max-width: 400px;
                transform: translateX(100%);
                transition: all .3s;
                .innerWrap{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    max-height: 100%;
                    overflow-y: auto;
                    li{
                        margin-top: 20px;
                    }
                }
            }
        }
    }
`

export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    position: relative;
    margin-right: 20px;
    
    @media(max-width:1199px){
        margin:10px 0;
        flex-direction: column;
        width: 100%;
        >div{
            margin:10px 0;
        }
    }
`;

export const DropDownMenus = styled.div`
    background: white;
    width: 240px;
    position: absolute;
    bottom: -144px;
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 15px;
    z-index: 99;
    @media(max-width:1199px){
        position: relative;
        width: 100%;
        bottom: 0;
    }
`;
// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   height: 100%;
// `;

export const Main = styled.div`
  // margin-top: 120px;
`;

export const HeaderLogo = styled.div`
    display: none;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    text-decoration: unset;
    display flex;
`;

export const LogoImage = styled.img`
    width: 50px;
    height: 50px;
    @media(max-width:767px){
        width: 40px;
        height: 40px;        
    }
`;

export const HeaderLogoLabel = styled.div`
    margin-left: 8px;
    color: var(--colorOrange);;
`;

export const HeaderNFT = styled.div`
    padding-left: 4px;
    color: 'black';
`;

export const HeaderMiddle = styled.div`
    display: none;
    align-items: center;
    font-size: 20px;
  @media (min-width: 768px){
    display flex;
  }
`;

export const LinkMarket = styled.a`
    padding: 0 8px;
    text-decoration: unset;
    color: black;
`;

export const LinkBuy = styled.a`
    padding: 0 8px;
    color: #b95e19;
    text-decoration: unset;
`;




export const CreateBtn = styled.div`
    border: solid 1px grey;
    border-radius: 20px;
    background-image: linear-gradient(to right, #ff06a2 , #54a5ff);
    padding: 10px 28px;
    cursor: pointer;
    color: white;
    font-weight: bold;
    margin-right: 20px;
`;

export const AccountCircleBtn = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50px;
    @media(max-width:767px){
        width: 40px;
        height: 40px;        
    }
`;


export const DropDownMenu = styled.div`
    padding 12px 24px;
    cursor: pointer;
    &:hover {
        background-color: #e3e3e3;
    }
`;



export const DropButton = styled.div`
  position: absolute;
  padding: 8px;
    top: 20px;
    left: 12px;
  border-radius: 4px;
  cursor: pointer;
  z-index: 10;

  &.display-none{
    display: none !important;
  }

  @media (min-width: 768px){
    display: none;
  }

  span{
    background-color: rgba(0,0,0,0.75);
    border-radius: .25rem;
    width: 22px; height: 2px;
    display: block;

    &.middle{
       margin-bottom: 6px; margin-top: 6px;
    }
  }
`;

