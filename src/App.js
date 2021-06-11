import logo from './logo.svg';
import './App.css';
import { Container, createMuiTheme, Grid, makeStyles, ThemeProvider } from '@material-ui/core';
import Header from './Header'
import FeaturedPost from './FeaturedPost'
import Sidebar from './Sidebar'
import Main from './Main'
import { dosts, sidebar } from './data/Data';
import Postcard from './data/Postcard'
import React from 'react';
import Footer from './Footer';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },

}))


function App() {
  const classes = useStyles();


  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (<>
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost />

        <br />
        <Grid container spacing={2} >

          {
            dosts.map((posta) => (
              <Postcard key={posta.title} posts={posta} />
            ))
          }

        </Grid>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Main title='fROM wONDERLAND' />


          <Sidebar title={sidebar.title} description={sidebar.description} archives={sidebar.archives} social={sidebar.social} />

          {/* {
            sidebar.map((side) => (
              <Sidebar title={sidebar.title} description={sidebar.description} archives={[sidebar.archives]} social={[sidebar.social]} />
            ))


          } */}
        </Grid>



      </Container>
      <Footer title='footer' description='a long and interesting story' />
    </ThemeProvider>
  </>
  );
}

export default App;
