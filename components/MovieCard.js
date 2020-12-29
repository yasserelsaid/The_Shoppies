import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';

const styles = {
  img: {
    borderRadius: '6px ',
    boxShadow:
      '0 5px 15px -8px rgba(0, 0, 0, 0.24) 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
};
const useStyles = makeStyles(styles);

function MovieCard() {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <Image
        className={classes.img}
        width={290}
        height={375}
        src='https://images-na.ssl-images-amazon.com/images/I/814V1XJaoAL._SL1500_.jpg'
        alt='Mission Impossible Poster'
      />
    </div>
  );
}

export default MovieCard;
