import { Divider } from '@material-ui/core';
import { Grid, Typography } from '@material-ui/core';
import React from 'react'
import { posts } from './data/Data'
import Markdown from 'markdown-to-jsx'



const Main = ({ title }) => {
  return (<div>
    <Grid item xs={12} md={8}>
      <Typography variant='h6' gutterBottom >
        {title}

      </Typography>
      <Divider />
      {
        posts.map((menu) => (
          <Markdown key={menu.body}>
            {menu.body}
          </Markdown>
        ))

      }
    </Grid>
  </div>

  )
}

export default Main;