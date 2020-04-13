import React from 'react'
import { Grid, Avatar, Card, CardActionArea, CardContent, Typography } from '@material-ui/core';
import owner from '../../img/owner.png';
import {LocatedInfo} from './LocatedInfo';

export const MainLocatedInfo = () => {
  return (
      <Grid container item xs={12} sm={6} display='flex'>
        <Grid item xs={12} className='card-located'>
          <Card>
            <CardActionArea>
              <Grid container item xs={12}  display='flex' justify='space-between'>
                <Grid item xs={12} md={5} className='owner-img-container'>
                  <Avatar alt="owner" src={owner} className='owner-img'/>
                </Grid>
                <Grid item xs={12}  md={7}>
                  <CardContent>
                    <Typography gutterBottom variant="h4" color="textSecondary" component="h2">
                      Здравствуйте!
                    </Typography>
                    <blockquote>
                      <i>
                        <Typography variant="body1" color="textSecondary" component="p">
                          Меня зовут Марина - я владелец и единственный исполнитель в этом ателье.
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                          Имею огромный опыт - более 20 лет в этом деле!
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                          Потому могу поручиться за качество своих работ.
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                          Смогу "оживить" Ваши любимые вещи в обусловленные сроки и за адекватную цену! 
                        </Typography>
                      </i>
                    </blockquote>
                    <Typography variant="body1" color="textSecondary" component="p">
                      Также буду очень благодарна Вашим отзывам {' '}
                      <a href='https://g.page/AtelierMarina?share' target="_blank" rel='noopener noreferrer'>
                        <Typography variant="h6" color="primary" component="span">
                          в Google Maps! 
                        </Typography>
                      </a>
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
                <LocatedInfo/>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
  )
}
