import React from 'react';
import { makeStyles } from '@mui/styles';

import Profile from './Profile';
import Education from './Education';
import Research from './Research';
import Resume from './Resume';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 46,
    padding: '48px 16px',
  },
}));

const Layout = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Profile />
      <Education />
      <Research />
      <Resume />
    </div>
  );
};

export default Layout;
