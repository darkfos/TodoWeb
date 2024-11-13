import { useNavigate, Navigate } from "react-router-dom";


const CustomButton = ({text, styles, onClickFunc = null, id = null, other_data=null}) => {
    const navigator = useNavigate();
    return <button className={styles} onClick={(e) => {typeof onClickFunc === "function" ? onClickFunc(id) : navigator(onClickFunc, {state: other_data})}}>{text}</button>
}


export default CustomButton;