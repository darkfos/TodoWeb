import Modal from "react-modal";
import "../../static/styles/components.css";
import { useEffect, useState } from "react";
import CustomButton from "../buttons/CustomButton";
import UserTodo from "../../auth/userTodo";
import TaskToDo from "../../auth/taskTodo";
import { useNavigate } from "react-router-dom";


const MessageModal = ({state}) => {
    
    const [open, setDo] = useState(state);
    const [data, setData] = useState(null);
    const navigator = useNavigate();

    const closeModal = () => {
        setDo(false);
    }

    useEffect(() => {
        let req = async () => {
            let res = await TaskToDo.getMessage(localStorage.getItem("token"));
            if (res) {
                setData(res);
            }
        }
        req();
    }, []);


    if (data) {
        return (
            <Modal isOpen={open} className="w-[400px] rounded-3xl bg-todo-theme m-[auto] mt-[15%] p-4">
                <h2 className="text-white font-bold text-2xl">Мои уведомления</h2>
                <p className="text-xs text-white">Даты задач подходят к концу!</p>
                <br />
                <br />
                <div className="tasks flex flex-row gap-5 w-[90%] m-[auto]">
                    {data.task.map((message) => {
                        return <p className="bg-white rounded-3xl p-4 w-[100%]"><span className="bg-amber-500 rounded-3xl p-2">Задача: {message.id}</span> {message.title}</p>
                    })}
                </div>
                <br />
                <br />
                <div className="w-[100%] m-[auto] text-center">
                    <CustomButton text="Закрыть" styles="transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 hover:text-white bg-amber-600 p-2 rounded-3xl w-[80%]" onClickFunc={closeModal}></CustomButton>
                </div>
            </Modal>
        )
    } else {
        return null
    }
}


export default MessageModal;