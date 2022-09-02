/* eslint-disable max-len */
import * as React from 'react';
import { Box } from '@mui/material';
import Background from '../home-page/components/background';
import Paragraph from '../../components/paragraph';
import HeaderMain from '../../components/header-main';
import HeaderSecondary from '../../components/header-secondary';
import ContentContainer from '../../components/content-container';

const AboutUs = () => (
  <Box sx={{ backgroundColor: { xs: 'black' }, p: { xs: 2 } }}>
    <Background component="img" src="/meet-our-team.jpg" sx={{ display: { xs: 'none', sm: 'block' } }} />
    <Box sx={{ position: 'relative', marginTop: { xs: 0, sm: 6 } }}>
      <ContentContainer>
        <HeaderMain text="About us" />

        <Paragraph
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nihil minus minima cum sequi amet molestias velit doloribus odio officia?
          Iure nulla harum dignissimos, enim inventore facere optio expedita quae impedit odio corrupti non quisquam quas cum ad. Ab explicabo vero aliquam.
          Quia perferendis ad temporibus provident fugiat enim, dolore quaerat vitae repudiandae in minima similique?
          Lonsectetur adipisicing elit. Sunt eum sapiente, ullam voluptate amet perspiciatis fuga doloremque facere numquam!"
        />

        <HeaderSecondary text="Team" />

        <Paragraph
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptates amet in odio iste fugit dolorum ex laudantium incidunt cumque.
          Quibusdam quaerat amet quisquam, ratione quae provident nihil repudiandae necessitatibus, ducimus reiciendis eius eligendi, consectetur modi porro fugiat quos sapiente?
          Amet consectetur adipisicing elit. Rem dolorem rerum eius assumenda. Fuga, necessitatibus veniam!
          Ipsam veniam perferendis similique. Hic aliquid aspernatur atque, quasi corrupti magni sint animi quia vero. Pariatur nobis consequatur voluptatem quidem suscipit deserunt hic quia quaerat!"
        />

        <HeaderSecondary text="Our mission" />

        <Paragraph
          text="
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quos repudiandae, incidunt porro similique ullam vero quaerat voluptatum nihil cum?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A aut et voluptatem?
          Aliquid ab non, magnam, tempore labore, animi sapiente officiis distinctio quibusdam similique necessitatibus ex.
          Ipsum dolor sit amet, consectetur adipisicing elit. Iste quidem maiores odit illum repudiandae unde, animi, labore reiciendis dignissimos aliquam aut illo."
        />
      </ContentContainer>
    </Box>
  </Box>
);
export default AboutUs;
