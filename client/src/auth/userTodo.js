import axios from "axios";

class UserTodo {
    static async userInformation(token) {
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

    static async updateUserPassword() {
        
    }

    static async deleteUser() {

    }
}


export default UserTodo;