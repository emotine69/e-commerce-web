import Head from 'next/head';
import useStyles from '../utils/styles';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link,
  Devider,
} from '@material-ui/core';
import NextLink from 'next/link';

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>SaigonByNight</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>SaigonByNight</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
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
