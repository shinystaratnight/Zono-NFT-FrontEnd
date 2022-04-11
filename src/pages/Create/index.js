/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import { useWeb3React } from '@web3-react/core'
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';

import { GridContainer, GridRow, GridItem } from 'components/Grid'
import TextField from 'components/TextField'
import * as Element from "./styles";

import { getIpfsHash, getIpfsHashFromFile } from "utils/ipfs";
import { createItem } from "utils/contracts";
import { CONTRACTS_BY_NETWORK } from "utils";

function Create(props) {

	const { account, chainId, library } = useWeb3React();

	const [snackBarMessage, setSnackBarMessage] = useState("")
	const [openSnackbar, setOpenSnackbar] = useState(false)

	const [mainFile, setMainFile] = useState(null)
	const [mainFileHash, setMainFileHash] = useState("");
	const [mainFileUploading, setMainFileUploading] = useState(false);

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [creatingItem, setCreatingItem] = useState(false);

	function onCreateItem() {
		if (!name) {
			setSnackBarMessage("Please Input Title!")
			setOpenSnackbar(true)
			return
		}
		if (!description) {
			setSnackBarMessage("Please Input Description!")
			setOpenSnackbar(true)
			return
		}

		if (!mainFileHash) {
			setSnackBarMessage("Please Upload file!")
			setOpenSnackbar(true)
			return
		}
		// call createItem contract function
		let collectionAddr = CONTRACTS_BY_NETWORK?.[process.env.REACT_APP_NETWORK_ID]?.NFTCollection.address;

		const openseadata = {
			name: name,
			description: description,
			image: mainFileHash,
			attributes: []
		};
		setCreatingItem(true);
		getIpfsHash(openseadata).then((hash) => {
			let tokenUri = `https://zono.mypinata.cloud/ipfs/${hash}`;
		
			createItem(
				collectionAddr,
				tokenUri,
				chainId,
				library.getSigner()
			).then((result) => {
				if (result) {console.log(result)
					setSnackBarMessage("Item Created Success! Data will be updated after some blocks are confirmed.");
					setOpenSnackbar(true);
					props.history.push(`/profile/${account}`)
					setCreatingItem(false);
					return true;
				} else {console.log("error ***")
					setSnackBarMessage("Failed Transaction");
					setCreatingItem(false);
					setOpenSnackbar(true);
				}
			});
		});
	}

	function handleMainFile(event) {
		console.log("handleMainFile")
		const fileType = event.target.files[0].type.split("/")[0]
		if (fileType === "image") {
			setMainFile(event.target.files[0])
			setMainFileUploading(true)
			getIpfsHashFromFile(event.target.files[0]).then((hash) => {
				setMainFileHash(`https://zono.mypinata.cloud/ipfs/${hash}`)
				setMainFileUploading(false)
			})
		}
	}

	const handleCloseDialog = (event, reason) => {
		if (reason === 'clickaway') return;
		setOpenSnackbar(false);
	};

	function closeMainFile() {
		setMainFile(null)
		setMainFileHash("")
		setMainFileUploading(false)
	}

	return (
		<Element.ContentsWrapper>
			<GridContainer>
				{
					account &&
					<GridRow>
						<GridItem xl={12} lg={12} md={12} sm={12}>
							<Element.Title>Create NFT</Element.Title>
						</GridItem>
						<GridItem xl={2} lg={2} md={2} sm={12}></GridItem>
						<GridItem xl={8} lg={8} md={8} sm={12}>
							<Element.FormCard>
								<Element.UploadField>
									<Element.label>Upload file</Element.label>
									<Element.UploadContainer style={{ display: mainFile ? "none" : "" }}>
										<img src='/images/addfiles.svg' alt='Add File' />
										<Element.ChooseFileBtn>
											Choose File
											<Element.FileInput type="file" value="" accept="image/*" onChange={handleMainFile} />
										</Element.ChooseFileBtn>
										<Element.UploadCaption>PNG, GIF or WEBP. Max 100mb</Element.UploadCaption>
									</Element.UploadContainer>
									<Element.PreviewContainer style={{ display: mainFile ? "" : "none" }}>
										<Element.CloseIconContainer style={{ display: mainFileHash ? "" : "none" }}>
											<CloseIcon onClick={() => closeMainFile()} fontSize="small" />
										</Element.CloseIconContainer>
										<Element.MediaContainer>
											<CircularProgress style={{ display: mainFileUploading ? "" : "none", width: "30px", height: "30px", color: "red" }} />
											<Element.ImagePreview style={{ display: mainFileHash ? "" : "none" }} src={mainFileHash} />
										</Element.MediaContainer>
									</Element.PreviewContainer>
								</Element.UploadField>
								<Element.Form>
									<TextField
										onChange={e => setName(e.target.value)}
										value={name}
										name='title'
										label='Title'
										type='text'
										placeholder="e.g. 'Redeemable T-Shirt with logo'"
									/>
									<TextField
										onChange={e => setDescription(e.target.value)}
										value={description}
										label='Description (Optional)'
										name='description'
										type='text'
										placeholder="e.g. 'After purchasing you`ll be able to get the real T-shirt"
									/>
									<Element.Actions>
										<Element.CreateBtn onClick={() => onCreateItem()} >
											{
												creatingItem ? <CircularProgress style={{ width: "16px", height: "16px", color: "white", }} /> : "Create item"
											}
										</Element.CreateBtn>
									</Element.Actions>
								</Element.Form>
							</Element.FormCard>
						</GridItem>
					</GridRow>
				}

				<Snackbar
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center'
					}}
					open={openSnackbar}
					autoHideDuration={3000}
					onClose={handleCloseDialog}
					message={snackBarMessage}
					action={
						<React.Fragment>
							<IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseDialog}>
								<CloseIcon fontSize="small" />
							</IconButton>
						</React.Fragment>
					}
				/>
			</GridContainer>
		</Element.ContentsWrapper>
	);

}

export default Create;
