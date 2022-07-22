import { Box, Typography, Container } from '@mui/material';
import React from 'react'
import Background from './components/background';
import ContentContainer from './components/content-container';


const HomePage = () => {
  return (
    <Box>
      <Background component='img' src='/homepage.jpg' />
      <ContentContainer>
        <Container>
          <Typography variant='h1' component='h1' sx={{ 
            color: 'white', 
            fontWeight: '400', 
            fontFamily: 'logoFont'
          }}
          >
            KJ Woodwork
          </Typography>
          <Typography sx={{ color: 'white', fontWeight: '400' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deserunt soluta atque consectetur magni unde. 
            Reprehenderit ullam quod neque assumenda amet minima sit. Dignissimos quas recusandae voluptatibus fugit omnis officiis aspernatur. 
          </Typography>
        </Container>
      </ContentContainer>
    </Box>
  )
}

export default HomePage;
