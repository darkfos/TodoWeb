import "../../static/styles/components.css";
import LogoToDo from "../../static/image/logo.jpg";


function Header() {
    return <header className="headerTodo w-[90%] bg-todo-theme rounded-b-lg m-[auto]">
        <nav className="headerTodo__nav w-[100%] flex flex-row gap-20 text-white mt-10 justify-center font-medium items-center">
            <img src={LogoToDo} width="5%"></img>
            <a>Главная</a>
            <a>Задачи</a>
            <a>Профиль</a>
        </nav>
    </header>
}


export default Header;