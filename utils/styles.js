import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
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
    fontFamily: 'Classique-Saigon',
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
