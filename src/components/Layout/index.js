import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import * as S from "./styles";

import Banner from "./Banner";
import Footer from 'components/Footer'

import Navbar from 'components/Navbar'

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
          <Navbar
            {...this.props}
            isLogin={this.state.isLogin}
            onLogin={() => this.setState({ isLogin: true })}
            onLogout={() => this.setState({ isLogin: false })}
          />
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
