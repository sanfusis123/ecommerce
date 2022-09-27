
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="h6" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/sanfusis123">
        SAN.ME
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  
    padding: theme.spacing(3, 2),
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
     <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">We are Shiping All over the world</Typography>
          <Copyright />
        </Container>
      </footer>
  );
}