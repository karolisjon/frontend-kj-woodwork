import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(0, 2),
  textDecoration: 'none',
  letterSpacing: '0.03em',
  color: theme.palette.primary.white,
  fontFamily: theme.typography.main,
  textTransform: 'uppercase',

  '&.active': {
    boxShadow: `inset 0 -2px 0 ${theme.palette.common.white}`,
  },
}));

export default Link;
