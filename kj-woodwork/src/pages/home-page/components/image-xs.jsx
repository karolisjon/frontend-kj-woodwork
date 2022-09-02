import * as React from 'react';
import { Box } from '@mui/material';

const ImageXs = ({ src }) => (
  <Box
    component="img"
    src={src}
    sx={{
      display: {
        xs: 'block', sm: 'none',
      },
      width: '100%',
      my: 3,
    }}
  />
);

export default ImageXs;
