/* eslint-disable no-redeclare */
import { BigNumber, ethers } from "ethers";
import { getCollectionContract, 
    getContractInfo, 
    getContractObj, 
    getMintInfo, 
    getMintObj, 
    getCurrencyInfoFromSymbol,
    getTokenContract 
} from ".";

export function isAddress(address) {
    try {
        ethers.utils.getAddress(address);
    } catch (e) { return false; }
    return true;
}

export function toEth(amount) {
  return ethers.utils.formatEther(String(amount), {commify: true});
}

export function toWei(amount) {
  return ethers.utils.parseEther(String(amount));
}

/**
 * Governance Token Contract Management
 */
export async function getTokenBalance(account, tokenAddr, library) {
    if (tokenAddr === '0x0000000000000000000000000000000000000000') {
        // get BNB balance
        var balance = await library.getBalance(account);
        var etherVal = parseFloat(ethers.utils.formatEther(balance));  
        return etherVal;
    } else {
        // get token balance
        var Token = getTokenContract(tokenAddr, library.getSigner());
        if(Token) {
            var balance = await Token.balanceOf(account);
            var decimal = await Token.decimals();
            return parseFloat(ethers.utils.formatUnits(String(balance),decimal));
        }
    }    
    return 0;
}

export async function isTokenApproved(account, amount, tokenAddr, toAddress, provider) {
    const tokenContract = getTokenContract(tokenAddr, provider);    
    const allowance = await tokenContract.allowance(account, toAddress);
    if(BigNumber.from(toWei(amount)).gt(allowance)) {
        return false;
    }
    return true;
}

export async function approveToken(tokenAddr, toAddress, provider) {
    const tokenContract = getTokenContract(tokenAddr, provider); 
    const approveAmount = '0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF';
    try {
        const approve_tx = await tokenContract.approve(toAddress, approveAmount);
        await approve_tx.wait(1);
        return true;
    }catch(e) {
        console.log(e)
        return false;
    }
}



/**
 * NFT Contract Management
 */
export async function isNFTApprovedForMarket(collection, account, chainId, provider) {
    const marketContract = getContractObj('Market', chainId, provider);
    const nftToken = getCollectionContract(collection, chainId, provider);

    return await nftToken.isApprovedForAll(account, marketContract.address);
}
export async function isNFTApprovedForAuction(collection, account, chainId, provider) {
    const auctionContract = getContractObj('Auction', chainId, provider);
    const nftToken = getCollectionContract(collection, chainId, provider);

    return await nftToken.isApprovedForAll(account, auctionContract.address);
}

export async function setNFTApprovalForMarket(collection, approved, chainId, provider) {
    const marketContract = getContractObj('Market', chainId, provider);
    const nftToken = getCollectionContract(collection, chainId, provider);
    try {
        const tx = await nftToken.setApprovalForAll(marketContract.address, approved);
        await tx.wait(1);
        return true;
    }catch(e) {
        console.log(e)
    }
    return false;
}
export async function setNFTApprovalForAuction(collection, approved, chainId, provider) {
    const auctionContract = getContractObj('Auction', chainId, provider);
    const nftToken = getCollectionContract(collection, chainId, provider);
    try {
        const tx = await nftToken.setApprovalForAll(auctionContract.address, approved);
        await tx.wait(1);
        return true;
    }catch(e) {
        console.log(e)
    }
    return false;
}

/**
 * Create Item
 */
export async function createItem(collection, uri, chainId, provider) {
    const collectionContract = getCollectionContract(collection, chainId, provider);
    try {
        const tx = await collectionContract.mintTo(uri)
        const receipt = await tx.wait(2);
        if(receipt.confirmations) {
            return true
        }
        return false;
    }catch(e) {
        console.log(e)
        return false;
    }        
}



/**
 * Fixed Price Sale Management
 */
export async function listItem(collection, owner, token_id, tokenAddr, price, chainId, provider) {
    const marketContract = getContractObj('Market', chainId, provider);
    const marketContractInfo = getContractInfo('Market', chainId);    
    if (!marketContract || !marketContractInfo) return false
    try {
        let isApproved = await isNFTApprovedForMarket(collection, owner, chainId, provider);
        if(!isApproved) {
            isApproved = await setNFTApprovalForMarket(collection, true, chainId, provider);            
        }
        if (isApproved) {
            const tx =  await marketContract.list(collection, token_id, tokenAddr, ethers.utils.parseEther(price));
            const receipt = await tx.wait(2);
            if(receipt.confirmations) {
                return true
            }
        }               
        return false;
    }catch(e) {
        console.log(e);
        return false;
    }
}

export async function delistItem(id, chainId, provider) {
    const marketContract = getContractObj('Market', chainId, provider);
    if (!marketContract) return false
    try {
      const tx = await marketContract.delist(id)
      await tx.wait(2)
      return true
    } catch (e) {
      console.log(e)
      return false
    }
}
  
