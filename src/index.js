import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import 'typeface-roboto'
import Blue from 'material-ui/colors/blue'
const theme = createMuiTheme({
  palette: {
    primary: Blue,
  }
});
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>, 
document.getElementById('root'));

registerServiceWorker();
