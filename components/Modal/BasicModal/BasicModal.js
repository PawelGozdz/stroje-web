import React from 'react';
import { makeStyles } from '@mui/styles';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import { Box } from '@mui/material';

export default function BasicModal({ children, show, setShow, title, ...rest }) {
  const classes = useStyles();

  const onClose = () => setShow(false);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={show}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box className={classes.modalLook}>
          {children}
        </Box>
      </Modal>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: 'auto',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));