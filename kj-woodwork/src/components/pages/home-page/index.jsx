import {
  Box,
  Typography,
  Container,
} from '@mui/material';
import React from 'react';
import CustomParagraph from '../../../custom-paragraph';
import CustomButton from '../../custom-button';
import Background from './components/background';
import ContentContainer from './components/content-container';
import { useNavigate } from "react-router-dom";
// import CartPageContext from '../../../contexts/cart-page-context';


const HomePage = () => {
  let navigate = useNavigate();

  // const cartPageContext = React.useContext(CartPageContext);
  // console.log('HomePage, cartPageContext: ', cartPageContext);

  return (
    <Box>
      <Background component='img' src='/homepage.jpg' />
      <ContentContainer>
        <Container >
          <Typography variant='h1' component='h1' sx={{
            color: 'white',
            fontWeight: '400',
            fontFamily: 'logoFont'
          }}
          >
            KJ Woodwork
          </Typography>
        </Container>
        <Container>
          <Box sx={{ width: '50%', mt: 4, mb: 8 }}>
          <CustomParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Illum hic, consequuntur est ipsa ex cumque exercitationem amet?
            Quia modi quae alias recusandae aperiam atque nesciunt blanditiis enim iusto ut totam
            ab debitis nostrum praesentium maxime.
          </CustomParagraph>
          <CustomButton onClick={() => navigate('/meet-our-team')} >About us</CustomButton>
          </Box>
          <Box sx={{ width: '50%', mb: 8 }}>
          <CustomParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque perferendis illo tempora officiis maiores quidem minima velit, possimus quaerat, iusto, sed nesciunt ipsam labore dignissimos.
          </CustomParagraph>
          <CustomButton onClick={() => navigate('/products')}>Products</CustomButton>
          </Box>
        </Container>
      </ContentContainer>
    </Box>
  )
}

export default HomePage;
