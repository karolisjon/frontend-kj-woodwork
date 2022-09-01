/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import * as React from 'react';
import {
  Box,
  Typography,
  Container,
  Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomParagraph from '../../components/custom-paragraph';
import HomePageButton from './components/home-page-button';
import Background from './components/background';
import ContentContainer from './components/content-container';
import Image from './components/image';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Background component="img" src="/homepage.jpg" />
      <ContentContainer>
        <Container sx={{
          maxWidth: {
            xl: 1400, lg: 1200, md: 1000, sm: 800, xs: 500,
          },
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
                width: { lg: '95%', md: '100%' }, display: 'flex', flexDirection: 'column', gap: { md: 1, lg: 2 },
              }}
              >
                <CustomParagraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum hic, consequuntur est ipsa ex cumque exercitationem amet?
                  Quia modi quae alias recusandae aperiam atque nesciunt blanditiis enim iusto ut totam
                  ab debitis nostrum praesentium maxime.
                  Dolor sit amet consectetur adipisicing elit. Mollitia, obcaecati accusantium perferendis consequatur architecto accusamus.
                </CustomParagraph>
                <HomePageButton
                  sx={{ width: { xs: '100% ', md: 300 } }}
                  onClick={() => navigate('/about-us')}
                >
                  About us
                </HomePageButton>
              </Box>

              <Divider sx={{
                width: { lg: '95%', md: '100%' },
                display: {
                  xs: 'none', sm: 'none', md: 'none', lg: 'block',
                },
                height: '1px',
                backgroundColor: 'white',
              }}
              />

              <Image
                src="/homepage-3.jpg"
                sx={{
                  display: {
                    xs: 'none', sm: 'block', md: 'block', lg: 'none',
                  },
                  width: '100%',
                  my: 3,
                }}
              />

              <Box sx={{
                width: { lg: '95%', md: '100%' }, display: 'flex', flexDirection: 'column', gap: { md: 1, lg: 2 },
              }}
              >
                <CustomParagraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque perferendis illo tempora officiis maiores quidem minima velit,
                  possimus quaerat, iusto, sed nesciunt ipsam labore dignissimos.
                  Sit recusandae quam nisi. Magni omnis cumque eos doloremque officia quia iste quaerat adipisci.
                </CustomParagraph>
                <HomePageButton
                  sx={{ width: { xs: '100% ', md: 300 } }}
                  onClick={() => navigate('/product-catalog')}
                >
                  Products

                </HomePageButton>
              </Box>
            </Box>
            <Image
              src="/homepage-2.jpg"
              sx={{
                display: {
                  xs: 'none', sm: 'none', md: 'none', lg: 'block',
                },
              }}
            />

          </Box>
        </Container>
      </ContentContainer>
    </Box>
  );
};

export default HomePage;
