/* eslint-disable no-unused-vars */
import React from "react";

import { GridContainer, GridRow, GridItem } from 'components/Grid'
import { MintWithCoin1, MintWithToken1 } from 'components/Mint'
import * as Element from "./styles";

function Mint(props) {
	return (
		<Element.Wrapper>
			<GridContainer>				
				<GridRow justifyContent='center'>
					<GridItem xl={12} lg={12} md={12} sm={12}>
						<Element.Title>Mint NFTs</Element.Title>
					</GridItem>
					<Element.MintContainer>	
						<MintWithToken1/>					
						<MintWithCoin1/>												
					</Element.MintContainer>					
				</GridRow>				
			</GridContainer>
		</Element.Wrapper>
	);

}

export default Mint;
