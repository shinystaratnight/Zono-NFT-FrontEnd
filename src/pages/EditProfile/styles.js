import styled from 'styled-components';
import { PhotoCamera } from "@styled-icons/material";

export const ProfileWrapper = styled.div`
	padding: 120px 0;
	@media screen and (max-width: 991px) {
		padding: 60px 0;
	}
`

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

export const EditImage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ProfileImage = styled.img`
	width: 140px;
	height: 140px;
	border-radius: 70px;
`;

export const ProfileContainer = styled.div`
	position: relative;
`;

export const Link = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CameraIcon = styled(PhotoCamera)`
	position: absolute;
	top: 50px;
	left: 50px;
`;

export const FileInput = styled.input`
	position: absolute;
	top: 20px;
	left: 20px;
	width: 100px;
	height: 100px;
	opacity: 0;
`;

export const Form = styled.div`
	margin-top: 20px;
`;

export const Field = styled.div`
	margin: 12px 20px; 
`;

export const label = styled.div`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 12px;
`;

export const Input = styled.input`
	width: 100%;
	border: 1px solid rgb(234, 236, 239);
	border-radius: 4px;
	font-size: 20px;
	padding: 8px;
	&:focus-visible{
			outline: unset;
	}
`;

export const Textarea = styled.textarea`
	width: 100%;
	border: 1px solid rgb(234, 236, 239);
	border-radius: 4px;
	font-size: 20px;
	padding: 8px;
	height: 240px;
	&:focus-visible{
			outline: unset;
	}
`;

export const Option = styled.div`
	margin-top: 4px;
	text-align: right;
`;

export const Actions = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 30px 0 0; 
`;

export const CancelBtn = styled.button`
	border: 2px solid #eee;
	color: #888;
	padding: 12px 30px;
	border-radius: 5px;
	background-color: transparent !important;
	cursor: pointer;
	font-size: 15px;
	transition: .9s;
	position: relative;
	letter-spacing: 1px;
	outline: 0 !important;
	overflow: hidden;
	line-height: 1.4;
  text-transform: uppercase;
`;

export const SubmitBtn = styled.button`	
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
