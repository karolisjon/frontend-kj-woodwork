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
        <Container sx={{ backgroundColor: 'primary.darkTransparent', paddingBottom: 1 }} >
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
            Quia perferendis ad temporibus provident fugiat enim, dolore quaerat vitae repudiandae in minima similique?
            Lonsectetur adipisicing elit. Sunt eum sapiente, ullam voluptate amet perspiciatis fuga doloremque facere numquam!
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
            Amet consectetur adipisicing elit. Rem dolorem rerum eius assumenda. Fuga, necessitatibus veniam!
            Ipsam veniam perferendis similique. Hic aliquid aspernatur atque, quasi corrupti magni sint animi quia vero. Pariatur nobis consequatur voluptatem quidem suscipit deserunt hic quia quaerat!
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
            Ipsum dolor sit amet, consectetur adipisicing elit. Iste quidem maiores odit illum repudiandae unde, animi, labore reiciendis dignissimos aliquam aut illo.
          </CustomParagraph>
        </Container>
      </ContentContainer>
    </Box>
  )
}

export default AboutUs;