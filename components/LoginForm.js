import React from 'react';
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Link,
} from '@material-ui/core';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
  const paperStyle = {
    padding: 30,
    height: '70vh',
    width: 400,
    margin: '20px auto',
  };

  const avatarStyle = {
    backgroundColor: '#154c79',
  };

  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            label="Username"
            placeholder="Enter Username"
            fullWidth
            required
          />
          <TextField
            label="Password"
            placeholder="Enter Password"
            fullWidth
            required
            type="password"
          />
          <FormControlLabel
            control={<Checkbox name="checked" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            style={{ margin: '10px 0' }}
          >
            Sign in
          </Button>
          <Typography>
            <Link href="#" color="secondary">
              Forgot password ?
            </Link>
          </Typography>
          <Typography>
            Don't have account ?
            <Link href="signup" color="secondary">
              {' '}
              Sign up
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default Login;
