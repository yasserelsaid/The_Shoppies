import React from 'react';
import MovieCard from '../components/MovieCard';
import MovieCardPlaceholder from '../components/MovieCardPlaceholder';
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
  noNominations: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '350px',
  },
};
const useStyles = makeStyles(styles);

function NominatedMovies({ nominatedMovies, handleRemove }) {
  const numberOfPlaceholders = 5 - nominatedMovies.length;
  const placeholders = new Array(numberOfPlaceholders).fill(0);
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
          <Grid container justify='center' spacing={2}>
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
            {placeholders.map((p, i) => (
              <Grid item md key={i}>
                <MovieCardPlaceholder />
              </Grid>
            ))}
          </Grid>
        ) : (
          <div className={classes.noNominations}>
            <Typography
              variant='h4'
              align='center'
              color='textSecondary'
              component='p'
            >
              You Haven't Nominated Any Movies Yet
            </Typography>
          </div>
        )}
      </div>
    </>
  );
}

export default NominatedMovies;
