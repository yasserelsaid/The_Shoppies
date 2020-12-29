import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Header from '../layout-components/Header';
import Footer from '../layout-components/Footer';
import NominatedMovies from '../pages-sections/NominatedMovies';

export default function Index() {
  const [nominatedMovies, setNominatedMovies] = useState([]);

  const handleNominate = (title, year, poster, imdbID) => {
    setNominatedMovies(prevState => {
      return [...prevState, { title, year, poster, imdbID }];
    });
  };

  const handleRemove = imdbID => {
    setNominatedMovies(prevState =>
      prevState.filter(movie => movie.imdbID !== imdbID)
    );
  };
  return (
    <>
      <Header
        handleNominate={handleNominate}
        maxedOut={nominatedMovies.length >= 5}
      />
      <Container maxWidth='lg'>
        <Box my={4}>
          <Typography variant='h4' component='h1' gutterBottom align='center'>
            Nominate Your Favourite Movies
          </Typography>
          <ProTip />
          <NominatedMovies
            nominatedMovies={nominatedMovies}
            handleRemove={handleRemove}
          />
          {/* <Link href='/about' color='secondary'>
          Go to the about page
        </Link> */}
          {/* <ProTip /> */}
        </Box>
      </Container>
      <Footer />
    </>
  );
}
