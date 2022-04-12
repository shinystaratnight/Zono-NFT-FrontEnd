import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';

import * as Element from "./styles";

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

const ModalBox = (props) => {

  const classes = useStyles();

  const { open, handleClose, children } = props

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className={classes.modal}
    >
      <Fade in={open}>
        <Element.ModalBody>
          {children}
          <Element.TopLeftCorner className='top-left' />
          <Element.BottomRightRadius className='bottom-right' />
          <Element.MiddleBorder className='middle-border' />
        </Element.ModalBody>
      </Fade>
    </Modal>
  )
}

export default ModalBox
