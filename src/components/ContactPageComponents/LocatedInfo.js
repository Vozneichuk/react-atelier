import React from 'react'
import {Grid, Typography} from '@material-ui/core';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

export const Where = () => {
  return(
    <React.Fragment>
      <Typography variant="h6" color="textSecondary" component="p">
        г. Умань
      </Typography>
      <Typography variant="h6" color="textSecondary" component="p">
        переулок Максима Зализняка
      </Typography>
      <Typography variant="h6" color="textSecondary" component="p">
        Мещанский рынок, 70-й павильон
      </Typography>
    </React.Fragment>
  )
}

export const PhoneAndMail = () => {
  return(
    <React.Fragment>
      <Grid container alignItems='center' justify='center' className='number'>
        <PhonelinkRingIcon color='primary'/>
        <Typography variant="h4" color="secondary" component="span">
          096 71 72 372
        </Typography>
      </Grid>
      <Grid container alignItems='center' justify='center' className='mail'>
        <MailOutlineIcon color='primary'/>
        <Typography variant="h6" color="secondary" component="span">
          atelier.marina.online@gmail.com
        </Typography>
      </Grid>
    </React.Fragment>
  )
}

export const LocatedInfo = () => {
  return (
    <Grid container item xs={12} 
      display='flex' 
      direction='column' 
      justify='center' 
      alignItems='center' 
      className='located-info'
    >
      <Grid container item alignItems='center' justify='center' display='flex' direction='column' className='contact-info'>
        <Where/>
      </Grid>
        <PhoneAndMail/>
    </Grid>
  )
}
