import React from 'react';
import Image from 'next/image';
import ImagePlaceholder from './ImagePlaceholder';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const styles = {
  container: {
    display: 'inline-block',
    height: '100%',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgAndTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
  img: {
    borderRadius: '6px ',
    boxShadow:
      '0 5px 15px -8px rgba(0, 0, 0, 0.24) 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    margin: '20px',
  },
  btnContainer: {
    marginTop: '5px',
    width: '100%',
  },
};
const useStyles = makeStyles(styles);

function MovieCard({ title, year, poster, imdbID, handleRemove }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.imgAndTitle}>
          {poster && poster !== 'N/A' ? (
            <Image
              className={classes.img}
              width={290}
              height={375}
              src={poster}
              alt='Mission Impossible Poster'
            />
          ) : (
            <ImagePlaceholder />
          )}
          <p>
            {title} ({year})
          </p>
        </div>
        <div className={classes.btnContainer}>
          <Button
            onClick={() => handleRemove(imdbID)}
            fullWidth
            size='small'
            variant='outlined'
            color='secondary'
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
