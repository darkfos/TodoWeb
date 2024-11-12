import { Button } from "@headlessui/react";


const CustomButton = ({text, styles, onClickFunc = null}) => {
    return <Button className={styles}>{text}</Button>
}


export default CustomButton;