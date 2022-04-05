import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import TopBar from "./TopBar";
import * as S from "./styles";
import { Footer } from './footer/footer';
import Banner from "./Banner";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    };
  }

  render() {
    return (
      <React.Fragment>
        <div id="layout-wrapper">
          <TopBar {...this.props} isLogin={this.state.isLogin}
            onLogin={() => this.setState({ isLogin: true })}
            onLogout={() => this.setState({ isLogin: false })} />
          <Banner />
          <S.Main>
            {this.props.children}
          </S.Main>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
