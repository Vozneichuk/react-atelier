import React from 'react'
import {Grid, Container} from '@material-ui/core';
import {PhoneAndMail , Where} from '../ContactPageComponents/LocatedInfo';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import EventNoteIcon from '@material-ui/icons/EventNote';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {NavLink} from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll'
import {handleLocation, location} from '../../utils';
import './footer.scss'; 

export const Footer = () => {

  const scrollToTop = () => {
    scroll.scrollToTop()
    if(location === '/contact'){
      return null
    }
    else{
      handleLocation()
    }
  }
  
  return (
    <footer>
      <Container className='footer-container'>
        <Grid container item display='flex' direction='column' xs={12}>
          <Grid container justify='center' >
            <h2>
              НАШИ КОНТАКТЫ
            </h2>
          </Grid>
          <Grid container display='flex' direction='row' justify='space-between' className='info'>
            <Grid container item sm={6} xs={12} md={3} 
              display='flex' 
              justify='space-between' 
              alignItems='center' 
              direction='column' 
              className='contacts'>
              <PermContactCalendarIcon className='footer-svg'/>
              <h3>Контакты</h3>
              <hr/>
              <PhoneAndMail />
            </Grid>
            <Grid container item sm={6} xs={12} md={3} 
              display='flex' 
              justify='space-between' 
              alignItems='center' 
              direction='column' 
              className='address'>
              <LocationOnIcon className='footer-svg'/>
              <h3>Адресс</h3>
              <hr/>
              <Where/>
            </Grid>
            <Grid container item sm={6} xs={12} md={3} 
              display='flex' 
              justify='space-between' 
              alignItems='center' 
              direction='column' 
              className='schedule'>
              <EventNoteIcon className='footer-svg'/>
              <h3>График</h3>
              <hr/>
              <p>Пн-Пт: с 11:00-20:00</p>
              <p>Сб-Вс: с 12:00-19:00</p>
            </Grid>
            <Grid container item sm={6} xs={12} md={3} 
              display='flex' 
              justify='space-between' 
              alignItems='center' 
              direction='column' 
              className='about'>
              <HelpOutlineIcon className='footer-svg'/>
              <h3>О нас</h3>
              <hr/>
              <Link
                to="review"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}
              >
                <p>Отзывы</p>
              </Link>
              <NavLink to='/contact' onClick={scrollToTop}>
                <p>Как нас найти</p>
              </NavLink>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}
