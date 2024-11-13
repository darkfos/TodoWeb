import Modal from "react-modal";
import "../../static/styles/components.css";
import { useState } from "react";
import CustomButton from "../buttons/CustomButton";
import UserTodo from "../../auth/userTodo";
import { useNavigate } from "react-router-dom";


const UpdateModal = ({state}) => {
    
    const [open, setDo] = useState(state);
    const navigator = useNavigate();

    const closeModal = () => {
        setDo(false);
    }


    const updatePassword = async () => {
        let req = await UserTodo.updateUserPassword(document.getElementById("pass").value);
        if (req) {
            navigator("/");
        }
    }

    return <Modal isOpen={open} className="w-[400px] rounded-3xl bg-todo-theme m-[auto] mt-[15%] p-10">
        <h2 className="text-white font-bold text-2xl">Обновление пароля</h2>
        <br />
        <input type="password" className="p-4 w-[100%] rounded-3xl" id="pass"/>
        <br />
        <br />
        <div className="btns grid grid-cols-* gap-2">
            <CustomButton text="Сохранить" styles="bg-rose-600 p-2 rounded-3xl text-white w-[100%]" onClickFunc={updatePassword}></CustomButton>
        </div>
    </Modal>
}


export default UpdateModal;