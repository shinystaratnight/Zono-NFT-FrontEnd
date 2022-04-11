import React from "react";
import * as S from "./styles";

function Banner() {
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
