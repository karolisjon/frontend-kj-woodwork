import * as React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import CustomButton from '../../../custom-button';
import { Box } from '@mui/system';

const ItemCard = ({ title, description, category, price, img }) => {

  // sx={{ width: 300, mt: 4, mb: 4, borderRadius: 0 }}
  return (
    <Card sx={{ borderRadius: 0 }}>
      <Box sx={{ 
        position: 'relative',
        width: '100%', 
        pt: '70%' 
      }}>
      <CardMedia
        component='img'
        image={img}
        alt=''
        sx={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          height: '100%', 
          width: '100%' ,
        }}
        />
      </Box>
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
          {price}€
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 0 }}>
        <CustomButton sx={{ margin: 'auto', width: '100%', border: 'none' }}>
          Add to cart
        </CustomButton>
      </CardActions>
    </Card>
  )
}

export default ItemCard;
