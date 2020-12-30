import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  container: {
    height: '100%',
    width: '100%',
    borderRadius: '5px',
    backgroundColor: '#333',
    padding: '40px',
    minHeight: '350px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
const useStyles = makeStyles(styles);

function MovieCardPlaceholder() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography
        variant='subtitle1'
        align='center'
        color='textSecondary'
        component='p'
      >
        Nominate a Movie
      </Typography>
    </div>
  );
}

export default MovieCardPlaceholder;
