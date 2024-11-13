import { Fragment, useEffect, useState } from "react";
import Header from "../components/header/HeaderComponent";
import FooterComponent from "../components/footer/FooterComponent";
import CustomButton from "../components/buttons/CustomButton";
import "../static/styles/components.css";
import TaskCard from "../components/task/TaskElement";
import { useContext } from "react";
import { context } from "../context";
import TaskToDo from "../auth/taskTodo";
import { useNavigate } from "react-router-dom";
import ImageSpin from "../static/image/spin.png";


function TasksPage() {
    const cont = useContext(context);
    const navigator = useNavigate();
    const [tasks, setTasks] = useState(null);

    useEffect(() => {
        let req = async () => {
            let res = await TaskToDo.getTasks(cont.token);
            setTasks(res);
        }
        req();
    }, []);

    if (tasks) {
        return (
            <Fragment>
                <Header />
                    <br />
                    <br />
                    <div className="taskMain grid grid-rows-2 gap-30 w-[90%] m-[auto]">
                        <header className="taskMain__header flex flex-row gap-20 p-4">
                            <h1 className="text-slame-800 font-black text-2xl">Ваши задачи</h1>
                            <CustomButton text="Добавить" styles="transition ease-in-out delay-150 bg-amber-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300 w-[150px] bg-amber-500 rounded-3xl p-1.5" onClickFunc="/create_task"></CustomButton>
                        </header>
                        <hr />
                        <div className="taskMain__list m-[auto] flex flex-rows w-[100%] gap-10 flex-wrap">
                            {tasks.tasks.length === 0 ? <h2 className="text-slame-800 font-medium text-2xl">У вас еще нет задач!</h2> : tasks.tasks.map((el) => {
                                return <TaskCard id={el.id} title={el.title} description={el.description} date_cr={el.date_create} date_upd={el.date_to_end} date_message={el.date_message}/>
                            })}
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
        )
    } else {
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
}


export default TasksPage;