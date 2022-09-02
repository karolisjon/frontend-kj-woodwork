import * as React from 'react';
import { Container } from '@mui/material';
import theme from '../styles/theme';

const ContentContainer = ({ children }) => (
  <Container
    sx={{
      maxWidth: {
        xs: 500, sm: 800, md: 1000, lg: 1200, xl: 1500,
      },
      pb: 3,
      backgroundColor: theme.palette.primary.darkTransparent,
    }}
  >
    {children}
  </Container>
);

export default ContentContainer;
