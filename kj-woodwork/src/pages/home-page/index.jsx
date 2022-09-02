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
import HomePageButton from './components/home-page-button';
import Background from './components/background';
import Image from './components/image';
import Paragraph from '../../components/paragraph';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: { xs: 'black' }, p: { xs: 2 } }}>
      <Background component="img" src="/homepage.jpg" sx={{ display: { xs: 'none', sm: 'block' } }} />
      <Box sx={{ position: 'relative', mt: { xs: 4, sm: 6 } }}>
        <Container
          sx={{
            maxWidth: {
              xs: 500, sm: 800, md: 1000, lg: 1200, xl: 1500,
            },
            pb: 3,
            backgroundColor: 'primary.darkTransparent',
          }}
        >
          <Typography
            component="h1"
            sx={{
              pt: 2,
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
            <Box sx={{
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: { xs: 1 },
            }}
            >
              <Box sx={{
                width: { lg: '95%', md: '100%' },
                display: 'flex',
                flexDirection: 'column',
                gap: {
                  xs: 1, sm: 1, md: 1, lg: 2,
                },
              }}
              >
                <Paragraph
                  text="
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum hic, consequuntur est ipsa ex cumque exercitationem amet?
                  Quia modi quae alias recusandae aperiam atque nesciunt blanditiis enim iusto ut totam
                  ab debitis nostrum praesentium maxime.
                  Dolor sit amet consectetur adipisicing elit. Mollitia, obcaecati accusantium perferendis consequatur architecto accusamus.
                  "
                />

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

              <Image
                src="/homepage-4.jpg"
                sx={{
                  display: {
                    xs: 'block', sm: 'none',
                  },
                  width: '100%',
                  my: 3,
                }}
              />

              <Box sx={{
                width: { lg: '95%', md: '100%' },
                display: 'flex',
                flexDirection: 'column',
                gap: {
                  xs: 1, sm: 1, md: 1, lg: 2,
                },
              }}
              >
                <Paragraph
                  text="
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque perferendis illo tempora officiis maiores quidem minima velit,
                  possimus quaerat, iusto, sed nesciunt ipsam labore dignissimos.
                  Sit recusandae quam nisi. Magni omnis cumque eos doloremque officia quia iste quaerat adipisci.
                "
                />

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
      </Box>
    </Box>
  );
};

export default HomePage;
