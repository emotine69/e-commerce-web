import { makeStyles } from '@material-ui/core';
import { CenterFocusStrong } from '@material-ui/icons';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#123456',
    '& a': {
      color: 'white',
      marginLeff: 10,
    },
  },
  main: {
    minHeight: '80vh',
  },

  footer: {
    textAlign: 'center',
  },
});

export default useStyles;
