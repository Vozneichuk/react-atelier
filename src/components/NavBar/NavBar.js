import React from 'react'
import logo from '../../img/logo.png'
import {Grid, Container} from '@material-ui/core';
import {BtnFind} from '../BtnFind/BtnFind';
import './nav-bar.scss';

export const NavBar = () => {
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
						<img src={logo} width='100%' alt=''/>
					</Grid>
					<Grid container item xs={12} sm={4} display='flex' justify='flex-end'>
					<BtnFind/>
					</Grid>
          	</Grid>
        	</Container>
      </nav>
  	)
}
