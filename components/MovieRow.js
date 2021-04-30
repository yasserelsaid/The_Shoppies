import React, { useState } from 'react';
import Image from 'next/image';
import ImagePlaceholder from './ImagePlaceholder';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  movieRow: {
    display: 'flex',
    borderBottom: '1px solid #666',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgAndTitle: {
    display: 'flex',
  },
  imgContainer: {
    width: '100px',
    maxHeight: '120px',
    overflow: 'hidden',
    display: 'block',
    display: 'inline-block',
    '& img': {
      // width: '100%',
      borderRadius: '5px',
    },
    margin: '5px 0',
  },
  nameAndYear: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: '16px',
    marginLeft: '10px',
  },
}));

function MovieRow({
  title,
  year,
  poster,
  imdbID,
  handleNominate,
  nominatedIds,
}) {
  const classes = useStyles();
  const maxedOut = nominatedIds.length >= 5;
  const [isNominated, setIsNominated] = useState(nominatedIds.includes(imdbID));
  const handleClick = () => {
    if (isNominated || maxedOut) return;
    handleNominate(title, year, poster, imdbID);
    setIsNominated(true);
  };

  return (
    <div className={classes.movieRow}>
      <div className={classes.imgAndTitle}>
        <div className={classes.imgContainer}>
          {poster && poster !== 'N/A' ? (
            <Image
              src={poster}
              alt={`${title} Poster`}
              width={300}
              height={500}
              className={classes.img}
            />
          ) : (
            <ImagePlaceholder />
          )}
        </div>
        <span className={classes.nameAndYear}>
          <div>{title}</div>
          <div>{year}</div>
        </span>
      </div>
      <div>
        <Button
          onClick={handleClick}
          fullWidth
          size='small'
          variant='contained'
          color='secondary'
          disabled={isNominated || maxedOut}
        >
          Nominate
        </Button>
      </div>
    </div>
  );
}

export default MovieRow;
