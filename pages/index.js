import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import NominatedMovies from '../pages-sections/NominatedMovies';

export default function Index() {
  return (
    <Container maxWidth='lg'>
      <Box my={4}>
        <Typography variant='h4' component='h1' gutterBottom align='center'>
          Nominate Your Favorite Movies
        </Typography>
        <ProTip />
        <NominatedMovies />
        {/* <Link href='/about' color='secondary'>
          Go to the about page
        </Link> */}
        {/* <ProTip /> */}
      </Box>
    </Container>
  );
}
