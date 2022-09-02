/* eslint-disable max-len */
import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Background from '../home-page/components/background';
import Paragraph from '../../components/paragraph';

const AboutUs = () => (
  <Box sx={{ backgroundColor: { xs: 'black' }, p: { xs: 2 } }}>
    <Background component="img" src="/meet-our-team.jpg" sx={{ display: { xs: 'none', sm: 'block' } }} />
    <Box sx={{ position: 'relative', marginTop: { xs: 0, sm: 6 } }}>
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
          About us
        </Typography>
        <Paragraph
          sx={{
            px: {
              xs: 0, sm: 2,
            },
            py: 2,
            background: 'none',
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nihil minus minima cum sequi amet molestias velit doloribus odio officia?
          Iure nulla harum dignissimos, enim inventore facere optio expedita quae impedit odio corrupti non quisquam quas cum ad. Ab explicabo vero aliquam.
          Quia perferendis ad temporibus provident fugiat enim, dolore quaerat vitae repudiandae in minima similique?
          Lonsectetur adipisicing elit. Sunt eum sapiente, ullam voluptate amet perspiciatis fuga doloremque facere numquam!
        </Paragraph>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            color: 'white',
            fontWeight: '400',
            fontFamily: 'logoFont',
          }}
        >
          Team
        </Typography>
        <Paragraph
          sx={{
            px: {
              xs: 0, sm: 2,
            },
            py: 2,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptates amet in odio iste fugit dolorum ex laudantium incidunt cumque.
          Quibusdam quaerat amet quisquam, ratione quae provident nihil repudiandae necessitatibus, ducimus reiciendis eius eligendi, consectetur modi porro fugiat quos sapiente?
          Amet consectetur adipisicing elit. Rem dolorem rerum eius assumenda. Fuga, necessitatibus veniam!
          Ipsam veniam perferendis similique. Hic aliquid aspernatur atque, quasi corrupti magni sint animi quia vero. Pariatur nobis consequatur voluptatem quidem suscipit deserunt hic quia quaerat!
        </Paragraph>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            color: 'white',
            fontWeight: '400',
            fontFamily: 'logoFont',
          }}
        >
          Our mission
        </Typography>
        <Paragraph
          sx={{
            px: {
              xs: 0, sm: 2,
            },
            py: 2,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quos repudiandae, incidunt porro similique ullam vero quaerat voluptatum nihil cum?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A aut et voluptatem?
          Aliquid ab non, magnam, tempore labore, animi sapiente officiis distinctio quibusdam similique necessitatibus ex.
          Ipsum dolor sit amet, consectetur adipisicing elit. Iste quidem maiores odit illum repudiandae unde, animi, labore reiciendis dignissimos aliquam aut illo.
        </Paragraph>
      </Container>
    </Box>
  </Box>
);
export default AboutUs;
