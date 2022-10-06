import * as React from 'react';
import { Box } from '@mui/material';

const BackgroundImage = ({ src }) => (
  <Box
    component="img"
    src={src}
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      display: { xs: 'none', sm: 'block' },
      objectFit: 'cover',
      zIndex: 0,
    }}
  />
);

export default BackgroundImage;
