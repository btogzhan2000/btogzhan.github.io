import React from 'react';
import {
  useTheme,
  Grid,
  Link,
  Card,
  CardContent,
  Typography,
} from '@mui/material';

const RESEARCH_ITEMS = [
  {
    text: 'Togzhan Barakbayeva and M. Fatih Demirci "Fully automatic CNN design with inception blocks", Proc. SPIE 11878, Thirteenth International Conference on Digital Image Processing (ICDIP 2021), 118780Y (30 June 2021)',
    link: 'https://doi.org/10.1117/12.2601117',
  },
  {
    text: 'Togzhan Barakbayeva and M. Fatih Demirci "Fully Automatic CNN Design with Inception and ResNet Blocks", Neural Computing and Applications (NCAA). To Be Published',
    link: '-',
  },
];

function Research() {
  const theme = useTheme();
  return (
    <Grid
      container
      spacing={2}
      id="research"
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
          Research
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
        {RESEARCH_ITEMS.map(({ text, link }, index) => (
          <Card
            key={index}
            sx={{
              background:
                'linear-gradient(180deg, rgba(222, 172, 245, 0.265208) 0%, rgba(152, 84, 203, 0.3648) 0.01%, rgba(222, 172, 245, 0.38) 47.4%, rgba(222, 172, 245, 0.302895) 61.98%, rgba(222, 172, 245, 0.1064) 99.14%)',
              width: '100%',
              borderRadius: 4,
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontWeight: '400',
                  fontSize: '20px',
                  lineHeight: '25px',
                  fontFamily: 'Outfit',
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '18px',
                    lineHeight: '20px',
                  },
                }}
              >
                {text}
                {link?.length && <Link href={link}> [link] </Link>}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
}

export default Research;
