import React, { useState, useEffect } from "react";
import * as S from "./styles";

function Banner(props) {
  return (
    <React.Fragment>
      <S.SiteBanner>
        <img src="/images/banner.jpg" alt="Zono NFT Banner" className="banner" />
        <img src="/images/banner-lg.jpg" alt="Zono NFT Banner" className="banner-lg" />
      </S.SiteBanner>
    </React.Fragment>
  );

}

export default Banner;
