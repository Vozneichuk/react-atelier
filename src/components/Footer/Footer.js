import React from 'react'
import {Grid, Container} from '@material-ui/core';
import {PhoneAndMail , Where} from '../ContactPageComponents/LocatedInfo';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import EventNoteIcon from '@material-ui/icons/EventNote';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Link } from 'react-scroll'
import {BtnFind} from '../BtnFind/BtnFind';
import './footer.scss'; 

export const Footer = () => {
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
						<div className='footer-svg'>
							<PermContactCalendarIcon />
						</div>
						<div className='footer-title'>
							<h3>Контакты</h3>
							<hr/>
						</div>
              <PhoneAndMail />
            </Grid>
            <Grid container item sm={6} xs={12} md={3} 
              display='flex' 
              justify='space-between' 
              alignItems='center' 
              direction='column' 
              className='address'>
					  <div className='footer-svg'>
					  		<LocationOnIcon />
					  </div>
					  <div className='footer-title'>
						<h3>Адресс</h3>
						<hr/>
					  </div>
              <Where/>
            </Grid>
            <Grid container item sm={6} xs={12} md={3} 
              display='flex' 
              justify='space-between' 
              alignItems='center' 
              direction='column' 
              className='schedule'>
					  <div className='footer-svg'>
					  		<EventNoteIcon />
					  </div>
					  <div className='footer-title'>
							<h3>График</h3>
              			<hr/>
					  </div>
              <p>Пн-Пт: с 11:00-20:00</p>
              <p>Сб-Вс: с 12:00-19:00</p>
            </Grid>
            <Grid container item sm={6} xs={12} md={3} 
              display='flex' 
              justify='space-between' 
              alignItems='center' 
              direction='column' 
              className='about'>
					  <div className='footer-svg'>
					  	<HelpOutlineIcon />
					  </div>
					  <div className='footer-title'>
						<h3>О нас</h3>
              		<hr/>
					  </div>
              <Link
                to="review"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}
              >
                <p>Отзывы</p>
              </Link>
				  	<BtnFind/>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}
