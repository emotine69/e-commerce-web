import React, { useState, useEffect } from 'react';
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

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user, pass, checked);
    setUser('');
    setPass('');
  };
  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <div>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Sign In</h2>
            </Grid>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Username"
                placeholder="Enter Username"
                fullWidth
                required
                type="text"
                name="username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <TextField
                label="Password"
                placeholder="Enter Password"
                fullWidth
                required
                type="password"
                name="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="remember"
                    color="primary"
                    onChange={(e) => setChecked(e.target.checked)}
                  />
                }
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
            </form>
          </div>
          <div>
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
          </div>
        </Paper>
      </Grid>
    </>
  );
};

export default Login;
