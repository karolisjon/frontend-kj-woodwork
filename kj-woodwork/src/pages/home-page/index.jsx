/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import * as React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomePageButton from './components/home-page-button';
import Background from '../../components/background';
import Image from './components/image';
import Paragraph from '../../components/paragraph';
import HeaderMain from '../../components/header-main';
import ContentContainer from '../../components/content-container';
import ContentWrapperMain from './components/content-wrapper-main';
import ContentWrapperSecondary from './components/content-wrapper-secondary';
import ContentDivider from './components/content-divider';
import ImageSm from './components/image-sm';
import ImageXs from './components/image-xs';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: { xs: 'black' }, p: { xs: 2 } }}>
      <Background component="img" src="/homepage.jpg" sx={{ display: { xs: 'none', sm: 'block' } }} />
      <Box sx={{ position: 'relative', mt: { xs: 4, sm: 6 } }}>
        <ContentContainer>
          <HeaderMain text="KJ Woodwork" />
          <Box sx={{ display: 'flex' }}>
            <ContentWrapperMain>
              <ContentWrapperSecondary>
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
              </ContentWrapperSecondary>
              <ContentDivider />
              <ImageSm src="/homepage-3.jpg" />
              <ImageXs src="/homepage-4.jpg" />
              <ContentWrapperSecondary>
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
              </ContentWrapperSecondary>
            </ContentWrapperMain>
            <Image
              src="/homepage-2.jpg"
              sx={{
                display: {
                  xs: 'none', sm: 'none', md: 'none', lg: 'block',
                },
              }}
            />
          </Box>
        </ContentContainer>
      </Box>
    </Box>
  );
};

export default HomePage;
