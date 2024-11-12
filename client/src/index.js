import React from 'react';
import ReactDOM from 'react-dom/client';
import ToDoApp from './todoWebApp';
import "./static/styles/components.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
const todoContext = React.createContext("test text");

root.render(
  <todoContext.Provider value={{userToken: null}}>
    <ToDoApp></ToDoApp>
  </todoContext.Provider>
);


export default todoContext;