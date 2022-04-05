import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as header from "./style";
import * as footer from "./style";
import HeaderLogo from '../../../assets/images/header-logo-img.png';

// community images
import CommunityImg1 from '../../../assets/images/community-icon-1.png';
import CommunityImg2 from '../../../assets/images/community-icon-2.png';
import CommunityImg3 from '../../../assets/images/community-icon-3.png';
import CommunityImg4 from '../../../assets/images/community-icon-4.png';
import CommunityImg5 from '../../../assets/images/community-icon-5.png';

import CopyRightIcon from '../../../assets/images/copyright.png';

export class Footer extends Component {
    render() {
        return (
            <footer.FiteFooter>
                <header.Container>

                    <div className="top-Box">
                        <div className="subscrib-Box">
                            <div className="inner-box">
                                <h6 style={{marginBottom:'10px'}}>Stay Updated</h6>
                                <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks </p>

                                <form>
                                    <div className="form-field">
                                        <div className="inputGroup">
                                            <input type="text" className="form-control" placeholder="Your Email" />
                                            <input type="submit" value="" className="form-button" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="community-Box">
                            <h5>Community</h5>
                            <ul>
                                <li><a href={"https://twitter.com/ZonoSwap"} rel="noopener noreferrer" target="_blank"><img src={CommunityImg1} alt="CommunityImg1" /></a></li>
                                <li><a href={"https://t.me/zonoswap"} rel="noopener noreferrer" target="_blank"><img src={CommunityImg2} alt="CommunityImg2" /></a></li>
                                <li><a href={"https://www.facebook.com/Zonoswap"} rel="noopener noreferrer" target="_blank"><img src={CommunityImg4} alt="CommunityImg4" /></a></li>
                                <li><a href={"https://www.instagram.com/zonoswap/"} rel="noopener noreferrer" target="_blank"><img src={CommunityImg5} alt="CommunityImg5" /></a></li>
                            </ul>
                        </div>
                    </div>                    
                    <div className="copyRight-box">
                        <p>Zono NFT <img src={CopyRightIcon} alt="CopyRightIcon" /> 2022</p>
                    </div>
                </header.Container>
            </footer.FiteFooter>
        );
    }
}


