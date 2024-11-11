import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from './pages/loginPage';
import RegPage from './pages/regPage';
import MainPage from './pages/mainPage';
import ProfilePage from './pages/profilePage';
import TasksPage from './pages/tasksPage';
import "./static/styles/components.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}>
        </Route>
        <Route path="/registration" element={<RegPage></RegPage>}></Route>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/tasks" element={<TasksPage />}></Route>
      </Routes> 
    </BrowserRouter>
);