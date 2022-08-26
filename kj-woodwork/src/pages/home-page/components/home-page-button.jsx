import { Button, styled } from '@mui/material';

const HomePageButton = styled(Button)(({ theme }) => ({
  width: '300px',
  height: '50px',
  mt: 2,
  backgroundColor: theme.palette.primary.darkTransparent,
  color: theme.palette.primary.white,
  borderRadius: '0',
  border: '1px solid #fff',
  letterSpacing: '0.1em',
  fontSize: '14px',
  transition: '0.3s ease-in-out',

  ':hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default HomePageButton;
