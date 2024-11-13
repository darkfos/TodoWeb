import { Fragment, useContext } from "react";
import Header from "../../components/header/HeaderComponent";
import FooterComponent from "../../components/footer/FooterComponent";
import "../../static/styles/components.css";
import CustomButton from "../../components/buttons/CustomButton";
import TaskToDo from "../../auth/taskTodo";
import { context } from "../../context";
import { useNavigate } from "react-router-dom";


const CreateTaskPage = () => {
    const cont = useContext(context);
    const navigator = useNavigate();

    const createTask = async () => {
        let date = new Date();
        let req = await TaskToDo.createTask(cont.token, {
            title: document.getElementById("title").value,
            description: document.getElementById("desc").value,
            date_create: String(date.getFullYear())+"-"+String(date.getMonth()+1)+"-"+String(date.getUTCDate()),
            date_upd: String(date.getFullYear())+"-"+String(date.getMonth()+1)+"-"+String(date.getUTCDate()),
            date_message: document.getElementById("date_cr").value
        })

        if (req) {
            navigator("/main");
        }
    }

    return <Fragment>
        <Header />
        <br />
        <br />
        <div className="createTask bg-slate-100 rounded-3xl w-[30%] m-[auto] p-8 text-center">
            <header>
                <h1 className="text-slate-800 font-medium text-3xl font-medium">Создание задачи</h1>
                <hr />
            </header>
            <br />
            <br />
            <main className="grid grid-rows-* gap-10">
                <input type="text" placeholder="Заголовок" className="rounded-3xl p-4 w-[100%]" id="title"/>
                <textarea placeholder="Описание" className="rounded-3xl p-4 w-[100%] resize-vertical" id="desc"/>
                <input type="date" className="rounded-3xl p-4 w-[100%]" id="date_cr"/>
            </main>
            <br />
            <br />
            <CustomButton text="Создать" styles="text-white font-medium bg-amber-500 rounded-3xl p-2 w-[80%] m-[auto]" onClickFunc={createTask}></CustomButton>
        </div>
        <br />
        <br />
        <FooterComponent />
    </Fragment>
}


export default CreateTaskPage;