import { Fragment, useContext, useState } from "react";
import Header from "../../components/header/HeaderComponent";
import FooterComponent from "../../components/footer/FooterComponent";
import "../../static/styles/components.css";
import CustomButton from "../../components/buttons/CustomButton";
import TaskToDo from "../../auth/taskTodo";
import { context } from "../../context";
import { useLocation, useNavigate } from "react-router-dom";


const UpdateTaskPage = () => {
    const location = useLocation();
    const locationData = location.state;
    const [title, setTitle] = useState(locationData.title);
    const [description, setDescriptio] = useState(locationData.description);
    const [date, setDate] = useState(locationData.date);

    const cont = useContext(context);
    const navigator = useNavigate();

    const updateTask = async () => {
        let req = await TaskToDo.updateTask(cont.token, locationData.id, {
            title: document.getElementById("title").value,
            description: document.getElementById("desc").value,
            date_message: document.getElementById("date_cr").value
        })

        if (req === true) {
            navigator("/main");
        }
    }

    return <Fragment>
        <Header />
        <br />
        <br />
        <div className="createTask bg-slate-100 rounded-3xl w-[30%] m-[auto] p-8 text-center">
            <header>
                <h1 className="text-slate-800 font-medium text-3xl font-medium">Обновление задачи</h1>
                <hr />
            </header>
            <br />
            <br />
            <main className="grid grid-rows-* gap-10">
                <input type="text" placeholder="Заголовок" className="rounded-3xl p-4 w-[100%]" id="title" value={title} onChange={(e) => {
                    setTitle(e.target.value);
                }}/>
                <textarea placeholder="Описание" className="rounded-3xl p-4 w-[100%] resize-vertical" id="desc" value={description} onChange={(e) => {
                    setDescriptio(e.target.value);
                }}/>
                <input type="date" className="rounded-3xl p-4 w-[100%]" id="date_cr" value={date} onChange={(e) => {
                    setDate(e.target.value);
                }}/>
            </main>
            <br />
            <br />
            <CustomButton text="Обновить" styles="text-white font-medium bg-amber-500 rounded-3xl p-2 w-[80%] m-[auto]" onClickFunc={updateTask} id={locationData.id}></CustomButton>
        </div>
        <br />
        <br />
        <FooterComponent />
    </Fragment>
}


export default UpdateTaskPage;