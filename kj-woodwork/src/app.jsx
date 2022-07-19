import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/navbar/index';
import HomePage from './components/pages/home-page';
import MeetOurTeam from './components/pages/meet-our-team-page';
import Products from './components/pages/products-page';
import OrderPage from './components/pages/order-page';

const App = () => (
      <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/meet-our-team' element={<MeetOurTeam />} />
          <Route path='/products' element={<Products />} />
          <Route path='/order' element={<OrderPage />} />
        </Routes>
      </BrowserRouter>
      </>
  );

export default App;
