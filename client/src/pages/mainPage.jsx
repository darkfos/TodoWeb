import { Fragment, useContext } from "react";
import "../static/styles/component-t.css";
import "../static/styles/components.css";
import Header from "../components/header/HeaderComponent";
import Main1 from "../static/image/main1.jpg";
import ListImg from "../static/image/list.svg";
import ToDoBack from "../static/image/6256223.jpg";
import FooterComponent from "../components/footer/FooterComponent";
import { useLocation } from "react-router-dom";


function MainPage() {

    return <Fragment>
        <Header />
        <br />
        <br />
        <div className="mainPage flex flex-col w-[90%] m-[auto] gap-16">
            <section className="mainPage__section1 w-[100%] h-14 bg-gradient-to-r from-slate-300 to-slate-600 rounded-3xl grid grid-cols-2 gap-20 justify-items-center items-center h-96">
                <div className="section1__left">
                    <p className="text-slate-800 font-medium">Привет! Добро пожаловать в <span className="text-todo-theme font-black text-3xl">ToDo Web</span></p>
                    <br/>
                    <div className="setion1Left__btns flex flex-row gap-5 justify-center">
                        <button className="transition ease-in-out delay-150 bg-amber-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300 bg-amber-500 rounded-2xl p-3 w-[150px]" onClick={(e) => {
                            window.location.href = "https://vk.com/se_cmert";
                        }}>Кто мы</button>
                        <button className="transition ease-in-out delay-150 bg-amber-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300 bg-amber-500 rounded-2xl p-3 w-[150px]" onClick={(e) => {
                            window.location.href = "https://vk.com/se_cmert";
                        }}>Контакты</button>
                    </div>
                </div>
                <div className="section1__right">
                    <img src={ToDoBack} className="rounded-3xl color-slate-400" width="350px"/>
                </div>
            </section>
            <section className="mainPage__section2 w-[100%] grid grid-cols-2 justify-center items-center text-center m-[auto] gap-40 bg-slate-50 rounded-3xl">
                <div className="section1__left">
                    <img src={Main1} className="w-[100%]"/>
                </div>
                <div className="section2__text text-left flex flex-col gap-20">
                    <h2 className="text-slate-600 font-medium text-7xl">Наши услуги</h2>
                    <div className="section2Text__elements flex flex-col gap-5">
                        <div className="section2Text__el1 flex flex-row gap-2">
                            <img src={ListImg} width="30px"/>
                            <p>Создание заметок</p>
                        </div>
                        <div className="section2Text__el2 flex flex-row gap-2">
                            <img src={ListImg} width="30px"/>
                            <p>Личный профиль</p>
                        </div>
                        <div className="section2Text__el3 flex flex-row gap-2">
                            <img src={ListImg} width="30px"/>
                            <p>Статистика</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mainPage__section3 h-14 bg-gradient-to-l from-slate-500 to-slate-800 w-[100%] rounded-3xl grid grid-cols-2 gap-10 justify-items-center items-center">
                <div className="section3__left text-white font-black w-[30%]">
                    <h2>Хотите оставить отзыв?</h2>
                </div>
                <div className="section3__right grid grid-cols-2 gap-5 w-[80%]">
                    <input type="text" placeholder="Худший сайт!" className="rounded-3xl p-2 w-[100%]"/>
                    <button className="bg-amber-500 rounded-3xl p-2 w-[150px]" onMouseEnter={(e) => {
                        e.target.classList.add("transition");
                        e.target.classList.add("ease-in-out");
                        e.target.classList.add("animate-bounce");
                        e.target.classList.add("duration-1000");
                    }} onMouseLeave={(e) => {
                        e.target.classList.remove("transition");
                        e.target.classList.remove("ease-in-out");
                        e.target.classList.remove("animate-bounce");
                        e.target.classList.remove("duration-1000");
                    }} onClick={(e) => {
                        alert("Нам тут всякие гадости не нужны!")
                    }}>Отправить</button>
                </div>
            </section>
        </div>
        <br />
        <br />
        <br />
        <FooterComponent/>
    </Fragment>
}


export default MainPage;