import { Button, makeStyles, responsiveFontSizes } from '@material-ui/core'
import { Card, CardActions, CardContent, Typography } from '@material-ui/core'
import React from 'react'



const useStyles = makeStyles({
  title: {
    fontSizeAdjust: "20",
    fontFamily: "Montserrat",
  }
  , cover: {
    backgroundImage: `url(https://source.unsplash.com/1920x800/?artic)`,
    backgroundPosition: "center",
    padding: "35px 25px"
  },
  btn: {
    color: "red"
  }
})

const FeaturedPost = () => {

  const classes = useStyles();
  return (
    <div>
      <Card className={classes.cover}>
        <CardContent className={classes.textContainer}>
          <Typography className={classes.title} gutterBottom>
            Title of a long post
          </Typography>
          <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem maiores eligendi aspernatur adipisci quibusdam at quidem, animi esse! Asperiores deserunt provident odit cumque adipisci consectetur nam ea eaque minima similique.</Typography>
        </CardContent>

        <CardActions>
          <Button variant="primary" className={classes.btn}>
            Read a Lot more
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default FeaturedPost;
