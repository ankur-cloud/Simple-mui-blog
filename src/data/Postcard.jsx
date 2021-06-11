import { CardActionArea, CardActions, CardContent, Hidden, makeStyles } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { CardMedia } from '@material-ui/core';
import { Card, Grid } from '@material-ui/core'
import React from 'react';
import App from '../App'


const useStyles = makeStyles({

    card:
    {
        display: "flex",
    },
    cardDetails: {
        flex: 1,

    },
    cardMedia: {
        width: 200,

    }


})



const Postcard = ({ posts }) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component='a' href=" #">
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>

                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {posts.title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {posts.date}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {posts.description}
                            </Typography>
                            <Typography variant="subtitle1" style={{ color: "skyblue" }}>
                                Continue Reading/.....
                        </Typography>
                        </CardContent>

                    </div>


                    <CardMedia className={classes.cardMedia} image={posts.image} title={posts.imageText}></CardMedia>


                </Card>




            </CardActionArea>

        </Grid>
    )
}

export default Postcard;
