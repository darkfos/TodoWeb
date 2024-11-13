import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import RegPage from "./pages/regPage";
import LoginPage from "./pages/loginPage";
import ProfilePage from "./pages/profilePage";
import createTaskPage from "./pages/task/createTaskPage";
import updateTaskPage from "./pages/task/updateTaskPage";
import TasksPage from "./pages/tasksPage";
import ModalWindow from "./components/modal/modalOtherPath";
import MainPage from "./pages/mainPage";
import React, {useContext, useState} from "react";
import { context } from "./context";


const ToDoApp = () => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [refreshToken, setRefreshToken] = useState(localStorage.getItem("refreshToken"));
    const cont = useContext(context);

    return (
        <context.Provider value={{token, setToken, refreshToken, setRefreshToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />}></Route>
                    <Route path="/registration" element={<RegPage></RegPage>}></Route>
                    <Route path="/main" element={token ? <MainPage /> : <Navigate to="/" />}></Route>
                    <Route path="/profile" element={token ? <ProfilePage /> : <Navigate to="/" />}></Route>
                    <Route path="/tasks" element={token ? <TasksPage />: <Navigate to="/" />}></Route>
                    <Route path="/create_task" element={token ? <createTaskPage /> : <Navigate to="/" />}></Route>
                    <Route path="/update_task" element={token ? <updateTaskPage /> : <Navigate to="/" />}></Route>
                    <Route path="/*" element={<ModalWindow></ModalWindow>}></Route>
                </Routes> 
            </BrowserRouter>
        </context.Provider>
    )
}


export default ToDoApp;