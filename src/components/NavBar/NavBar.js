import React from 'react'
import logo from '../../img/logo.png'
import {Grid, Button, Container} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './nav-bar.scss';

export const NavBar = (props) => {
  const {location, resetLocation, handleLocation } = props
  return (
      <nav>
        <Container>
          <Grid container item xs={12} 
            display='flex' 
            justify='space-between' 
            alignItems='center'
            className='nav-container' 
          >
            <Grid container item xs={12} sm={5} >
              <Link to='/' onClick={resetLocation}>
                <img src={logo} width='100%' alt=''/>
              </Link>
            </Grid>
            <Grid container item xs={12} sm={4} display='flex' justify='flex-end'>
              <Link to={location === '/contact' ? '/' : '/contact'}>
                <Button variant='contained' color='secondary' onClick={handleLocation}>
                  {location === '/contact' ? "На главную" : "Как нас найти"}
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </nav>
  )
}
