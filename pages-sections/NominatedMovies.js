import React from 'react';
import MovieCard from '../components/MovieCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    marginTop: '100px',
    backgroundColor: '#222',
    borderRadius: '10px',
    padding: '20px',
  },
};
const useStyles = makeStyles(styles);

function NominatedMovies() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        <Grid item md>
          <MovieCard />
        </Grid>
        <Grid item md>
          <MovieCard />
        </Grid>
        <Grid item md>
          <MovieCard />
        </Grid>
        <Grid item md>
          <MovieCard />
        </Grid>
        <Grid item md>
          <MovieCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default NominatedMovies;
