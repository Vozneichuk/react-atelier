import React, { Component } from 'react'
import {Header} from '../../components/Header/Header';
import {Container} from '@material-ui/core';
import './home.scss';
import {Review} from '../../components/Review/Review';

export default class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <Container>
          <header>
            <Header/>
          </header>
          <main>
            <Review/>
          </main>
        </Container>
      </div>
    )
  }
}
