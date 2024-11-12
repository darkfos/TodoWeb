import { Button } from "@headlessui/react"
import { useNavigate } from "react-router-dom"


const GeneralBtn = ({text, onClickRef = null, onClickStat = null}) => {
    const navigator = useNavigate();
    console.log(onClickStat);
    
    const closeAndRef = () => {
        onClickStat();
        navigator("/");
    };

    return <Button onClick={(e) => onClickRef ? onClickRef() : closeAndRef()} className="bg-amber-500 rounded-3xl text-white font-medium w-[50%] p-1">{text}</Button>
}


export default GeneralBtn;