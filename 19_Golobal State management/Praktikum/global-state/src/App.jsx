// index.js atau App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CreateProduct from './CreateProduct';

function App() {
  return (
    <Provider store={store}>
      <CreateProduct />
    </Provider>
  );
}

export default App;
