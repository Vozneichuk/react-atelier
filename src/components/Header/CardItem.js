import React from 'react';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from '@material-ui/core';
import ModalTool from './ModalTool'

export default function CardItem({item, item: {text_list}}) {
  return (
    <Card className='card-container'>
      <CardActionArea>
        <CardMedia
          className='image'
          image={item.img}
          title={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h2" component="h1" align="center" className='title'>
            {item.title}
          </Typography>
          {item.sub_title ? 
          <Typography gutterBottom variant="body1" component="p" align="center">( {item.sub_title} ) </Typography>
          :
          null
          }
          <div className='text'>
            {text_list.map((text, i) => {
              return(
                <Typography key={i} variant="h6" color="textPrimary" component="p">
                  {'- '}{text}
                </Typography>
              )
            })}
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ModalTool/>
      </CardActions>
    </Card>
  );
}