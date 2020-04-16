import React from 'react';
import './App.scss';
import Landing from "./Pages/Landing"
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import charactersReducer from "./Store/Reducers/charactersReducer"
import FiletrsReducer from "./Store/Reducers/SearchReducers"

const rootReducer = combineReducers({

  chars:charactersReducer,
  filters:FiletrsReducer

});
var store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
    <div className="App">
       <Landing/>
    </div>
    </Provider>
  );
}

export default App;
