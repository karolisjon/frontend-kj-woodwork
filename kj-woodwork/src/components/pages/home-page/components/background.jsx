import { Box, styled } from '@mui/material'; 

const Background = styled(Box)({
  position: 'absolute',
  top: 64,
  left: 0,
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  zIndex: 0,
});

export default Background;
