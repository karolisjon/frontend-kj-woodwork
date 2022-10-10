import * as React from 'react';
import { Box, Typography } from '@mui/material';
import theme from '../../../styles/theme';

const TableHeaders = () => (
  <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'row', my: 2 }}>
    <Box sx={{ width: '70%' }}>
      <Typography sx={{ fontFamily: theme.typography.main }}>PRODUCT DETAILS</Typography>
    </Box>
    <Box sx={{
      display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '30%',
    }}
    >
      <Box>
        <Typography sx={{ fontFamily: theme.typography.main }}>AMOUNT</Typography>
      </Box>
      <Box>
        <Typography sx={{ fontFamily: theme.typography.main }}>PRICE</Typography>
      </Box>
      <Box>
        <Typography sx={{ fontFamily: theme.typography.main }}>TOTAL</Typography>
      </Box>
    </Box>
  </Box>
);

export default TableHeaders;
