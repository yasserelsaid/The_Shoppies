import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const styles = {
  movieRow: {
    display: 'flex',
    borderBottom: '1px solid #666',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgAndName: {
    display: 'flex',
  },
  imgContainer: {
    width: '100px',
    maxHeight: '120px',
    overflow: 'hidden',
    display: 'block',
    display: 'inline-block',
    '& img': {
      width: '100%',
      borderRadius: '5px',
    },
    marginBottom: '5px',
  },
  nameAndYear: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#eee',
    fontSize: '16px',
    marginLeft: '10px',
  },
  movieName: {
    fontSize: '18px',
    color: '#000000',
  },
};
const useStyles = makeStyles(styles);

function MovieCard() {
  const classes = useStyles();

  return (
    <div className={classes.movieRow}>
      <div className={classes.imgAndName}>
        <div className={classes.imgContainer}>
          <Image
            src='https://images-na.ssl-images-amazon.com/images/I/814V1XJaoAL._SL1500_.jpg'
            alt='Mission Impossible Poster'
            width={290}
            height={375}
            className={classes.img}
          />
        </div>
        <span className={classes.nameAndYear}>
          <div>Mission Impossible</div>
          <div>2012</div>
        </span>
      </div>
      <div>
        <Button fullWidth size='small' variant='contained' color='secondary'>
          Nominate
        </Button>
      </div>
    </div>
  );
}

export default MovieCard;
