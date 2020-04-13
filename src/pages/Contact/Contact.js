import React, { Component } from 'react'
import {MainLocatedInfo} from '../../components/ContactPageComponents/MainLocatedInfo';
import {LocatedMap} from '../../components/ContactPageComponents/LocatedMap';
import {Grid, Container} from '@material-ui/core';
import './contact.scss';

export default class Contact extends Component {
  render() {
    return (
      <div className='contact-container'>
        <Container>
          <Grid container item xs={12} display='flex' justify='space-between' alignItems='flex-start'>
            <MainLocatedInfo/>
            <LocatedMap/>
          </Grid>
        </Container>
      </div>
    )
  }
}
