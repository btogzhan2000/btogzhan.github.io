import * as React from 'react';
import {
  useTheme,
  Card,
  CardContent,
  Avatar,
  Typography,
  Link,
} from '@mui/material';

function Profile() {
  const theme = useTheme();

  return (
    <div
      id="profile"
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 64,
      }}
    >
      <Card
        sx={{
          background:
            'linear-gradient(180deg, rgba(222, 172, 245, 0.265208) 0%, rgba(152, 84, 203, 0.3648) 0.01%, rgba(222, 172, 245, 0.38) 47.4%, rgba(222, 172, 245, 0.302895) 61.98%, rgba(222, 172, 245, 0.1064) 99.14%)',
          maxWidth: 555,
          width: '100%',
          borderRadius: 16,
        }}
      >
        <CardContent
          style={{
            padding: '16px 54px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 16,
            position: 'relative',
          }}
        >
          <Avatar
            alt="profile-photo"
            src="photo.JPG"
            sx={{
              width: 149,
              height: 149,
              [theme.breakpoints.down('sm')]: {
                width: 100,
                height: 100,
              },
            }}
          />

          <Typography
            sx={{
              fontWeight: '600',
              fontSize: '20px',
              lineHeight: '25px',
              fontFamily: 'Outfit',
              textAlign: 'center',
              [theme.breakpoints.down('sm')]: {
                fontSize: '18px',
                lineHeight: '20px',
              },
            }}
          >
            Togzhan Barakbayeva
          </Typography>

          <Typography
            sx={{
              fontWeight: '400',
              fontSize: '20px',
              lineHeight: '25px',
              fontFamily: 'Outfit',
              textAlign: 'center',
              [theme.breakpoints.down('sm')]: {
                fontSize: '16px',
                lineHeight: '18px',
              },
            }}
          >
            I’m a first-year PhD student at Hong Kong University of Science and
            Technology and an HKPFS awardee. I work under the supervision of Prof. <a href="https://www.goharshady.com/home">Amir Goharshady</a>.
          </Typography>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              gap: 32,
            }}
          >
            <Link
              href="https://github.com/btogzhan2000"
              target="_blank"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src="icons8-github.svg" alt="github" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/togzhan-barakbayeva/"
              target="_blank"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src="icons8-linkedin-circled.svg"
                alt="linkedin"
                style={{ width: 50 }}
              />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Profile;
