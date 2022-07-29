import * as React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import CustomButton from '../../../custom-button';

const ItemCard = () => {
  return (
    <Card sx={{ width: 350, mt: 4, borderRadius: 0 }}>
      <CardMedia
        component='img'
        image='https://www.arlberry.com/wp-content/uploads/2014/01/Mia-Marquez-1-744x496.jpg'
        alt='Dining table'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Dining table
        </Typography>
        <Typography gutterBottom variant='body1' component='div'>
          Category
        </Typography>
        <Typography gutterBottom variant='body2' component='div'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id culpa perspiciatis officiis molestiae nostrum temporibus?
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
