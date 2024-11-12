import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from './pages/loginPage';
import RegPage from './pages/regPage';
import MainPage from './pages/mainPage';
import ProfilePage from './pages/profilePage';
import TasksPage from './pages/tasksPage';
import createTaskPage from "./pages/task/createTaskPage";
import updateTaskPage from "./pages/task/updateTaskPage";
import ModalWindow from './components/modal/modalOtherPath';
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
        <Route path="/create_task" element={<createTaskPage />}></Route>
        <Route path="/update_task" element={<updateTaskPage />}></Route>
        <Route path="/*" element={<ModalWindow></ModalWindow>}></Route>
      </Routes> 
    </BrowserRouter>
);