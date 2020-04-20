import React from 'react'
import {Route, HashRouter} from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import {NavBar} from './components/NavBar/NavBar';
import {Footer} from './components/Footer/Footer';

export const App = () => {
  return (
    <HashRouter>
      <NavBar/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/contact' component={Contact}/>
      <Footer/>
    </HashRouter>
  )
}

