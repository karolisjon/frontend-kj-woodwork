import * as React from 'react';
import { Box } from '@mui/material';

const ImageSm = ({ src }) => (
  <Box
    component="img"
    src={src}
    sx={{
      position: 'relative',
      top: 0,
      right: 0,
      width: '100%',
      my: 3,
      display: {
        xs: 'none', sm: 'block', md: 'block', lg: 'none',
      },
    }}
  />
);

export default ImageSm;
