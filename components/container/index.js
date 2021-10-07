import React, { useState } from 'react';
import { Paper, Tabs, Tab, Box, Typography } from '@material-ui/core';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';

const Login = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle = {
    margin: '20px auto',
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 1 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  return (
    <>
      <Paper style={paperStyle}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Log In/Sign Up"
          centered
        >
          <Tab label="Log In" />
          <Tab label="Sign Up" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <LoginForm />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SignupForm />
        </TabPanel>
      </Paper>
    </>
  );
};

export default Login;
