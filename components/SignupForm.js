import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const Signup = () => {
  const paperStyle = {
    padding: 30,
    height: '70vh',
    width: 400,
    margin: '20px auto',
  };
  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={{ backgroundColor: '#154c79' }}>
              <AddCircleOutlineOutlinedIcon />
            </Avatar>
            <h2 style={{ margin: 0 }}>Sign Up</h2>
            <Typography variant="subtitle2">
              Please fill this form to register an account
            </Typography>
            <form>
              <TextField
                fullWidth
                label="Name"
                placeholder="Enter your name    "
              />
              <TextField
                fullWidth
                type="email"
                label="Email"
                placeholder="Enter your email"
              />
              <TextField
                fullWidth
                label="Phone Number"
                placeholder="Enter your phone number"
              />
              <TextField
                fullWidth
                type="password"
                label="Password"
                placeholder="Enter your password"
              />
              <TextField
                fullWidth
                type="password"
                label="Confirm Password"
                placeholder="Enter your confirm password"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ margin: '12px 0' }}
              >
                Sign Up
              </Button>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default Signup;
