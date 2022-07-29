import { Box, Container, Typography } from '@mui/material';
import * as React from 'react'
import CustomParagraph from '../../../custom-paragraph';
import Background from '../home-page/components/background';
import ContentContainer from '../home-page/components/content-container';
// import CartPageContext from '../../../contexts/cart-page-context';

const AboutUs = () => {
  // const cartPageContext = React.useContext(CartPageContext);
  // console.log('Meet our team, cartPageContext: ', cartPageContext);

  return (
    <Box>
      <Background component='img' src='/meet-our-team.jpg'/>
      <ContentContainer>
        <Container sx={{ backgroundColor: 'primary.darkTransparent' }} >
        <Typography variant='h1' component='h2' sx={{
            color: 'white',
            fontWeight: '400',
            fontFamily: 'logoFont'
          }}
          >
          About us
          </Typography>
          <CustomParagraph sx={{ backgroundColor: 'none' }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nihil minus minima cum sequi amet molestias velit doloribus odio officia?
            Iure nulla harum dignissimos, enim inventore facere optio expedita quae impedit odio corrupti non quisquam quas cum ad. Ab explicabo vero aliquam.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia perferendis ad temporibus provident fugiat enim, dolore quaerat vitae repudiandae in minima similique!
          </CustomParagraph>
          <Typography variant='h3' component='h3' sx={{
            color: 'white',
            fontWeight: '400',
            fontFamily: 'logoFont'
          }}
          >
          Team
          </Typography>
          <CustomParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptates amet in odio iste fugit dolorum ex laudantium incidunt cumque. 
            Quibusdam quaerat amet quisquam, ratione quae provident nihil repudiandae necessitatibus, ducimus reiciendis eius eligendi, consectetur modi porro fugiat quos sapiente? 
            Ipsam veniam perferendis similique. Hic aliquid aspernatur atque, quasi corrupti magni sint animi quia vero. Pariatur nobis consequatur voluptatem quidem suscipit deserunt hic quia quaerat!
          </CustomParagraph>
          <Typography variant='h3' component='h3' sx={{
            color: 'white',
            fontWeight: '400',
            fontFamily: 'logoFont'
          }}
          >
          Sustainability
          </Typography>
          <CustomParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deserunt quos iusto provident. Aperiam quae, nobis iste est 
            cupiditate quam laborum reprehenderit nemo minima laboriosam 
            recusandae dolore dolor quod ut veritatis eos quos sequi. 
            Non libero facilis corrupti soluta laudantium nulla labore reiciendis 
            odit deleniti, repellendus omnis, incidunt dolores, minus nisi dolorem porro optio amet consectetur est.
          </CustomParagraph>
          <Typography variant='h3' component='h3' sx={{
            color: 'white',
            fontWeight: '400',
            fontFamily: 'logoFont'
          }}
          >
          Our mission
          </Typography>
          <CustomParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quos repudiandae, incidunt porro similique ullam vero quaerat voluptatum nihil cum? 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A aut et voluptatem?
            Aliquid ab non, magnam, tempore labore, animi sapiente officiis distinctio quibusdam similique necessitatibus ex.
          </CustomParagraph>
        </Container>
      </ContentContainer>
    </Box>
  )
}

export default AboutUs;