/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import * as React from 'react';
import {
  Box,
  Typography,
  Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CustomParagraph from '../../components/custom-paragraph';
import CustomButton from './components/home-page-button';
import Background from './components/background';
import ContentContainer from './components/content-container';
import Image from './components/image';

const HomePage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up('md'));

  console.log(md);

  return (
    <Box>
      <Background component="img" src="/homepage.jpg" />
      <ContentContainer>
        <Container sx={{
          minWidth: 1400,
          pb: 3,
          backgroundColor: 'primary.darkTransparent',
        }}
        >
          <Typography
            component="h1"
            sx={{
              color: 'white',
              fontWeight: '400',
              fontFamily: 'logoFont',
              fontSize: {
                xs: 45, sm: 70, md: 90, lg: 110,
              },
            }}
          >
            KJ Woodwork
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Box sx={{
                width: '90%', display: 'flex', flexDirection: 'column', gap: 1,
              }}
              >
                <CustomParagraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum hic, consequuntur est ipsa ex cumque exercitationem amet?
                  Quia modi quae alias recusandae aperiam atque nesciunt blanditiis enim iusto ut totam
                  ab debitis nostrum praesentium maxime.
                  Dolor sit amet consectetur adipisicing elit. Mollitia, obcaecati accusantium perferendis consequatur architecto accusamus.
                </CustomParagraph>
                <CustomButton onClick={() => navigate('/about-us')}>About us</CustomButton>
              </Box>
              <Box sx={{
                width: '90%', display: 'flex', flexDirection: 'column', gap: 1,
              }}
              >
                <CustomParagraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque perferendis illo tempora officiis maiores quidem minima velit,
                  possimus quaerat, iusto, sed nesciunt ipsam labore dignissimos.
                  Sit recusandae quam nisi. Magni omnis cumque eos doloremque officia quia iste quaerat adipisci.
                </CustomParagraph>
                <CustomButton onClick={() => navigate('/product-catalog')}>Products</CustomButton>
              </Box>
            </Box>
            <Image src="/homepage-2.jpg" />

          </Box>
        </Container>
      </ContentContainer>
    </Box>
  );
};

export default HomePage;
