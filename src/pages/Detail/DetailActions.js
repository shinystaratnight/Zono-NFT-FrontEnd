import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { TwitterShareButton, TelegramShareButton, EmailShareButton } from "react-share";

import { makeStyles } from '@material-ui/core/styles';

import Popover from '@material-ui/core/Popover';

import * as Element from "./styles";

const useStyles = makeStyles(() => ({
  paper: {
    '& .MuiPaper-root': {
      marginTop: '16px'
    }
  }
}))

const DetailActions = (props) => {

  const base_url = process.env.REACT_APP_BASE_URL;
  const location = useLocation();
  const classes = useStyles()

  const { didLike, clickFavorite, localLikeCount } = props 

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Element.HeaderRight>
      <Element.Favorite onClick={() => clickFavorite()}>
        {
          didLike ?
            <Element.LoveFillIcon size={20} />
            : <Element.LoveIcon size={20} />
        }
        <Element.FavouritesCount>{localLikeCount}</Element.FavouritesCount>
      </Element.Favorite>
      <Element.ShareIcon size={24} onClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        className={classes.paper}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Element.DropDownMenus>
          <TwitterShareButton url={base_url + location.pathname} style={{ width: "100%" }}>
            <Element.DropDownMenu onClick={() => setAnchorEl(null)}><Element.TwitterIcon size={14} />Twitter</Element.DropDownMenu>
          </TwitterShareButton>
          <TelegramShareButton url={base_url + location.pathname} style={{ width: "100%" }}>
            <Element.DropDownMenu onClick={() => setAnchorEl(null)}><Element.TelegramIcon size={14} />Telegram</Element.DropDownMenu>
          </TelegramShareButton>
          <EmailShareButton url={base_url + location.pathname} style={{ width: "100%" }}>
            <Element.DropDownMenu onClick={() => setAnchorEl(null)}><Element.EmailIcon size={14} />Email</Element.DropDownMenu>
          </EmailShareButton>
        </Element.DropDownMenus>
      </Popover>
    </Element.HeaderRight>
  )
}

export default DetailActions
