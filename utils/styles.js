import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    // backgroundColor: '#040d21',
    '& a': {
      color: '#ffffff',
      marginLeft: 25,
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
  },

  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    fontFamily: 'Dancing Script',
  },

  grow: {
    flexGrow: 1,
  },

  main: {
    minHeight: '80vh',
  },

  footer: {
    textAlign: 'center',
  },

  section: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default useStyles;
