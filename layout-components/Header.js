import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import axios from 'axios';
import Popper from '../components/Popper';
import Image from 'next/image';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    border: '1px solid #888',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },

  imgContainer: {
    padding: '5px 12px',
  },
  appBar: {
    backgroundColor: theme.palette.primary.light,
  },
  invertColorsIconContainer: {
    width: '60px',
    padding: '5px 10px',
  },
}));

export default function Header({
  handleNominate,
  nominatedIds,
  setIsDarkTheme,
}) {
  const classes = useStyles();
  const [searchPopperOpen, setSearchPopperOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  const fetchMovies = async name => {
    try {
      setLoading(true);
      setError('');
      const queryParameter = {
        apiKey: process.env.NEXT_PUBLIC_OMDB_API_KEY,
        s: name,
        type: 'movie',
      };
      const url = 'https://www.omdbapi.com/';
      const { data } = await axios.get(url, {
        params: queryParameter,
      });
      if (data.Response !== 'True' || data.Error) {
        setError(data.Error);
        setLoading(false);
        return;
      }
      setMovies(data.Search);
      setError('');
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = e => {
    const name = e.target.value;
    setAnchorEl(e.currentTarget);
    if (Boolean(name)) {
      fetchMovies(name);
    } else {
      setMovies([]);
    }
    setSearchPopperOpen(Boolean(name));
  };

  return (
    <div className={classes.root}>
      <Popper
        setSearchPopperOpen={setSearchPopperOpen}
        handleNominate={handleNominate}
        nominatedIds={nominatedIds}
        movies={movies}
        searchPopperOpen={searchPopperOpen}
        loading={loading}
        error={error}
        anchorEl={anchorEl}
      />
      <AppBar className={classes.appBar} position='static'>
        <Toolbar>
          <div className={classes.imgContainer}>
            <Image
              width={60}
              height={80}
              src='/images/shoppies.png'
              alt='Shoppies Logo'
            />
          </div>
          <Typography className={classes.title} variant='h6' noWrap>
            The Shoppies
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search Movies…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search', onFocus: handleChange }}
              onChange={handleChange}
            />
          </div>
          <IconButton
            onClick={() => setIsDarkTheme(prevState => !prevState)}
            aria-label='Toggle Theme'
          >
            <InvertColorsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
