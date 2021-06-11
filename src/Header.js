import { IconButton, makeStyles } from '@material-ui/core'
import { Toolbar, Divider } from '@material-ui/core'
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { Typography } from '@material-ui/core';
import { blue, } from '@material-ui/core/colors';
import { AddAlertSharpIcon, } from '@material-ui/icons/AddAlertSharp';
import { AccountCircleSharp } from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';
import Sidedrawer from './Sidedrawer'


const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  tagLine: {
    fontSize: 20,
    textTransform: "uppercase",
    justifyContent: "center",
    fontFamily: "Montserrat",
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <Toolbar>
        <Sidedrawer>
          <IconButton>
            <MenuIcon style={{ color: blue[500] }} />
          </IconButton>
        </Sidedrawer>
        <Typography variant="h6" className={classes.title}>Blogging Website</Typography>

        <IconButton>
          {/* <Badge badgeContent={4} color="primary">
            <AddAlertSharpIcon />
          </Badge> */}


        </IconButton>


        <IconButton>
          <AccountCircleSharp style={{ color: blue[500] }} />
        </IconButton>

      </Toolbar>

      <Divider />

      <Toolbar className={classes.tagline}>Expressing your emptions theough tour words</Toolbar>
    </div>
  )
}

export default Header;
