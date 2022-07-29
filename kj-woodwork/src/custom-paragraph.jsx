import { styled } from '@mui/material'; 

const CustomParagraph = styled('p')(({ theme }) => ({
  color: theme.palette.primary.white, 
  fontWeight: '400',
  letterSpacing: '0.1em', 
  fontSize: '14px',
  mt: 2,
  backgroundColor: theme.palette.primary.darkTransparent,
  padding: theme.spacing(1.5),
}));

export default CustomParagraph;
