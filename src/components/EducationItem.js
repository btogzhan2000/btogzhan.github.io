import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, Typography, useTheme } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  container: {
    background:
      'radial-gradient(50% 50% at 50% 50%, rgba(202, 198, 253, 0.88) 0%, rgba(202, 198, 253, 0) 100%);',
    borderRadius: 20,
  },
  content: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 8,
  },
  title: {
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '30px',
    fontFamily: 'Outfit',
  },
  description: {
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '20px',
    fontFamily: 'Outfit',
  },
  logo: {
    width: 64,
    height: 'auto',
    marginRight: 16,
  },
}));

function EducationItem(props) {
  const theme = useTheme();
  const classes = useStyles();
  const { name, date, degree, logo } = props;

  return (
    <Card
      sx={{
        background:
          'radial-gradient(50% 50% at 50% 50%, rgba(202, 198, 253, 0.88) 0%, rgba(202, 198, 253, 0) 100%);',
        borderRadius: 4,
        width: '100%',
      }}
    >
      <CardContent className={classes.content}>
        <img src={logo} alt={name} className={classes.logo} />
        <div className={classes.info}>
          <Typography
            sx={{
              fontWeight: '600',
              fontSize: '24px',
              lineHeight: '30px',
              fontFamily: 'Outfit',
              [theme.breakpoints.down('sm')]: {
                fontSize: '18px',
                lineHeight: '20px',
              },
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontWeight: '400',
              fontSize: '16px',
              lineHeight: '20px',
              fontFamily: 'Outfit',
              [theme.breakpoints.down('sm')]: {
                fontSize: '14px',
                lineHeight: '18px',
              },
            }}
          >
            {date}
          </Typography>
          <Typography
            sx={{
              fontWeight: '400',
              fontSize: '16px',
              lineHeight: '20px',
              fontFamily: 'Outfit',
              [theme.breakpoints.down('sm')]: {
                fontSize: '14px',
                lineHeight: '18px',
              },
            }}
          >
            {degree}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default EducationItem;
