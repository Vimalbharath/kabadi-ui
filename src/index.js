import React from 'react';
import ReactDom from 'react-dom/client';
//import { createRoot } from 'react-dom/client';
// const container = document.getElementById('root');
// const root = ReactDom.createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App />);


function App(){
  console.log('vimal');
 return (<h4>Hello Vimal</h4>); 
}

ReactDom.createRoot( document.getElementById('root')).render(<App/>);
