import { Fragment } from "react";
import Header from "../components/header/HeaderComponent";
import FooterComponent from "../components/footer/FooterComponent";
import TestImage from "../static/image/logo.jpg";
import "../static/styles/components.css";
import CustomButton from "../components/buttons/CustomButton";
import { useContext } from "react";
import todoContext from "..";


function ProfilePage() {
    const context = useContext(todoContext);
    console.log(context);
    return <Fragment>
        <Header />
        <br />
        <br />
        <div className="myProfile w-[90%] m-[auto] flex flex-row gap-20">
            <div className="profileSett w-[40%]">
                <img src={TestImage} className="rounded-3xl w-[100%]"/>
                <br />
                <h2 className="w-[100%] text-center">Ваше имя</h2>
                <br />
                <hr />
                <br />
                <div className="profileSett__btns grid gap-5 w-[100%]">
                    <CustomButton text="Обновить" styles="w-[100%] bg-green-400 rounded-3xl p-1"/>
                    <CustomButton text="Удалить" styles="w-[100%] bg-rose-500 rounded-3xl p-1"/>
                </div>
            </div>
            <div className="profileData flex flex-col gap-10 justify-left text-left w-[100%]">
                <div className="profileDataStat">
                    <h1 className="text-slame-600 font-black text-3xl">Статистика</h1>
                    <br />
                    <p>Общее количество задач: </p>
                    <p>Количество активных задач: </p>
                </div>
                <div className="profileDataGeneralStat">
                    <h1 className="text-slame-600 font-black text-3xl">Общие данные</h1>
                    <br />
                    <p>Дата регистрации: </p>
                    <p>Электронная почта: </p>
                </div>
            </div>
        </div>
        <br />
        <br />
        <FooterComponent />
    </Fragment>
}


export default ProfilePage;