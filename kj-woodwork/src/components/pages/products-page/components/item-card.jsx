import * as React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import CustomButton from '../../../custom-button';

const ItemCard = ({ title, description, category, price, img }) => {

  return (
    <Card sx={{ width: 350, mt: 4, borderRadius: 0 }}>
      <CardMedia
        component='img'
        image={img}
        alt=''
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='h6'>
          {title}
        </Typography>
        <Typography gutterBottom variant='body1' component='h6'>
          {category}
        </Typography>
        <Typography gutterBottom variant='body2' component='h6'>
          {description}
        </Typography>
        <Typography gutterBottom variant='body1' component='div'>
          {price}
        </Typography>
      </CardContent>
      <CardActions >
        <CustomButton sx={{ margin: 'auto', width: '100%' }}>
          Add to cart
        </CustomButton>
      </CardActions>
    </Card>
  )
}

export default ItemCard;
