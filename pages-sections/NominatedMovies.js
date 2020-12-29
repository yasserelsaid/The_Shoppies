import React from 'react';
import MovieCard from '../components/MovieCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  container: {
    marginTop: '50px',
    backgroundColor: '#222',
    borderRadius: '10px',
    padding: '20px',
  },
};
const useStyles = makeStyles(styles);

function NominatedMovies() {
  const classes = useStyles();
  return (
    <>
      <Typography
        variant='h4'
        align='center'
        color='textSecondary'
        component='p'
      >
        Your Nominations
      </Typography>

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
    </>
  );
}

export default NominatedMovies;
