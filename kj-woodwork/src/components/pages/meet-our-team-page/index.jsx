import { Box } from '@mui/material';
import React from 'react'
import CartPageContext from '../../../contexts/cart-page-context';

const MeetOurTeam = () => {
  const cartPageContext = React.useContext(CartPageContext);

  console.log(cartPageContext);

  return (
    <Box sx={{ backgroundColor: 'green' }}>MeetOurTeam</Box>
  )
}

export default MeetOurTeam;