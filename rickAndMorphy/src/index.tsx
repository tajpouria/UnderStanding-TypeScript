import React from 'react';
import ReactDOM from 'react-dom';
import PartContextProvider from './context/partContext';

import App from './App';

ReactDOM.render(
  <PartContextProvider>
    <App />
  </PartContextProvider>,
  document.getElementById('root')
);
