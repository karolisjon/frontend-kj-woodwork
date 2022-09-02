import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(0, 2),
  textDecoration: 'none',
  color: theme.palette.grey[200],
  fontFamily: theme.typography.main,

  '&.active': {
    boxShadow: `inset 0 -2px 0 ${theme.palette.common.white}`,
  },

  ':hover': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
}));

export default Link;
