import React from 'react'

import { Grid, Link, Paper, } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { sidebar } from './data/Data'

const useStyles = makeStyles({
  sidebarAboutBox: {
    padding: '30',

  },
  sidebarSection: {
    marginTop: '100',

  },

})
const Sidebar = (props) => {

  // const theme = useTheme();
  const classes = useStyles()
  const { archives, description, title, social } = props;

  return (
    <Grid item xs={12} md={6} >
      <Paper elevation={3} className={classes.sidebarAboutBox}>
        <Typography variant='h6' gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant='h6' gutterBottom className={classes.sidebarSection}> Archive Gallery</Typography>
      {
        archives.map((archi) => (
          <Link display='block' variant='body1' href={archi.url} key={archi.title}>
            {archi.title}
          </Link>
        ))
      }

      <Typography variant='h6' gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>

      {
        social.map((antisocial) => (

          <Link display='inline' variant='overline' href='#' key={antisocial.name} icon={antisocial.icon}>
            <Grid container direction='row' spacing={1} alignItems='center'>
              <Grid item>
                <antisocial.icon />
              </Grid>
              <Grid item>{antisocial.name}</Grid>
            </Grid>

          </Link>
        ))
      }

    </Grid>
  );
}

export default Sidebar;
