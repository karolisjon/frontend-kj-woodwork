import { Button, styled } from '@mui/material'; 

const CustomButton = styled(Button)(({ theme }) => ({
  width: '300px',
  height: '50px',
  mt: 2,
  mb: 4,
  backgroundColor: '#000000b8',
  borderRadius: '0',
  border: '2px solid #fff',
  color: '#fff',
  letterSpacing: '0.1em',
  fontSize: '14px',
  transition: '0.3s ease-in-out',

  ':hover': {
    backgroundColor: theme.palette.primary.dark,
  }
}));

export default CustomButton;