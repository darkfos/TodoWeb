import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from './pages/loginPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}>
        </Route>
        <Route path="/registration"></Route>
        <Route path="/main"></Route>
        <Route path="/profile"></Route>
        <Route path="/tasks"></Route>
      </Routes> 
    </BrowserRouter>
);