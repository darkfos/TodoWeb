import Modal from "react-modal";
import { Fragment, useState } from "react";
import "../../static/styles/components.css";
import GeneralBtn from "../buttons/GeneralButton";


const ModalWindow = () => {
    
    const [modal, setModal] = useState(true);

    const openModal = () => {
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

    return <Fragment>
        <Modal isOpen={modal} className="bg-todo-theme w-[60%] m-[auto] rounded-b-lg mt-[10%] grid grid-rows-4 h-96">
            <div className="flex flex-col gap-5 m-[auto] items-center m-[50px]">
                <h1 className="text-red-800 font-black text-8xl">404 Not Found</h1>
                <h2 className="text-white font-black text-7xl">Несуществующая страница</h2>
                <p className="text-white font-medium text-2xs">вы перешли на несуществующую страницу!</p>
                <GeneralBtn text="Закрыть" onClickStat={closeModal}></GeneralBtn>
            </div>
        </Modal>
    </Fragment>
}


export default ModalWindow;