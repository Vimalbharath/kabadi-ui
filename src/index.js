import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
//import { createRoot } from 'react-dom/client';
// const container = document.getElementById('root');
// const root = ReactDom.createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App />);

//ReactDom.createRoot( document.getElementById('root')).render(<App/>);

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App />
    
  </React.StrictMode>
);
