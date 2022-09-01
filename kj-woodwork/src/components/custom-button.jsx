import { Button, styled } from '@mui/material';

const CustomButton = styled(Button)(({ theme }) => ({
  width: '100%',
  height: '42px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.white,
  borderRadius: '0',
  letterSpacing: '0.1em',
  fontSize: 14,
  fontFamily: theme.typography.main,
  transition: '0.3s ease-in-out',

  ':hover': {
    backgroundColor: theme.palette.primary.main,
  },
}));

export default CustomButton;
