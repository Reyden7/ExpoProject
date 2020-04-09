import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import { Home } from './components';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <Stack key="root">
          <Scene key = "home" component={Home} title="Home" />
          <Scene key = "chat" component={Chat} title="Chat" />
        </Stack>
      </Router>
      </Provider>
      
     
      
       
    );  
  }
}

