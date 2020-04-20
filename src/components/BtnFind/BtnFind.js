import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core';
import {animateScroll as scroll } from 'react-scroll'

export const BtnFind = () => {

	const [location, setLocation] = useState(window.location.hash)

	const handleLocation = () => {
		if(location === '#/contact'){
			return setLocation('#/')
		}
		else{
			return setLocation('#/contact')
		}
	}

	const scrollToTop = () => {
		scroll.scrollToTop()
	}

	return (
		<Link to={location === '#/contact' ? '/' : '/contact'} onClick={scrollToTop}>
			<Button variant='contained' color='secondary' onClick={handleLocation}>
				{location === '#/contact' ? "На главную" : "Как нас найти"}	
			</Button>
		</Link>
	)
}
