import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const styles = {
  imgAndTitle: {
    display: 'flex',
    marginBottom: '20px',
    alignItems: 'center',
  },
  titleAndYear: {
    width: '100%',
    marginLeft: '10px',
  },
};
const useStyles = makeStyles(styles);

export default function MovieRowSkeleton() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.imgAndTitle}>
        <Skeleton variant='rect' width={100} height={120} />
        <div className={classes.titleAndYear}>
          <Skeleton variant='text' width='50%' />
          <Skeleton variant='text' width='20%' />
        </div>
      </div>

      {/* <Skeleton variant='rect' width={100} height={20} /> */}
    </>
  );
}
