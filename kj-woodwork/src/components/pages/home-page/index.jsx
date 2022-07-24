import {
  Box,
  Typography,
  Container,
  Divider
} from '@mui/material';
import React from 'react';
import CustomButton from '../../custom-button';
import Background from './components/background';
import ContentContainer from './components/content-container';


const HomePage = () => {
  return (
    <Box>
      <Background component='img' src='/homepage.jpg' />
      <ContentContainer>
        <Container >
          <Typography variant='h1' component='h1' sx={{
            color: 'white',
            fontWeight: '400',
            fontFamily: 'logoFont'
          }}
          >
            KJ Woodwork
          </Typography>
        </Container>
        <Container>
          <Typography
            maxWidth='sm'
            paragraph
            sx={{ color: 'white', fontWeight: '400', mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Illum hic, consequuntur est ipsa ex cumque exercitationem amet?
            Quia modi quae alias recusandae aperiam atque nesciunt blanditiis enim iusto ut totam
            ab debitis nostrum praesentium maxime.
          </Typography>
          <Divider sx={{ backgroundColor: '#fff', height: '2px', width: '20%',}} />
          <Typography
            maxWidth='sm'
            paragraph
            sx={{ color: 'white', fontWeight: '400', mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque perferendis illo tempora officiis maiores quidem minima velit, possimus quaerat, iusto, sed nesciunt ipsam labore dignissimos.
          </Typography>
          <CustomButton>Products</CustomButton>
          <Divider sx={{ backgroundColor: '#fff', height: '2px', width: '20%', mt: 2 }} />
        </Container>
      </ContentContainer>
    </Box>
  )
}

export default HomePage;
