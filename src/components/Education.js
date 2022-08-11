import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Grid, useTheme } from '@mui/material';
import EducationItem from './EducationItem';

const EDUCATION_ITEMS = [
  {
    name: 'Nazarbayev University',
    date: 'Aug 2018 - May 2022, Nur-Sultan, Kazakhstan',
    degree: 'BS in Computer Science',
    logo: 'Nu.png',
  },
  {
    name: 'Hong Kong University of Science and Technology',
    date: 'Aug 2022 - May 2026, Hong Kong',
    degree: 'PhD in Computer Science and Engineering',
    logo: 'UST.svg.png',
  },
];

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function Profile() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Grid
      container
      spacing={2}
      id="education"
      sx={{
        marginBottom: 8,
        [theme.breakpoints.down('md')]: {
          marginBottom: 4.5,
        },
        [theme.breakpoints.down('sm')]: {
          marginBottom: 3,
        },
      }}
    >
      <Grid item xs={12} sm={12} md={6} className={classes.gridItem}>
        <Typography
          sx={{
            fontWeight: '600',
            fontSize: '48px',
            lineHeight: '60px',
            fontFamily: 'Outfit',
            [theme.breakpoints.down('md')]: {
              fontSize: '36px',
              lineHeight: '48px',
            },
            [theme.breakpoints.down('sm')]: {
              fontSize: '24px',
              lineHeight: '36px',
            },
          }}
        >
          Education
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: 'max-content',
          gap: 6,
          [theme.breakpoints.down('md')]: {
            gap: 2,
          },
        }}
      >
        {EDUCATION_ITEMS.map(({ name, date, degree, logo }) => (
          <EducationItem
            key={name}
            name={name}
            date={date}
            degree={degree}
            logo={logo}
          />
        ))}
      </Grid>
    </Grid>
  );
}

export default Profile;
