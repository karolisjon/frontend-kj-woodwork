import { Box } from '@mui/material';
import React from 'react';
import Navbar from './components/navbar/index';
import HomePage from './components/pages/home-page';
import MeetOurTeam from './components/pages/meet-our-team-page';
import Products from './components/pages/products-page';

const App = () => (
      <>
        <Navbar />
        <HomePage />
        <MeetOurTeam />
        <Products />
      </>
  );

export default App;
