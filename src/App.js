import React, {useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import {NavBar} from './components/NavBar/NavBar';
import {Footer} from './components/Footer/Footer';

export const App = () => {
  const [location, setLocation] = useState(window.location.pathname)

  const handleLocation = () => {
    if(location === '/contact'){
      setLocation('/')
    }
    else{
      setLocation('/contact')
    }
  }
  
  const resetLocation = () => {
    setLocation('./')
  }
  return (
    <Router>
      <NavBar location={location} handleLocation={handleLocation} resetLocation={resetLocation}/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/contact' component={Contact}/>
      <Footer handleLocation={handleLocation} location={location}/>
    </Router>
  )
}

