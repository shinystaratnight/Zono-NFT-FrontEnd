import styled from 'styled-components';
import { PlusCircle } from "@styled-icons/feather";

export const ContentsWrapper = styled.div`
	padding: 120px 0;
	@media screen and (max-width: 991px) {
		padding: 60px 0;
	}
`

export const Container = styled.div`
	margin 48px auto;
	max-width: 1200px;
`;

export const Title = styled.div`
	text-align: center;
	font-size: 42px;
	font-weight: 700;
	color: #222;
	letter-spacing: .5px;
	margin-bottom: 20px;
	@media screen and (max-width: 575px) {
		font-size: 30px;
	}
`;
export const FormCard = styled.div`
	background-color: #fff;
	padding: 30px;
	border: 1px solid #eaeff5;
	box-shadow: 0 4px 10px 0 rgb(41 128 185 / 7%);
	border-radius: 6px;
	margin-top: 12px;
	@media screen and (max-width: 575px) {
		padding-left: 20px;
		padding-right: 20px;
	}
`
export const UploadField = styled.div`
    margin: 40px 0px;
`;

export const SelectCollection = styled.div`
    margin: 40px 20px;
`;

export const Collections = styled.div`
    display: flex;
`;


export const collection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 180px;
    border: solid 3px #cacaca;
    border-radius: 12px;
    margin: 8px;
    &.active {
        border: solid 3px #e24717;
    }
`;

export const CollectionPlusIcon = styled(PlusCircle)`

`;


export const CollectionIcon = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 24px;
`;


export const CollectionName = styled.div`
    color: #1E2026;
    font-weight: bold;
    font-size: 16px;    
    margin-top: 12px;
`;

export const CollectionType = styled.div`
    color: grey;
    font-size: 14px;
`;


export const UploadContainer = styled.div`
	background-color: rgb(57 72 104 / 2%);
	padding: 30px 30px;
	border-radius: 6px 6px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;  
	height: 200px;
`;

export const PreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: dotted 1px grey;
    border-radius: 12px;
    height: 200px;
`;
export const MediaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    height: 160px;
`;
export const CloseIconContainer = styled.div`
    width: 100%;
    margin-left: -5px;
    margin-top: 5px;
    text-align: right;
`;

export const ImagePreview = styled.img`
  border-radius: 6px;
  max-width: 80%;
  max-height: 100%;
`;

export const VideoPreview = styled.video`
  border-radius: 6px;
  max-width: 80%;
  max-height: 100%;
`;

export const AudioPreview = styled.audio`
  border-radius: 6px;
  max-width: 80%;
  max-height: 100%;
`;



export const ChooseFileBtn = styled.div`
  display: inline-block;
	position: relative;
	padding: 10px 20px;
	background: var(--colorOrange);
	border-radius: 20px;
	margin-top: 10px;
	margin-bottom: 10px;
	color: #fff;
	font-size: 14px;
	font-weight: bold;
	cursor: pointer;
`;

export const UploadCaption = styled.div`
	font-size: 15px;
	color: #777;
	line-height: 1.6;
	text-align: center;
`;

export const FileInput = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
`;

export const Form = styled.div`
    margin-top: 20px;
`;

export const Field = styled.div`
    margin: 40px 20px; 
`;

export const label = styled.div`
	display: block;
	font-size: 15px;
	color: #818992;
	margin-bottom: 8px;
	text-transform: capitalize; 
`;

export const Input = styled.input`
    width: 100%;
    border: unset;
    border-bottom: 1px solid rgb(234, 236, 239);
    font-size: 16px;
    padding: 8px;
    &:focus-visible{
        outline: unset;
    }
    &::-webkit-inner-spin-button, &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export const Option = styled.div`
    margin-top: 4px;
    font-size : 14px;
`;

export const Actions = styled.div`
	display: flex;
	justify-content: center;
	margin: 30px 0 0; 
`;

export const CreateBtn = styled.div`
	cursor: pointer;
	background-color: var(--colorOrange);
	margin-left: 12px;
	padding: 12px 30px;
	line-height: 1.4;
	font-size: 15px;
	border: none;
	border-radius: 5px;
	text-transform: uppercase;
	transition: .9s;
	color: #fff;
	letter-spacing: 1px;
	outline: 0 !important;
	overflow: hidden;
`;

export const SelectCategory = styled.select`
	width: 100%;
	border: unset;
	border-bottom: 1px solid rgb(234, 236, 239);
	font-size: 14px;
	padding: 8px;
	&:focus-visible{
			outline: unset;
	}
`;


export const SelectCategoryOption = styled.option`

`;

export const ModalBody = styled.div`
  padding: 8px 12px;
`;

export const ModalTitle = styled.div`
  margin-bottom: 24px;
  font-weight: bold;
  font-size: 24px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;  
`;

export const ContentDetail = styled.div`
  margin: 20px 0 0 0;

   @media (min-width: 768px) {
    margin: 0 0 0 20px;
   }
`;

export const ModalAction = styled.div`
  width: 100%;
  text-align: center;
`;

export const ModalButton = styled.div`
     padding: 12px 40px;
    background: #e24717;
    font-size: 20px;
    color: white;
    border-radius: 24px;
    cursor: pointer;
`;
