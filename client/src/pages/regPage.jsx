import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import LogoToDo from "../static/image/logo.jpg";
import "../static/styles/components.css";
import AuthService from "../auth/authTodo";


const randomName = () => {
    let names = ["artur2004", "burger", "clickclak222", "zaratustra", "stalin999"];
    let randomNumber = names.length - Math.ceil(Math.random() * names.length);
    console.log(randomNumber);
    return names[randomNumber];
}


function RegPage() {

    const navigator = useNavigate();

    const RegistrationAuth = () => {
        const request = async () => {
            let newFormData = new FormData();
            newFormData.append("name", document.getElementById("username").value);
            newFormData.append("email", document.getElementById("email").value);
            newFormData.append("password", document.getElementById("password").value);
            newFormData.append("avatar", document.getElementById("avatar").files[0]);
            return await AuthService.registrationUser(newFormData);
        }
        
        request().then((mes) => {
            navigator("/");
        }).catch((er) => alert("Не удалось добавить запись"));
    }

    return <Fragment>
        <div className="loginMenu grid grid-rows-auto gap-20 bg-todo-theme mt-[12%] w-[60%] m-[auto] rounded-lg shadow-xl pb-10">
            <header className="flex flex-col gap-10px justify-center items-center">
                <img src={LogoToDo} alt="Логотип ToDo" width="20%" height="auto" />
                <h2 className="text-white font-medium text-3xl">Регистрация</h2>
            </header>
            <div className="loginMenu__inputs flex flex-col w-[50%] m-[auto] gap-5">
                <input type="text" placeholder="Электронная почта" className="rounded-r-lg p-2" id="email"/>
                <input type="text" placeholder={"Ваш псевдоним: " + randomName()} className="rounded-r-lg p-2" id="username"/>
                <input type="password" placeholder="Пароль" className="rounded-r-lg p-2" id="password"/>
                <input type="file" placeholder="Фотография" className="rounded-r-lg p-2" id="avatar"/>
            </div>
            <div className="loginMenu__btns flex flex-row gap-5 m-[auto] mt-[-5%]">
                <button className="transition ease-in-out delay-150 bg-rose-500 hover:-translate-y-1 hover:scale-110 hover:bg-rose-800 duration-300 rounded-lg text-white font-medium p-4" onClick={(e) => navigator("/")}>
                    &lt;
                </button>
                <button className="transition ease-in-out delay-150 bg-amber-500 hover:-translate-y-1 hover:text-white hover:scale-110 hover:bg-indigo-500 duration-300 rounded-lg text-white font-medium p-2" onClick={RegistrationAuth}>Зарегистрироваться</button>
            </div>
        </div>
</Fragment>
}


export default RegPage;