import React from 'react';
import ReactDOM from 'react-dom';
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

import App from './App';
import { AuthProvider } from './context/authContext';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

function getLibrary(provider) {
    const library = new Web3Provider(provider)
    library.pollingInterval = 12000
    return library
}
const app = (
    <Web3ReactProvider getLibrary={getLibrary}>
      <AuthProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </AuthProvider>
    </Web3ReactProvider>    
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();

