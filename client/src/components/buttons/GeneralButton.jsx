import { Button } from "@headlessui/react"
import { useNavigate } from "react-router-dom"

const GeneralBtn = (text, onclickRes) => {
    const navigator = useNavigate();
    return <Button onClick={(e) => navigator(onclickRes)} className="bg-amber-500 rounded-3xl text-white font-medium">{text}</Button>
}


export default GeneralBtn;