import React, {useState} from 'react';
import {data} from '../../data';
import {Grid, Button} from '@material-ui/core';
import CardItem from './CardItem';
import './header.scss';

export const Header = () => {

  const [sort, setSort] = useState('COVID-19 / Маски')

  const filterTitle = (value) => {
    setSort(value)
  }

  const filterCardsList = () => {
    let filterCard = data.filter(i => i.title === sort)
    let card = filterCard.map(i => {
      return <CardItem key={i.id} item={i}/>
    })
    return card
  }

  let filteredCards = filterCardsList()

  let offerList = data.map(i => {
    return (
      <div key={i.id} className={sort === i.title ? 'active-btn' : ''}>
        <Button 
          color={sort === i.title ? 'secondary' : 'default'}
          variant='contained' 
          onClick={filterTitle.bind(null, i.title)}
          >
          {i.title}
        </Button>
      </div>
    )
  })
  
  return(
    <Grid container item xs={12} display='flex' justify='space-between'>
      <Grid container item xs={12} sm={3}>
        <h1 className='offer'>Наши услуги</h1>
        <Grid container display='flex' direction='column' alignItems='flex-start' className='offer-list'>
          {offerList}
        </Grid>
      </Grid>
      <Grid item xs={12} sm={8}>
        {filteredCards}
      </Grid>
    </Grid>
  )
}
