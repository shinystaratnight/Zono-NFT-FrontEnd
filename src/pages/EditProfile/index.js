/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState,useEffect} from "react";
import { useWeb3React } from '@web3-react/core'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar';

import * as Element from "./styles";
import { getIpfsHashFromFile } from "../../utils/ipfs";


function EditProfile(props) {
    const { user, login } = props;    
    const [userProfile, setUserProfile] = useState(undefined)
    const { account, library } = useWeb3React();
    const [updating, setUpdating] = useState(false)
    const [snackBarMessage, setSnackBarMessage] = useState("")
    const [openSnackbar, setOpenSnackbar] = useState(false)
    const [file, setFile] = useState(null)
    const [newName, setNewName] = useState("")
    const [newBio, setNewBio] = useState("")
    const [newSocialLink, setNewSocialLink] = useState("")
    const [newProfilePicSrc, setNewProfilePicSrc] = useState("")
    const [imgUploading, setImgUploading] = useState(false)

    useEffect(() => {
        if(!!user) {
          login();
        }
    }, [user, account, library])

    function updateProfile(){        
        setUpdating(true)
        const data = new FormData()
        data.append("address", account)
        data.append("name", newName || "NoName")
        data.append("bio", newBio || "")
        data.append("socialLink", newSocialLink || "")
        data.append("profilePic", newProfilePicSrc || "")

        axios.post("/api/user/update", data)
        .then(res => {            
            setUpdating(false)
            setSnackBarMessage("Success")
            setOpenSnackbar(true)  
            props.history.push(`/profile/${account}`)                  
        })
        .catch(err => {
            setUpdating(false)
            setSnackBarMessage(err.response.data.message)
            setOpenSnackbar(true)     
        })
    }

    useEffect(() => {        
        if (account && !userProfile){
          getUser()
        }        
    }, [user])

    function getUser(){
        axios.get(`/api/user/${account}`)
        .then(res => {            
          setUserProfile(res.data.user) 
          setNewProfilePicSrc(res.data.user.profilePic)
          setNewName(res.data.user.name)
          setNewBio(res.data.user.bio)
          setNewSocialLink(res.data.user.socialLink)             
        })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpenSnackbar(false);
    };

    function handleFile(event) {        
        const fileType = event.target.files[0].type.split("/")[0]
        if (fileType === "image") {
            setFile(event.target.files[0]);
            setImgUploading(true);
            getIpfsHashFromFile(event.target.files[0]).then((hash) => {
                setNewProfilePicSrc(`https://zono.mypinata.cloud/ipfs/${hash}`)
                setImgUploading(false)
            })
        }        
    }

    return (        
        <Element.Container>
            {
              account?
                  <>
                    <Element.Title>Edit Profile</Element.Title>
                    <Element.EditImage>
                        <Element.ProfileContainer>
                            <Element.ProfileImage src={newProfilePicSrc ? newProfilePicSrc : "/images/profile.png"} />
                            <Element.CameraIcon size={40} color={'white'}/>
                            <Element.FileInput type="file" accept="image/*" multiple={false} onChange={handleFile}/>                           
                        </Element.ProfileContainer>                        
                    </Element.EditImage>
                    
                    <Element.Link href={newProfilePicSrc && !imgUploading ? newProfilePicSrc : null} target='_blank' rel="noreferrer noopener">
                        {file && !imgUploading ? "Uploaded!" : imgUploading ? "uploading to IPFS..." : ""} 
                    </Element.Link>
                    <Element.Form>
                        <Element.Field>
                            <Element.label>Name</Element.label>
                            <Element.Input onChange={e => setNewName(e.target.value)} value={newName}/>
                            <Element.Option>0/20</Element.Option>
                        </Element.Field>
                        <Element.Field>
                            <Element.label>Bio</Element.label>
                            <Element.Textarea onChange={e => setNewBio(e.target.value)} value={newBio}/>
                            <Element.Option>0/100</Element.Option>
                        </Element.Field>
                        <Element.Field>
                            <Element.label>Social Link</Element.label>
                            <Element.Input onChange={e => setNewSocialLink(e.target.value)} value={newSocialLink}/>
                        </Element.Field>
                        <Element.Actions>
                            <Element.CancelBtn onClick={() => props.history.push(`/profile/${account}`) }>Cancel</Element.CancelBtn>
                            <Element.SubmitBtn onClick={() => updateProfile()}>
                            <div style={{display: updating ? "none" : "", color: "white"}}>Update</div>
                            <div style={{display: !updating ? "none" : ""}}>
                                <CircularProgress style={{width: "16px", height: "16px", color: "white"}}/>
                            </div>
                            </Element.SubmitBtn>
                        </Element.Actions>
                    </Element.Form>
                  </>
                  :<></>
            }  
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleClose}
                message={snackBarMessage}
                action={
                    <React.Fragment>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                    </React.Fragment>
                }
                />          
        </Element.Container>
    );
    
}

export default EditProfile;
