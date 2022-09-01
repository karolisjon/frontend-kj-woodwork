import { styled } from '@mui/material';

const HomePageButton = styled('button')(({ theme }) => ({
  width: 300,
  height: 50,
  mt: 2,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.white,
  borderRadius: 0,
  border: `1px solid ${theme.palette.primary.white}`,
  letterSpacing: '0.1em',
  fontSize: 14,
  fontFamily: theme.typography.main,
  textTransform: 'uppercase',
  transition: '0.3s ease-in-out',
}));

export default HomePageButton;
