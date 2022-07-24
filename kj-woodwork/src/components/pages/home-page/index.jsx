import {
  Box,
  Typography,
  Container,
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
            sx={{ color: 'white', 
            fontWeight: '400',
            letterSpacing: '0.1em', 
            mt: 2,
            backgroundColor: '#000000b8',
            p: 2,
            }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Illum hic, consequuntur est ipsa ex cumque exercitationem amet?
            Quia modi quae alias recusandae aperiam atque nesciunt blanditiis enim iusto ut totam
            ab debitis nostrum praesentium maxime.
          </Typography>
          <CustomButton>Meet our team</CustomButton>
          <Typography
            maxWidth='sm'
            paragraph
            sx={{ 
              color: 'white', 
              fontWeight: '400', 
              letterSpacing: '0.1em',
              mt: 2,
              backgroundColor: '#000000b8',
              p: 2
              }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque perferendis illo tempora officiis maiores quidem minima velit, possimus quaerat, iusto, sed nesciunt ipsam labore dignissimos.
          </Typography>
          <CustomButton>Products</CustomButton>
        </Container>
      </ContentContainer>
    </Box>
  )
}

export default HomePage;
