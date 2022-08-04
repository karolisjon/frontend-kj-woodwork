import { styled } from '@mui/material'; 

const ButtonAmmount = styled('button')(({ theme}) => ({
  width: '60px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.white,
  borderRadius: '0',
  letterSpacing: '0.1em',
  fontSize: '22px',
  transition: '0.3s ease-in-out',
  padding: 0,
  border: 'none',

  ':hover': {
    cursor: 'pointer',
  }
}))

export default ButtonAmmount;
