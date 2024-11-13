import Modal from "react-modal";
import "../../static/styles/components.css";
import { useState } from "react";
import CustomButton from "../buttons/CustomButton";
import UserTodo from "../../auth/userTodo";
import { useNavigate } from "react-router-dom";


const ProfModal = ({state}) => {
    
    const [open, setDo] = useState(state);
    const navigator = useNavigate();

    const closeModal = () => {
        setDo(false);
    }


    const deleteUser = async () => {
        let req = await UserTodo.deleteUser(localStorage.getItem("token"));
        if (req) {
            navigator("/");
        }
    }

    return <Modal isOpen={open} className="w-[400px] rounded-3xl bg-todo-theme m-[auto] mt-[15%] p-4">
        <h2 className="text-white font-bold">Вы уверены в удалении своего профиля?</h2>
        <br />
        <div className="btns grid grid-cols-2 gap-2">
            <CustomButton text="Да" styles="bg-rose-600 p-2 rounded-3xl text-white w-[100%]" onClickFunc={deleteUser}></CustomButton>
            <CustomButton text="Нет" styles="bg-amber-600 p-2 rounded-3xl text-white w-[100%]" onClickFunc={closeModal}></CustomButton>
        </div>
    </Modal>
}


export default ProfModal;