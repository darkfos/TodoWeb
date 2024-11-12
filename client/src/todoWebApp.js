import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegPage from "./pages/regPage";
import LoginPage from "./pages/loginPage";
import ProfilePage from "./pages/profilePage";
import createTaskPage from "./pages/task/createTaskPage";
import updateTaskPage from "./pages/task/updateTaskPage";
import TasksPage from "./pages/tasksPage";
import ModalWindow from "./components/modal/modalOtherPath";
import MainPage from "./pages/mainPage";
import React, {useContext} from "react";
import todoContext from ".";


function ToDoApp() {

    const context = useContext(todoContext);
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />}></Route>
                <Route path="/registration" element={<RegPage></RegPage>}></Route>
                <Route path="/main" element={context.userToken ? <MainPage /> : <LoginPage />}></Route>
                <Route path="/profile" element={context.userToken ? <ProfilePage /> : <LoginPage />}></Route>
                <Route path="/tasks" element={context.userToken ? <TasksPage />: <LoginPage />}></Route>
                <Route path="/create_task" element={context.userToken ? <createTaskPage /> : <LoginPage />}></Route>
                <Route path="/update_task" element={context.userToken ? <updateTaskPage /> : <LoginPage />}></Route>
                <Route path="/*" element={<ModalWindow></ModalWindow>}></Route>
            </Routes> 
      </BrowserRouter>
    )
}


export default ToDoApp;