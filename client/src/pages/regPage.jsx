import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import LogoToDo from "../static/image/logo.jpg";
import "../static/styles/components.css";


let randomName = () => {
    let names = ["artur2004", "burger", "clickclak222", "zaratustra", "stalin999"];
    let randomNumber = names.length - Math.ceil(Math.random() * names.length);
    console.log(randomNumber);
    return names[randomNumber];
}


function RegPage() {

    const navigator = useNavigate();

    return <Fragment>
        <div className="loginMenu grid grid-rows-auto gap-20 bg-todo-theme mt-[12%] w-[60%] m-[auto] rounded-lg shadow-xl pb-10">
            <header className="flex flex-col gap-10px justify-center items-center">
                <img src={LogoToDo} alt="Логотип ToDo" width="20%" height="auto" />
                <h2 className="text-white font-medium text-3xl">Регистрация</h2>
            </header>
            <div className="loginMenu__inputs flex flex-col w-[50%] m-[auto] gap-5">
                <input type="text" placeholder="Электронная почта" className="rounded-r-lg p-2"/>
                <input type="text" placeholder={"Ваш псевдоним: " + randomName()} className="rounded-r-lg p-2"/>
                <input type="password" placeholder="Пароль" className="rounded-r-lg p-2"/>
            </div>
            <div className="loginMenu__btns flex flex-row gap-5 m-[auto] mt-[-5%]">
                <button className="bg-red-800 rounded-lg text-white font-medium p-4" onClick={(e) => navigator("/")}>
                    &lt;
                </button>
                <button className="bg-amber-500 rounded-lg text-white font-medium p-2">Зарегистрироваться</button>
            </div>
        </div>
</Fragment>
}


export default RegPage;