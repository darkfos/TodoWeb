import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import LogoTodo from "../static/image/logo.jpg";


function LoginPage()  {

    const navigator = useNavigate();

    return <Fragment>
        <div className="loginMenu grid grid-rows-auto gap-20 bg-todo-theme mt-[12%] w-[60%] m-[auto] rounded-lg shadow-xl pb-10">
            <header className="flex flex-col gap-10px justify-center items-center">
                <img src={LogoTodo} alt="Логотип ToDo" width="20%" height="auto" />
                <h2 className="text-white font-medium text-3xl">Авторизация</h2>
            </header>
            <div className="loginMenu__inputs flex flex-col w-[50%] m-[auto] gap-5">
                <input type="text" placeholder="Электронная почта" className="rounded-r-lg p-2"/>
                <input type="password" placeholder="Пароль" className="rounded-r-lg p-2"/>
            </div>
            <div className="loginMenu__btns flex flex-row gap-10 m-[auto] mt-[-5%]">
                <button className="bg-amber-500 rounded-lg text-white font-medium p-4 width-[50%]" onClick={(e) => {navigator("/main")}}>Авторизоваться</button>
                <button className="bg-amber-500 rounded-lg text-white font-medium p-4 width-[50%]" onClick={(e) => navigator("/registration")}>Регистрация</button>
            </div>
        </div>
    </Fragment>
}


export default LoginPage;