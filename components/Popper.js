import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MovieRow from '../components/MovieRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import onClickOutside from 'react-onclickoutside';

const useStyles = makeStyles(theme => ({
  popperContent: {
    padding: '10px',
    width: '380px',
    maxHeight: '500px',
    overflow: 'auto',
  },
}));

function MoviePopper({
  movies,
  searchPopperOpen,
  setSearchPopperOpen,
  loading,
  error,
  anchorEl,
  maxedOut,
  handleNominate,
}) {
  const classes = useStyles();

  MoviePopper.handleClickOutside = () => setSearchPopperOpen(false);
  return (
    <Popper
      open={searchPopperOpen}
      anchorEl={anchorEl}
      placement='bottom-end'
      transition
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper>
            <div className={classes.popperContent}>
              {/* <Typography>The content of the Popper.</Typography> */}
              {loading ? (
                <CircularProgress />
              ) : movies.length > 0 ? (
                movies.map(movie => (
                  <MovieRow
                    maxedOut={maxedOut}
                    handleNominate={handleNominate}
                    key={movie.imdbID}
                    imdbID={movie.imdbID}
                    title={movie.Title}
                    year={movie.Year}
                    poster={movie.Poster}
                  />
                ))
              ) : (
                <p>No</p>
              )}
            </div>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => MoviePopper.handleClickOutside,
};

export default onClickOutside(MoviePopper, clickOutsideConfig);
