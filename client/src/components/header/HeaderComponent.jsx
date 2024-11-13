import "../../static/styles/components.css";
import LogoToDo from "../../static/image/logo.jpg";
import { useNavigate } from "react-router-dom";
import MessageImg from "../../static/image/mes.png";
import MessageModal from "../modal/messageModal";
import { useState } from "react";


function Header() {

    const navigator = useNavigate();
    const [message, setModalMessage] = useState(null);

    return <header className="headerTodo w-[90%] bg-todo-theme rounded-b-lg m-[auto]">
        {message? <MessageModal state={true} /> : null}
        <nav className="headerTodo__nav w-[100%] flex flex-row gap-20 text-white mt-10 justify-center font-medium items-center">
            <img src={LogoToDo} width="5%"></img>
            <a href="" onClick={(e) => {navigator("/main")}} className="transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-110 hover:text-amber-500 duration-500">Главная</a>
            <a href="" onClick={(e) => {navigator("/tasks")}} className="transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-110 hover:text-amber-500 duration-500">Задачи</a>
            <a href="" onClick={(e) => {navigator("/profile")}} className="transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-110 hover:text-amber-500 duration-500">Профиль</a>
            <img src={MessageImg} alt="уведомления" width="50px" className="transition ease-in-out p-2 delay-150 text-white bg-white rounded-3xl hover:-translate-y-1 hover:scale-110 hover:text-amber-500 hover:text-white" onClick={(e) => {
                setModalMessage(true);
            }} onMouseEnter={(e) => {
                e.target.classList.add("animate-spin");
            }} onMouseLeave={(e) => {
                e.target.classList.remove("animate-spin");
            }}/>
        </nav>
    </header>
}


export default Header;