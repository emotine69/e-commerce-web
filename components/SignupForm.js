import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const Signup = () => {
  const paperStyle = {
    padding: 30,
    height: '70vh',
    width: 400,
    margin: '20px auto',
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');
  const [rePass, setRePass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, pass, rePass);
    setName('');
    setEmail('');
    setPhone('');
    setPass('');
    setRePass('');
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
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                fullWidth
                type="email"
                label="Email"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                label="Phone Number"
                placeholder="Enter your phone number"
                name="phoneNumber"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <TextField
                fullWidth
                type="password"
                label="Password"
                placeholder="Enter your password"
                name="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <TextField
                fullWidth
                type="password"
                label="Confirm Password"
                placeholder="Enter your confirm password"
                name="confirmPassword"
                value={rePass}
                onChange={(e) => setRePass(e.target.value)}
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
