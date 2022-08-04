import { styled } from '@mui/material'; 

const ButtonAmmount = styled('button')(({ theme}) => ({
  width: '60px',
  padding: 0,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.white,
  borderRadius: '0',
  border: 'none',
  letterSpacing: '0.1em',
  fontSize: '22px',

  ':hover': {
    cursor: 'pointer',
  }
}))

export default ButtonAmmount;
