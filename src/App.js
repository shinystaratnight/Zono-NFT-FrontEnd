/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { useWeb3React } from '@web3-react/core'

import { connectors, connectorLocalStorageKey } from 'utils/connectors'
import { useEagerConnect } from "hooks/useEagerConnect"
import { useInactiveListener } from "hooks/useInactiveListener"
import { useAxios } from "hooks/useAxios";
import { getErrorMessage } from "utils/ethereum";

import { getUser, loginUser, useAuthDispatch, useAuthState } from "context/authContext";

import Layout from "components/Layout";
import Create from "pages/Create";
import Mint from "pages/Mint";
import Profile from "pages/Profile";
import EditProfile from "pages/EditProfile";
import Detail from "pages/Detail";
import Explore from 'pages/Explore'
import ConnectDialog from 'components/ConnectDialog'
import Landing from 'pages/Landing'
import NetworkErrorDialog from 'components/NetworkErrorDialog'

function App() {

  const [connectModalOpen, setConnectModalOpen] = useState(null);
  const [errorModalOpen, setErrorModalOpen] = useState(null);
  const [networkError, setNetworkError] = useState(null); 

  useAxios();

  const { account, library, activate, active, connector } = useWeb3React();
  const connectAccount = () => {
    setConnectModalOpen(true)
  }
  const connectToProvider = (connector) => {
    activate(connector)
  }

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState()
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])

  // mount only once or face issues :P
  const [triedEager, triedEagerError] = useEagerConnect()
  const { activateError } = useInactiveListener(!triedEager || !!activatingConnector)

  // handling connection error
  if ((triedEagerError || activateError) && errorModalOpen === null) {
    const errorMsg = getErrorMessage(triedEagerError || activateError);
    setNetworkError(errorMsg);
    setErrorModalOpen(true);
  }

  const dispatch = useAuthDispatch();
  const { user, token } = useAuthState();

  const login = async () => {
    if (!account || !library) {
      console.log('not connected to wallet')
      return;
    }
    if (!user) {
      console.log('fetching user')
      await getUser(dispatch, account);
    }
    if (!user?.nonce || token) {
      console.log('nonce is invalid or already logged in')
      return;
    }
    console.log("login 2")
    loginUser(dispatch, account, user?.nonce, library.getSigner())
  }

  useEffect(() => {
    if (active && account) {
      getUser(dispatch, account)
    }
  }, [active, account])

  const closeErrorModal = () => {
    window.localStorage.setItem(connectorLocalStorageKey, connectors[0].key);
    window.location.reload();
  }

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact render={(props) => (<Layout {...props} connectAccount={connectAccount}><Landing {...props} user={user} /></Layout>)} />
          <Route path="/create" exact render={(props) => (<Layout {...props} connectAccount={connectAccount}><Create {...props} user={user} /></Layout>)} />
          <Route path="/mint" exact render={(props) => (<Layout {...props} connectAccount={connectAccount}><Mint {...props} user={user} /></Layout>)} />
          <Route path="/profile/:id" exact render={(props) => (<Layout {...props} connectAccount={connectAccount}><Profile {...props} getUser={getUser} user={user} login={login} /></Layout>)} />
          <Route path="/edit_profile" exact render={(props) => (<Layout {...props} connectAccount={connectAccount}><EditProfile {...props} getUser={getUser} user={user} login={login} /></Layout>)} />
          <Route path="/detail/:collection/:id" exact render={(props) => (<Layout {...props} connectAccount={connectAccount}><Detail {...props} user={user} /></Layout>)} />
          <Route path="/explore" exact render={(props) => (<Layout {...props} connectAccount={connectAccount}><Explore {...props} user={user} /></Layout>)} />
        </Switch>
      </Router>     

      <NetworkErrorDialog
        open={!!errorModalOpen && !active}       
        onClose={() => {
          setErrorModalOpen(false)
        }}
        handleClose={closeErrorModal}
        message={networkError}
      />
      <ConnectDialog
        open={!!connectModalOpen}
        handleClose={() => {
          setConnectModalOpen(false)
        }}
        connectors={connectors}
        connectToProvider={connectToProvider}
        connectorLocalStorageKey={connectorLocalStorageKey}
      />
    </React.Fragment>
  );
}

export default App;
