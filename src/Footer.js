import React from 'react'
import { IconButton, makeStyles } from '@material-ui/core'
import { Container, Link } from '@material-ui/core';
import { Title } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(4),
    padding: theme.spacing(6, 0)
  },

}));

const Footer = ({ title, description }) => {

  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth='lg'>
        <Typography variant='subtitle1' align='center' gutterBottom>
          {title}


        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
          {description}


        </Typography>

        <Typography variant='body2' align='center' color='textSecondary' component='p'>
          Copyright
          <Link color='inherit' href='https://duckduckgo.com'>
            `My Website  `
          </Link>
          <br />
          {new Date().getFullYear()}


        </Typography>
      </Container>
    </footer>
  )
}

export default Footer;
