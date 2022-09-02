import * as React from 'react';
import { Box } from '@mui/material';

const ImageLg = ({ src }) => (
  <Box
    component="img"
    src={src}
    sx={{
      position: 'relative',
      top: 0,
      right: 0,
      width: 420,
      display: {
        xs: 'none', sm: 'none', md: 'none', lg: 'block',
      },
    }}
  />
);

export default ImageLg;
