import { styled } from '@mui/material'; 

const CustomParagraph = styled('p')(({ theme }) => ({
  color: 'white', 
  fontWeight: '400',
  letterSpacing: '0.1em', 
  fontSize: '14px',
  mt: 2,
  backgroundColor: '#000000b8',
  padding: theme.spacing(1.5),
}));

export default CustomParagraph;
