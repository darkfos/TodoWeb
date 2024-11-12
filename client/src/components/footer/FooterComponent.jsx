import { Fragment } from "react";
import Logo from "../../static/image/logo.jpg";
import "../../static/styles/components.css"


const FooterComponent = () => {
    return <Fragment>
        <footer className="footerTodo bg-todo-theme grid grid-cols-4 justify-items-center content-center p-10 text-white items-center">
            <img src={Logo} width="400px"></img>
            <div className="footerTodo__left">
                <h2 className="font-medium text-xl">Наши партнеры</h2>
                <br />
                <ul className="footerTodoLeft__menu flex flex-col gap-2">
                    <li>РКСИ</li>
                    <li>Задорожный К.А.</li>
                </ul>
            </div>
            <div className="footerTodo__center">
                <h2 className="font-medium text-xl">Другие материалы</h2>
                <br />
                <ul className="footerTodoCenter__menu flex flex-col gap-2">
                    <li>Политика конфиденциальности</li>
                    <li>Правила использования</li>
                </ul>
            </div>
            <div className="footerTodo__right">
                <h2 className="font-medium text-xl">Наши соц. сети</h2>
                <br />
                <ul className="footerTodoRight__menu flex flex-col gap-2">
                    <li>Телеграм</li>
                    <li>Инстаграм</li>
                    <li>Вконтакте</li>
                </ul>
            </div>
        </footer>
    </Fragment>
}


export default FooterComponent;