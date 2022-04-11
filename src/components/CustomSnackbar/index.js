import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import CloseIcon from '@material-ui/icons/Close';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(() => ({
  snackbar: {
    '& .MuiSnackbarContent-root': {
      backgroundColor: 'var(--colorOrange)',
      boxShadow: '0px 3px 5px -1px rgb(var(--colorOrange) / 20%), 0px 6px 10px 0px rgb(var(--colorOrange) / 14%), 0px 1px 18px 0px rgb(var(--colorOrange) / 12%)'
    }
  }
}))

const CustomSnackbar = (props) => {

  const classes = useStyles()

  const { handleClose, message, open } = props

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      message={message}
      className={classes.snackbar}
      action={
        <Fragment>
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Fragment>
      }
    />
  )
}

export default CustomSnackbar
