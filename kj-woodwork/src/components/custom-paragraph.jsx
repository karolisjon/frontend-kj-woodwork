import { styled } from '@mui/material';

const CustomParagraph = styled('div')(({ theme }) => ({
  color: theme.palette.primary.white,
  fontWeight: 200,
  letterSpacing: '0.01em',
  fontSize: 17,
  backgroundColor: theme.palette.primary.darkTransparent,
  padding: theme.spacing(2.5),
}));

export default CustomParagraph;
