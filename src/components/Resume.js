import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import { useTheme, Grid, Button, Typography, Link } from '@mui/material';

function Research() {
  const theme = useTheme();
  return (
    <Grid
      container
      spacing={2}
      id="resume"
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
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
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
          Resume / CV
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        sx={{
          [theme.breakpoints.down('md')]: {
            display: 'flex',
            justifyContent: 'center',
          },
        }}
      >
        <Button
          variant="contained"
          sx={{
            background:
              'linear-gradient(180deg, #DAD8FA 47.92%, #F3F2FF 100%);',
            borderRadius: '18px',
            color: 'black',
          }}
          endIcon={<DownloadIcon />}
        >
          <Link
            href="/CV_Togzhan_Barakbayeva.pdf"
            download
            sx={{
              fontWeight: '400',
              fontSize: '16px',
              lineHeight: '20px',
              fontFamily: 'Outfit',
              textDecoration: 'none',
              color: '#000',
              '&:hover': {
                color: '#000',
              },
              [theme.breakpoints.down('sm')]: {
                fontSize: '14px',
                lineHeight: '18px',
              },
            }}
          >
            Download
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
}

export default Research;
