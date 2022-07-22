import { Box, Typography, Container, Button, Divider } from '@mui/material';
import React from 'react';
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
          <Divider sx={{
            backgroundColor: 'white',
            height: '2px',
          }}/>
          <Button sx={{
            width: '300px',
            height: '50px',
            backgroundColor: '#000000b8',
            color: 'white',
            borderRadius: '0',
            border: '2px solid white',
            mt: 2,
          }}>
            Products
          </Button>
          </Container>
      </ContentContainer>
    </Box>
  )
}

export default HomePage;
