import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BlockIcon from '@material-ui/icons/Block';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    width: '100%',
    borderRadius: '5px',
    padding: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

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
        <BlockIcon fontSize='small' /> Image unavailable
      </Typography>
    </div>
  );
}

export default MovieCardPlaceholder;
