import { Fragment } from "react";
import Header from "../components/header/HeaderComponent";
import FooterComponent from "../components/footer/FooterComponent";
import CustomButton from "../components/buttons/CustomButton";
import "../static/styles/components.css";
import TaskCard from "../components/task/TaskElement";


function TasksPage() {
    return <Fragment>
        <Header />
        <br />
        <br />
        <div className="taskMain grid grid-rows-2 gap-30 w-[90%] m-[auto]">
            <header className="taskMain__header flex flex-row gap-20 p-4">
                <h1 className="text-slame-800 font-black text-2xl">Ваши задачи</h1>
                <CustomButton text="Добавить" styles="w-[150px] bg-amber-500 rounded-3xl p-1.5"></CustomButton>
            </header>
            <hr />
            <div className="taskMain__list">
                <p>blablalba</p>
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <FooterComponent />
    </Fragment>
}


export default TasksPage;