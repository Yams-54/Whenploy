import React, { useState } from 'react';
import ReactDOM, {render} from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';




render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
