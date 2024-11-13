import { Fragment } from "react";
import "../../static/styles/components.css";
import CustomButton from "../buttons/CustomButton";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { context } from "../../context";
import TaskToDo from "../../auth/taskTodo";
import UpdateTaskPage from "../../pages/task/updateTaskPage";


const TaskCard = ({id, title, description, date_cr, date_upd, date_message}) => {

    const navigator = useNavigate();
    const cont = useContext(context);

    const deleteTask = async (id) => {
        let req = await TaskToDo.deleteTask(cont.token, id);
        if (req === true) {
            navigator("/main")
        }
    }
    return <Fragment>
        <div className="taskCard flex flex-col gap-4 border-solid border-2 border-todo-theme rounded-3xl p-2 max-w-[40%] text-left" id={id}>
            <header className="text-slate-800 font-medium text-2xl"><span className="bg-amber-500 rounded-3xl p-2 text-xs w-[100px] text-black">Заголовок:</span> {title}</header>
            <p className="text-slate-600"><span className="bg-slate-800 rounded-3xl p-2 text-white w-[100px]">Описание:</span> {description}</p>
            <hr />
            <p><span className="text-slate-600 bg-green-400 rounded-3xl p-2">Дата создания:</span> {date_cr}</p>
            <p><span className="text-slate-600 bg-green-400 rounded-3xl p-2">Дата обновления:</span> {date_upd}</p>
            <hr />
            <CustomButton text="Удалить" styles="transition ease-in-out delay-150 bg-rose-400 hover:-translate-y-1 hover:scale-110 hover:bg-rose-600 hover:text-white duration-300 bg-rose-400 rounded-3xl" onClickFunc={deleteTask} id={id}></CustomButton>
            <CustomButton text="Обновить" styles="transition ease-in-out delay-150 bg-green-400 hover:-translate-y-1 hover:scale-110 hover:bg-green-600 hover:text-white duration-300 bg-amber-400 rounded-3xl" id={id} onClickFunc={`/update_task/${id}`} other_data={{"id": id, "title": title, "description": description, "date": date_message}}></CustomButton>
        </div>
    </Fragment>
}


export default TaskCard;