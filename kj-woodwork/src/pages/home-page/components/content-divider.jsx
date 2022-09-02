import * as React from 'react';
import { Divider } from '@mui/material';

const ContentDivider = () => (
  <Divider sx={{
    width: { lg: '95%', md: '100%' },
    display: {
      xs: 'none', sm: 'none', md: 'none', lg: 'block',
    },
    height: '1px',
    backgroundColor: 'white',
  }}
  />
);

export default ContentDivider;
