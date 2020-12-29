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

function NominatedMovies({ nominatedMovies, handleRemove }) {
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
        {nominatedMovies.length > 0 ? (
          <Grid container spacing={2}>
            {nominatedMovies.map(movie => (
              <Grid item md key={movie.imdbID}>
                <MovieCard
                  handleRemove={handleRemove}
                  imdbID={movie.imdbID}
                  title={movie.title}
                  year={movie.year}
                  poster={movie.poster}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography
            variant='h4'
            align='center'
            color='textSecondary'
            component='p'
          >
            You Haven't Nominated Any Movies Yet
          </Typography>
        )}
      </div>
    </>
  );
}

export default NominatedMovies;
