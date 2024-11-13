import { Fragment, useState, useEffect } from "react";
import Header from "../components/header/HeaderComponent";
import FooterComponent from "../components/footer/FooterComponent";
import "../static/styles/components.css";
import CustomButton from "../components/buttons/CustomButton";
import { useContext } from "react";
import { context } from "../context";
import UserTodo from "../auth/userTodo";
import { useNavigate } from "react-router-dom";
import ProfModal from "../components/modal/modalProfile";
import UpdateModal from "../components/modal/modalUpdatePassword";
import ImageSpin from "../static/image/spin.png";


function ProfilePage() {

    const [userData, setUserData] = useState(null);
    const [modal, setModal] = useState(false);
    const [modalUpd, setUpdModal] = useState(false);

    const cont = useContext(context);
    const navigator = useNavigate();

    useEffect(() => {
        const reqUserInfo = async () => {
            try {
                let res = await UserTodo.userInformation(cont.token);
                if (res) {
                    setUserData(res);
                } else {
                }
            } catch (error) {
                console.error("Ошибка при получении данных пользователя:", error);
            }
        };

        if (cont.token) {
            reqUserInfo();
        }
    }, [cont.token]);

    if (!userData) {
        return <Fragment>
            <Header />
            <br/>
            <br/>
            <img src={ImageSpin} class="animate-spin m-[auto] w-[100px]" viewBox="0 0 24 24" />
            <br/>
            <br/>
            <FooterComponent />
        </Fragment>;
    }


    const deleteUser = async () => {
        setModal(true);
    }

    const updatePasswordUser = async () => {
        setUpdModal(true);
    }

    return (
        <Fragment>
            <Header />
            {modal? <ProfModal state={true}/>: null}
            {modalUpd? <UpdateModal state={true}/>: null}
            <br />
            <br />
            <div className="myProfile w-[90%] m-[auto] flex flex-row gap-20">
                <div className="profileSett w-[40%]">
                    <img src={require("/home/rias/Desktop/TodoWeb/client/src/static/image/"+userData.img_url)} className="rounded-3xl w-[100%]" alt="Профиль" />
                    <br />
                    <h2 className="w-[100%] text-center">{userData.name}</h2>
                    <br />
                    <hr />
                    <br />
                    <div className="profileSett__btns grid gap-5 w-[100%]">
                        <CustomButton text="Обновить" styles="transition ease-in-out delay-150 bg-green-400 hover:-translate-y-1 hover:scale-110 hover:bg-green-600 hover:text-white duration-300 w-[100%] bg-green-400 rounded-3xl p-1" onClickFunc={updatePasswordUser}/>
                        <CustomButton text="Удалить" styles="transition ease-in-out delay-150 bg-rose-400 hover:-translate-y-1 hover:scale-110 hover:bg-rose-600 hover:text-white duration-300 w-[100%] bg-rose-500 rounded-3xl p-1" onClickFunc={deleteUser}/>
                        <CustomButton text="Выйти" styles="transition ease-in-out delay-150 bg-amber-500 hover:-translate-y-1 hover:scale-110 hover:bg-amber-600 hover:text-white duration-300 w-[100%] rounded-3xl p-1" onClickFunc={"/"}/>
                    </div>
                </div>
                <div className="profileData flex flex-col gap-10 justify-left text-left w-[100%]">
                    <div className="profileDataStat">
                        <h1 className="text-slame-800 font-black text-xl border-solid border-2 border-amber-500 p-2 rounded-3xl w-[20%] text-center">Статистика</h1>
                        <br />
                        <p>Количество активных задач: {userData.tasksCount}</p>
                    </div>
                    <div className="profileDataGeneralStat">
                        <h1 className="text-slame-800 font-black text-xl border-solid border-2 border-indigo-500 p-2 rounded-3xl w-[20%] text-center">Общие данные</h1>
                        <br />
                        <p>Дата регистрации: {userData.date_reg}</p>
                        <p>Дата регистрации: {userData.date_upd}</p>
                        <p>Электронная почта: {userData.email}</p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <FooterComponent />
        </Fragment>
    );
}

export default ProfilePage;
