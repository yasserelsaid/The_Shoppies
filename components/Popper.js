import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MovieRow from '../components/MovieRow';
import MovieRowSkeleton from '../components/MovieRowSkeleton';
import onClickOutside from 'react-onclickoutside';

const useStyles = makeStyles(theme => ({
  popperContent: {
    marginTop: '10px',
    padding: '10px',
    width: '350px',
    maxHeight: '500px',
    overflow: 'auto',
    boxShadow: 'rgba(0, 0, 0, 0.44) 0px 3px 8px',
    backgroundColor: theme.palette.primary.light,
  },
  '@media (max-width: 850px)': {
    popperContent: {
      maxHeight: '280px',
    },
  },
}));
function MoviePopper({
  movies,
  searchPopperOpen,
  setSearchPopperOpen,
  loading,
  error,
  anchorEl,
  nominatedIds,
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
                <>
                  <MovieRowSkeleton />
                  <MovieRowSkeleton />
                  <MovieRowSkeleton />
                </>
              ) : movies.length > 0 ? (
                movies.map(movie => (
                  <MovieRow
                    nominatedIds={nominatedIds}
                    handleNominate={handleNominate}
                    key={movie.imdbID + Math.random()}
                    imdbID={movie.imdbID}
                    title={movie.Title}
                    year={movie.Year}
                    poster={movie.Poster}
                  />
                ))
              ) : error ? (
                <h4>{error}</h4>
              ) : (
                <h4>Something Went Wrong</h4>
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
