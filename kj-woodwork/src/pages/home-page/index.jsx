/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import * as React from 'react';
import {
  Box,
  Typography,
  Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomParagraph from '../../components/custom-paragraph';
import CustomButton from './components/home-page-button';
import Background from './components/background';
import ContentContainer from './components/content-container';
// import CartPageContext from '../../../contexts/cart-page-context';

const HomePage = () => {
  const navigate = useNavigate();

  // const cartPageContext = React.useContext(CartPageContext);
  // console.log('HomePage, cartPageContext: ', cartPageContext);

  return (
    <Box>
      <Background component="img" src="/homepage.jpg" />
      <ContentContainer>
        <Container sx={{ backgroundColor: 'primary.darkTransparent', paddingBottom: 1 }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: 'white',
              fontWeight: '400',
              fontFamily: 'logoFont',
            }}
          >
            KJ Woodwork
          </Typography>
          <Box sx={{ width: '50%', mt: 4, mb: 4 }}>
            <CustomParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Illum hic, consequuntur est ipsa ex cumque exercitationem amet?
              Quia modi quae alias recusandae aperiam atque nesciunt blanditiis enim iusto ut totam
              ab debitis nostrum praesentium maxime.
              Dolor sit amet consectetur adipisicing elit. Mollitia, obcaecati accusantium perferendis consequatur architecto accusamus.
            </CustomParagraph>
            <CustomButton onClick={() => navigate('/about-us')}>About us</CustomButton>
          </Box>
          <Box sx={{ width: '50%', mb: 4 }}>
            <CustomParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque perferendis illo tempora officiis maiores quidem minima velit,
              possimus quaerat, iusto, sed nesciunt ipsam labore dignissimos.
              Sit recusandae quam nisi. Magni omnis cumque eos doloremque officia quia iste quaerat adipisci.
            </CustomParagraph>
            <CustomButton onClick={() => navigate('/product-catalog')}>Products</CustomButton>
          </Box>
        </Container>
      </ContentContainer>
    </Box>
  );
};

export default HomePage;
