import { Contract } from '@ethersproject/contracts'
import TokenABI from '../contracts/Token.json'
import NFTCollectionABI from '../contracts/NFTCollection.json'
import MarketABI from '../contracts/Market.json'
import AuctionABI from '../contracts/Auction.json'

import MintWithToken1ABI from '../contracts/MintWithToken1.json'
import MintWithCoin1ABI from '../contracts/MintWithCoin1.json'



export const currentNetwork = process.env.REACT_APP_NETWORK_ID;

export const CONTRACTS_BY_NETWORK = {
  [currentNetwork]: {
    NFTCollection: {
      address: "0x6bd889e5b63eb4be3eda1dc114afa05d94f6e5ed",
      abi: NFTCollectionABI,
    },
    Market: {
      address: "0x5d680340a560d5ed5eee97eb83dbc666f29154ee",
      abi: MarketABI
    },
    Auction: {
      address: "0x72aeaa23bd8ef470041ef15fa215445e4dd11e57",
      abi: AuctionABI
    }
  },  
}

export const MINT_CONTRACTS = {  
  MintWithToken1: {
    address: "0x6009E1302DBB61f4Cf82f6F03ab2cb986fb31c88",
    abi: MintWithToken1ABI,
    currency: 'zono'
  },
  MintWithCoin1: {
    address: "0x0ba2ddAEeA044CB67b38354aAB33F9904BD9FAb0",
    abi: MintWithCoin1ABI,
    currency: 'BNB'
  } 
}

export const currencies = [
  {symbol: 'BNB', address: '0x0000000000000000000000000000000000000000'},
  {symbol: 'zono', address: '0xAc97796B45F9627e16da9C93e608579ceEb410a4'}
];
export function getCurrencyInfo(_address){
  for (let index = 0; index < currencies.length; index++) {
    const currencyInfo = currencies[index];
    if (currencyInfo.address.toLowerCase() === _address.toLowerCase()) {
      return currencyInfo;
    }
  }
  return null;
}
export function getCurrencyInfoFromSymbol(symbol){
  for (let index = 0; index < currencies.length; index++) {
    const currencyInfo = currencies[index];
    if (currencyInfo.symbol.toLowerCase() === symbol.toLowerCase()) {
      return currencyInfo;
    }
  }
  return null;
}
export function getTokenContract(address, provider) {  
  return new Contract(address, TokenABI, provider);
}


export function getContractInfo(name, chainId = null) {
  if(!chainId) chainId = currentNetwork;

  const contracts = CONTRACTS_BY_NETWORK?.[chainId];  
  if(contracts) {
    return contracts?.[name];
  }else{
    return null;
  }
}
export function getContractObj(name, chainId, provider) {
  const info = getContractInfo(name, chainId);
  return !!info && new Contract(info.address, info.abi, provider);
}


export function getCollectionContract(address, chainId, provider) {
  const info = getContractInfo('NFTCollection', chainId);
  return !!info && new Contract(address, info.abi, provider);
}


export function getMintInfo(name) {
  const info = MINT_CONTRACTS[name];
  return info;
}
export function getMintObj(name, provider) {
  const info = MINT_CONTRACTS[name];
  return !!info && new Contract(info.address, info.abi, provider);
}

export const shorter = (str) =>
  str?.length > 8 ? str.slice(0, 6) + '...' + str.slice(-4) : str

export function formatNum(value) {
  let intValue = Math.floor(value)
  if (intValue < 10) {
    return ''+ parseFloat(value).toFixed(2)
  } else if (intValue < 1000){
    return '' + intValue
  } else if (intValue < 1000000) {
    return parseFloat(intValue/1000).toFixed(1) + 'K'
  } else if (intValue < 1000000000) {
    return parseFloat(intValue/1000000).toFixed(1) + 'M'
  } else {
    return parseFloat(intValue/1000000000).toFixed(1) + 'B'
  }
}
