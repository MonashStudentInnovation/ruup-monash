import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import 'typeface-roboto'
import Blue from 'material-ui/colors/blue'
import reducers from './reducers';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const theme = createMuiTheme({
  palette: {
    primary: Blue,
  }
});
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Provider>,
document.getElementById('root'));

registerServiceWorker();