export async function buy(account, id, tokenAddr, price, chainId, provider) {
    const marketContract = getContractObj('Market', chainId, provider);
    const marketContractInfo = getContractInfo('Market', chainId);
    if (!marketContract || !marketContractInfo) return false    
    try {
        if (tokenAddr === '0x0000000000000000000000000000000000000000') {
            const tx = await marketContract.buy(id, {
                value: toWei(price)
            })
            await tx.wait(2)
            return true
        } else {
            let approved = await isTokenApproved(account, price, tokenAddr, marketContractInfo.address, provider)
            if (!approved) {
                approved = await approveToken(tokenAddr, marketContractInfo.address, provider)
            }
            if (approved) {
                const tx = await marketContract.buy(id)
                await tx.wait(2)
                return true
            }
            return false  
        }               
    } catch (e) {
      console.log(e)
      return false
    }
}




/**
 * Auction Contract Management
 */
export async function createAuction(collection, owner, token_id, tokenAddr, startPrice, startTime, endTime, chainId, provider) {
    const auctionContract = getContractObj('Auction', chainId, provider);
    const auctionContractInfo = getContractInfo('Auction', chainId);        
    if (!auctionContract || !auctionContractInfo) return false
    try {
        let isApproved = await isNFTApprovedForAuction(collection, owner, chainId, provider);
        if(!isApproved) {
            isApproved = await setNFTApprovalForAuction(collection, true, chainId, provider);            
        }
        if (isApproved) {
            const tx =  await auctionContract.createAuction(collection, token_id, tokenAddr, ethers.utils.parseEther(startPrice),startTime,endTime);
            const receipt = await tx.wait(2);
            if(receipt.confirmations) {
                return true
            }
        }               
        return false;
    }catch(e) {
        console.log(e);
        return false;
    }
}

export async function finalizeAuction(id, chainId, provider) {
    const auctionContract = getContractObj('Auction', chainId, provider)
    if (!auctionContract) return false
    try {
      const tx = await auctionContract.finalizeAuction(id)
      await tx.wait(2)
      return true
    } catch (e) {
      console.log(e)
      return false
    }
}
  
export async function bidOnAuction(account, id, tokenAddr, price, chainId, provider) {
    const auctionContract = getContractObj('Auction', chainId, provider);
    const auctionContractInfo = getContractInfo('Auction', chainId);
    if (!auctionContract) return false  
    try {
        if (tokenAddr === '0x0000000000000000000000000000000000000000') {
            const tx = await auctionContract.bidOnAuction(id, ethers.utils.parseEther(price), {
                value: ethers.utils.parseEther(price)
            })
            await tx.wait(2)
            return true
        } else {
            let approved = await isTokenApproved(account, price, tokenAddr, auctionContractInfo.address, provider)
            if (!approved) {
                approved = await approveToken(tokenAddr, auctionContractInfo.address, provider)
            }
            if (approved) {
                const tx = await auctionContract.bidOnAuction(id, ethers.utils.parseEther(price))
                await tx.wait(2)
                return true
            }
            return false 
        }                  
    } catch (e) {
      console.log(e)
      return false
    }
}





/**
 * NFT MintWithToken1 Management
 */
export async function getMintWithToken1Price(provider) {
    const mintContract = getMintObj('MintWithToken1', provider);
    if(mintContract) {
        const cost = await mintContract.COST();        
        return parseFloat(toEth(cost));
    }
    return 0;
}
export async function getMintWithToken1Supply(provider) {
    const mintContract = getMintObj('MintWithToken1', provider);
    if(mintContract) {
        const totalSupply = await mintContract.totalSupply();
        return Number(totalSupply);
    }
    return 0;
}
export async function mintWithToken1(account, price, amount, provider) {
    const mintContract = getMintObj('MintWithToken1', provider);
    const mintContractInfo = getMintInfo('MintWithToken1'); 
    const currencyInfo = getCurrencyInfoFromSymbol('zono');    
    if (!mintContract || !mintContractInfo || !currencyInfo) return false
    try {
        let approved = await isTokenApproved(account, price * amount, currencyInfo.address, mintContractInfo.address, provider)
        if (!approved) {
            approved = await approveToken(currencyInfo.address, mintContractInfo.address, provider)
        }
        if (approved) {
            const tx = await mintContract.mint(amount)
            const receipt = await tx.wait(2);
            if(receipt.confirmations) {
                return true
            }
        }        
        return false;
    }catch(e) {
        console.log(e)
        return false;
    }        
}




/**
 * NFT MintWithCoin1 Management
 */
export async function getMintWithCoin1Price(provider) {
    const mintContract = getMintObj('MintWithCoin1', provider);
    if(mintContract) {
        const cost = await mintContract._nftPrice();        
        return parseFloat(toEth(cost));
    }
    return 0;
}
export async function getMintWithCoin1Supply(provider) {
    const mintContract = getMintObj('MintWithCoin1', provider);
    if(mintContract) {
        const totalSupply = await mintContract.totalSupply();
        return Number(totalSupply);
    }
    return 0;
}
export async function mintWithCoin1(account, price, amount, provider) {
    const mintContract = getMintObj('MintWithCoin1', provider);        
    if (!mintContract) return false
    try {
        const tx = await mintContract.mint(amount, {
            value: toWei(price)
        })
        await tx.wait(2)
        return true
    }catch(e) {
        console.log(e)
        return false;
    }        
}