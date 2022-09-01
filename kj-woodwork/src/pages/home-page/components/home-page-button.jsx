import { styled } from '@mui/material';

const HomePageButton = styled('button')(({ theme }) => ({
  width: 300,
  height: 50,
  mt: 2,
  backgroundColor: theme.palette.primary.darkTransparent,
  color: theme.palette.primary.white,
  borderRadius: 0,
  border: `1px solid ${theme.palette.primary.white}`,
  letterSpacing: '0.1em',
  fontSize: 14,
  transition: '0.3s ease-in-out',

  ':hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default HomePageButton;
