import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          About Kobe:
        </Typography>
        <Typography component="p">
        [Verse 1]
        <br />
        I’m tearing up
        <br />
        Across your face
        <br />
        Move dust through the light
        <br />
        To fide your name
        <br />
        It's something fane
        <br />
        This is not a place
        <br />
        Not yet awake
        <br />
        I'm raised of make
        <br />

        [Chorus]
        <br />
        Still alive, who you love
        <br />
        Still alive, who you love
        <br />
        Still alive, who you love
        <br />

        [Verse 2]
        <br />
        In a mother, out a moth
        <br />
        Furling forests for the soft
        <br />
        Gotta know been lead aloft
        <br />
        So I'm ridding all your stories
        <br />
        What I know, what it is, it's pouring; wire it up
        <br />
        You're breaking your ground
        </Typography>
      </Paper>
    </div>
  );
}
