import { makeStyles, useTheme } from '@mui/styles';
import Link from 'next/link';
import { Container, AppBar, Toolbar, Grid, Avatar, Box, Typography, Paper, CardActionArea, CardMedia, CardContent } from '@mui/material';
import dynamic from 'next/dynamic';

export default function Testimonials() {
  const classes = useStyles()();

  const TestimonialsMap = dynamic(
    () => import('../TestimonialMap'), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  )

  return (
    <>
      <Box component='section' mt={8}>
        <Container maxWidth='lg'>
          <Typography variant='h3' component='h2'>Zadowoleni klienci o nas</Typography>
        </Container>
      </Box>
      <Box id='mapid' component='section' mt={8} className={classes.mapContainer}>
        <TestimonialsMap css={classes.mapContainer} />
      </Box>
    </>
  )
}

function useStyles() {
  return makeStyles(theme => ({
    map: {
      // height: '100%',
      minHeight: '400px'
    },
    mapContainer: {
      minHeight: '500px',
      width: '100%'
    }
  }));
};
