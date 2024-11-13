import axios from "axios";
import AuthService from "./authTodo";

class UserTodo {
    static async userInformation(token) {
        await AuthService.updateToken();
        try {
            let request = await axios.get("http://localhost:7899/api/v1/user/information", {
                headers: {
                    "Authorization": "Bearer " + token
                }
            });
            if (request.status === 200) {
                return request.data
            } return false
        } catch (e) {
            console.log(e);
        }
    }

    static async updateUserPassword(new_password) {

        await AuthService.updateToken();

        let request = await axios.put("http://localhost:7899/api/v1/user/updatePassword", {
            password: new_password
        }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })

        if (request.status === 200) {
            return true;
        } return false
    }

    static async deleteUser(token) {

        await AuthService.updateToken();

        let request = await axios.delete("http://localhost:7899/api/v1/user/deleteMe", {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        if (request.status === 200) {
            return true
        } return false
    }
}


export default UserTodo;