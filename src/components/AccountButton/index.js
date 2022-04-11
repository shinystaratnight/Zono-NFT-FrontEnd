import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import Popover from '@material-ui/core/Popover';

import { AccountCircleBtn, DropDownMenu } from './styles'

const useStyles = makeStyles(() => ({
  paper: {
    '& .MuiPaper-root': {
      marginTop: '16px'
    }    
  }
}))

const AccountButton = (props) => {

  const classes = useStyles()
  const history = useHistory()

  const { avatar, signOut } = props

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <AccountCircleBtn
        src={avatar}
        onClick={handleClick}
      />
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
        <DropDownMenu onClick={() => { setAnchorEl(null); history.push('/edit_profile'); }}>
          Edit profile
        </DropDownMenu>
        <DropDownMenu onClick={() => { setAnchorEl(null); signOut();}}>
          Disconnect Wallet
        </DropDownMenu>
      </Popover>
    </>
  )
}

export default AccountButton
