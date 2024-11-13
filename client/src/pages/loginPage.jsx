import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LogoTodo from "../static/image/logo.jpg";
import AuthService from "../auth/authTodo";
import { context } from "../context";



function LoginPage() {

    const loginAuth = () => {
        let request = async () => {
            return await AuthService.loginUser({
                email: document.getElementById("email").value,
                password: document.getElementById("pass").value
            });
        }
        
        request().then((message) => {
            contextLog.setToken(message.accessToken);
            contextLog.setRefreshToken(message.refreshToken);
            localStorage.setItem("token", message.accessToken);
            localStorage.setItem("refreshToken", message.refreshToken);
            navigator("/main");
        }).catch((er) => {alert(er)})
    }

    const navigator = useNavigate();
    const contextLog = useContext(context);

    // Изначальная установка localStorage
    localStorage.clear();

    return <Fragment>
        <div className="loginMenu grid grid-rows-auto gap-20 bg-todo-theme mt-[12%] w-[60%] m-[auto] rounded-lg shadow-xl pb-10">
            <header className="flex flex-col gap-10px justify-center items-center">
                <img src={LogoTodo} alt="Логотип ToDo" width="20%" height="auto" />
                <h2 className="text-white font-medium text-3xl">Авторизация</h2>
            </header>
            <div className="loginMenu__inputs flex flex-col w-[50%] m-[auto] gap-5">
                <input type="text" placeholder="Электронная почта" className="rounded-r-lg p-2" id="email"/>
                <input type="password" placeholder="Пароль" className="rounded-r-lg p-2" id="pass"/>
            </div>
            <div className="loginMenu__btns flex flex-row gap-10 m-[auto] mt-[-5%]">
                <button className="transition ease-in-out delay-150 bg-amber-500 hover:-translate-y-1 hover:text-white hover:scale-110 hover:bg-indigo-500 duration-300 ... bg-amber-500 rounded-lg text-white font-medium p-4 width-[50%]" onClick={loginAuth} onMouseEnter={(e) => {
                }} onMouseLeave={(e) => {
                    e.target.classList.remove("animate-pulse")
                }}>Авторизоваться</button>
                <button className="transition ease-in-out delay-150 bg-amber-500 hover:-translate-y-1 hover:text-white hover:scale-110 hover:bg-indigo-500 duration-300 ... bg-amber-500 rounded-lg text-white font-medium p-4 width-[50%]" onClick={(e) => navigator("/registration")}>Регистрация</button>
            </div>
        </div>
    </Fragment>
}


export default LoginPage;