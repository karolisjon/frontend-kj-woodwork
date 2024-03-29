import * as React from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../../components/custom-button';

const ProductCard = ({
  id,
  title,
  description,
  price,
  img,
  category,
  woodType,
}) => {
  const navigate = useNavigate();

  return (
    <Card sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      borderRadius: 0,
    }}
    >
      <Box sx={{ justifyContent: 'space-between' }}>
        <Box sx={{
          position: 'relative',
          width: '100%',
          pt: '70%',
        }}
        >
          <CardMedia
            component="img"
            image={img}
            alt=""
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
            }}
          />
        </Box>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h6" sx={{ fontFamily: 'main', fontWeight: 600 }}>
            {title}
          </Typography>
          <Typography gutterBottom variant="body1" component="h6" sx={{ fontStyle: 'italic', fontSize: 14 }}>
            {category}
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            sx={{
              fontStyle: 'italic',
              fontSize: 14,
              fontWeight: 600,
              fontFamily: 'main',
              mb: 2,
            }}
          >
            {woodType}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="h6"
            sx={{
              fontFamily: 'main',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              mb: 2,
            }}
          >
            {description}
          </Typography>
          <Typography gutterBottom variant="body1" component="div" sx={{ fontFamily: 'main', fontWeight: 600 }}>
            {price}
            €
          </Typography>
        </CardContent>
      </Box>
      <CardActions sx={{ p: 0 }}>
        <CustomButton
          onClick={() => {
            navigate(`/product/${id}`);
          }}
        >
          Buy now
        </CustomButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
