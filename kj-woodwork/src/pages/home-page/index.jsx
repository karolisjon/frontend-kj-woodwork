/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import * as React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomePageButton from './components/home-page-button';
import Paragraph from '../../components/paragraph';
import HeaderMain from '../../components/header-main';
import ContentContainer from '../../components/content-container';
import ContentWrapperMain from './components/content-wrapper-main';
import ContentWrapperSecondary from './components/content-wrapper-secondary';
import ContentDivider from './components/content-divider';
import ImageSm from './components/image-sm';
import ImageXs from './components/image-xs';
import ImageLg from './components/image-lg';
import BackgroundImage from '../../components/background-image';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: { xs: 'black' }, p: { xs: 2 } }}>
      <BackgroundImage src="/homepage.jpg" />
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
                  label="About us"
                  onClick={() => navigate('/about-us')}
                />
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
                  label="Product catalog"
                  onClick={() => navigate('/product-catalog')}
                >
                  Products
                </HomePageButton>
              </ContentWrapperSecondary>
            </ContentWrapperMain>
            <ImageLg src="/homepage-2.jpg" />
          </Box>
        </ContentContainer>
      </Box>
    </Box>
  );
};

export default HomePage;
