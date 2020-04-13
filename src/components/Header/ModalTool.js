import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Modal, Button, Backdrop, Grid} from '@material-ui/core';
import { useSpring, animated } from '@react-spring/web'; // web.cjs is required for IE 11 support
import AttachMoneyTwoToneIcon from '@material-ui/icons/AttachMoneyTwoTone';
import bg from '../../img/owner-bg.jpg';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    background: `url(${bg})`,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    userSelect: 'none',
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function ModalTool() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="small" color="secondary" variant='contained' onClick={handleOpen}>
        <AttachMoneyTwoToneIcon color='action' fontSize='large'/>
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} className='modal-container'>
          <Grid item xs={12}>
            <div className={classes.paper}>
              <h2 id="spring-modal-title">Доброго времени суток!</h2>
              <p>Есть возможность уточнить приблизительную цену по телефону.</p>
              <p id="spring-modal-description">Будем рады предоставить Вам бесплатную консультацию и согласовать цену при личном визите!</p>
            </div>
          </Grid>
        </Fade>
      </Modal>
    </div>
  );
}