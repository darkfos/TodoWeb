import "../../static/styles/components.css";
import LogoToDo from "../../static/image/logo.jpg";
import { useNavigate } from "react-router-dom";


function Header() {

    const navigator = useNavigate();

    return <header className="headerTodo w-[90%] bg-todo-theme rounded-b-lg m-[auto]">
        <nav className="headerTodo__nav w-[100%] flex flex-row gap-20 text-white mt-10 justify-center font-medium items-center">
            <img src={LogoToDo} width="5%"></img>
            <a href="" onClick={(e) => {navigator("/main")}}>Главная</a>
            <a href="" onClick={(e) => {navigator("/tasks")}}>Задачи</a>
            <a href="" onClick={(e) => {navigator("/profile")}}>Профиль</a>
        </nav>
    </header>
}


export default Header;