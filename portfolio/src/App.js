import React, {useState} from "react";
import {BrowserRouter, Router, Switch, Route, Redirect as RouterLink } from 'react-router-dom';
import Home from "./pages/home.page";
import About from "./pages/about";
import Contact from "./pages/contact";
import NavBar from './components/navbar/nav';
import {Paper} from '@material-ui/core';
import {ThemeProvider, createMuiTheme} from '@material-ui/core';
import Header from './components/header-home/header-home';
import Work from './components/work/work.component';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Footer from './components/footer/footer.component';

const useStyles = makeStyles((theme) => ({
  toggleContainer: {
    margin: theme.spacing(2, 0),
  },
}));
function App() {
  const [darkMode, setDarkMode]=useState(false);
  const theme= createMuiTheme({
    palette:{
      type:darkMode ? 'dark': 'light',
    },
  });
  return (
  
    <div className="App">
      <ThemeProvider theme={theme}>
      <Paper>
      <NavBar></NavBar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        <Footer />
     </Paper>
     </ThemeProvider>
    </div>
    
  );
}

export default App;
