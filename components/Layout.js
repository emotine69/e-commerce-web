import Head from 'next/head';
import useStyles from '../utils/styles';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>SaigonByNight</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>SaigonByNight</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        All rights reserved. SaigonByNight
      </footer>
    </div>
  );
};
export default Layout;
