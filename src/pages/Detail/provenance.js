import React from 'react';
import * as S from './styles';
import { format } from "date-fns";
import { formatNum, getCurrencyInfo } from "../../utils";

function Provenance(props) {
	
	const { event } = props;
	
	const eventTime = format(event.timestamp * 1000, "yyyy-MM-dd HH:mm:ss");
	
	function showTransaction() {
		window.open(`${process.env.REACT_APP_BLOCK_EXPLORER}/tx/${event.txhash}`);
	}

	return (
		<S.ProvenanceContainer onClick={() => showTransaction()}>			
			<S.ProvenanceContent>
				<S.ProvenanceName >
					<span>{event.name} {event.name === 'Sold' ? ' to' : ' by'} </span>
					@{((event.name === 'Listed') || (event.name === 'Bid')) ? event.fromUser.name : event.toUser.name}
					<span style={{ display: event.price > 0 ? '' : 'none' }}> (Price : {formatNum(event.price)} {getCurrencyInfo(event.tokenAdr)?.symbol})</span>
				</S.ProvenanceName>
				<S.ProvenanceTime>{eventTime}</S.ProvenanceTime>
			</S.ProvenanceContent>
		</S.ProvenanceContainer>
	);

};

export default Provenance;
