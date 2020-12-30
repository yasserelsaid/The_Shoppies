import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import MuiAlert from '@material-ui/lab/Alert';

import Header from '../layout-components/Header';
import Footer from '../layout-components/Footer';
import NominatedMovies from '../pages-sections/NominatedMovies';
import Snackbar from '@material-ui/core/Snackbar';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}
export default function Index() {
  const [nominatedMovies, setNominatedMovies] = useState([]);
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('movies'));
    setNominatedMovies(savedMovies);
  }, []);

  useEffect(() => {
    setBannerOpen(nominatedMovies.length === 5);
    localStorage.setItem('movies', JSON.stringify(nominatedMovies));
  }, [nominatedMovies]);

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
        nominatedIds={nominatedMovies.map(movie => movie.imdbID)}
      />
      <Container maxWidth='lg'>
        <Box my={4}>
          <Typography variant='h4' component='h1' gutterBottom align='center'>
            Nominate Your Favourite Movies
          </Typography>
          <Box my={8}>
            {/* <ProTip /> */}
            <NominatedMovies
              nominatedMovies={nominatedMovies}
              handleRemove={handleRemove}
            />
          </Box>
        </Box>
      </Container>

      <Footer />
      <Snackbar
        open={bannerOpen}
        autoHideDuration={4000}
        onClose={() => setBannerOpen(false)}
      >
        <Alert onClose={() => setBannerOpen(false)} severity='success'>
          You Have Nominated 5 Movies!
        </Alert>
      </Snackbar>
    </>
  );
}
