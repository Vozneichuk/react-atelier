import React from 'react'
import {Grid} from '@material-ui/core'

export const LocatedMap = () => {
  return (
    <Grid item xs={12} sm={6}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.2774354310104!2d30.203927415670854!3d48.75749797927776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d20d0d10a202c1%3A0x88993eec9ef1dd47!2z0JDRgtC10LvRjNC1INCc0LDRgNC40L3QsA!5e0!3m2!1suk!2sua!4v1586482190298!5m2!1suk!2sua"
      className='map' frameBorder='0' allowFullScreen='' aria-hidden='false' tabIndex='0' title='99'></iframe>
    </Grid>
  )
}
