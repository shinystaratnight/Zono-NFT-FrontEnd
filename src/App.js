/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { useWeb3React } from '@web3-react/core'
import { Modal } from '@material-ui/core';
import Button from '@material-ui/core/button';
import { makeStyles } from '@material-ui/core/styles';

import { connectors, connectorLocalStorageKey } from './utils/connectors'
import { useEagerConnect } from "./hooks/useEagerConnect"
import { useInactiveListener } from "./hooks/useInactiveListener"
import { useAxios } from "./hooks/useAxios";
import { getErrorMessage } from "./utils/ethereum";

import { getUser, loginUser, useAuthDispatch, useAuthState } from "./context/authContext";

import Layout from "./components/Layout";
import Create from "./pages/Create";
import Mint from "./pages/Mint";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {   

  const [connectModalOpen, setConnectModalOpen] = useState(null);
  const [errorModalOpen, setErrorModalOpen] = useState(null);
  const [networkError, setNetworkError] = useState(null);

  function getModalStyle() {
    const top = 50
    const left = 50  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 300,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(3, 4, 3),
    },
  }));

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  useAxios();

  const {account, library, activate, active, connector} = useWeb3React();
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
  if((triedEagerError || activateError) && errorModalOpen === null) {
      const errorMsg = getErrorMessage(triedEagerError || activateError);
      setNetworkError(errorMsg);
      setErrorModalOpen(true);
  }

  const dispatch = useAuthDispatch();
  const { user, token } = useAuthState();

  const login = async () => {
    if(!account || !library) {
      console.log('not connected to wallet')
      return;
    }
    if(!user) {
      console.log('fetching user')
      await getUser(dispatch, account);
    }
    if(!user?.nonce || token) {
      console.log('nonce is invalid or already logged in')
      return;
    }
    console.log("login 2")
    loginUser(dispatch, account, user?.nonce, library.getSigner())
  }

  useEffect(() => {      
    if (active && account){
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
          <Route path="/" exact render={(props) => (<Layout {...props} connectAccount={connectAccount}><Home {...props} user={user}/></Layout>)}/>
          <Route path="/create" exact render={(props) => (<Layout {...props} connectAccount={connectAccount}><Create {...props} user={user}/></Layout>)}/>
          <Route path="/mint" exact render={(props) => (<Layout {...props} connectAccount={connectAccount}><Mint {...props} user={user}/></Layout>)}/>
          <Route path="/profile/:id" exact render={(props) => (<Layout {...props} connectAccount={connectAccount}><Profile {...props} getUser={getUser} user={user} login={login}/></Layout>)}/>
          <Route path="/edit_profile" exact render={(props) => (<Layout {...props} connectAccount={connectAccount}><EditProfile {...props} getUser={getUser} user={user} login={login}/></Layout>)}/>
          <Route path="/detail/:collection/:id" exact render={(props) => (<Layout {...props} connectAccount={connectAccount}><Detail {...props} user={user} /></Layout>)}/>
        </Switch>                    
      </Router>

      <Modal
        open={!!errorModalOpen && !active}
        onClose={(event, reason) => {
          if (reason === "backdropClick") {
            return false;
          }      
          if (reason === "escapeKeyDown") {
            return false;
          }      
          setErrorModalOpen(false)
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
        <div style={modalStyle} className={`${classes.paper} modal-div`}>
          <p>{networkError}</p>
          <Button className="" onClick={closeErrorModal} variant="contained" color="primary">Close</Button>            
        </div>

      </Modal>
      <Modal
        open={!!connectModalOpen}
        onClose={(event, reason) => {
          if (reason === "backdropClick") {
            return false;
          }      
          if (reason === "escapeKeyDown") {
            return false;
          }      
          setConnectModalOpen(false)
        }}        
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
        <div style={modalStyle} className={`${classes.paper} modal-div`}>
          <div className={`connectors-wrapper`} style = {{display : 'grid'}}>
          {
            connectors.map((entry, index) => (
              <Button
                key={index}
                variant="outlined"
                onClick={() => {
                  connectToProvider(entry.connectorId);
                  window.localStorage.setItem(connectorLocalStorageKey, entry.key);
                  setConnectModalOpen(false)                               
                }}
                className="connect-button textPrimary"
                color="primary"
                style={{color: 'red', marginBottom: '10px'}}
                endIcon={<entry.icon width="30"/>}
                id={`wallet-connect-${entry.title.toLocaleLowerCase()}`}
              >
              {entry.title}
              </Button>
            ))}
            </div>
            <div style={{textAlign: 'center'}}>
              <Button className="mt-3" onClick={() => {setConnectModalOpen(false)}} variant="contained" color="primary">Close</Button>
            </div>
          
        </div>
      </Modal>
    
    </React.Fragment>
  );
  
}

export default App;
