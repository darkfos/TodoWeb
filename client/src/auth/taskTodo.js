import axios from "axios";
import AuthService from "./authTodo";


class TaskToDo {

    static async createTask(token, jsData) {
        
        await AuthService.updateToken();

        let request = await axios.post("http://localhost:7899/api/v1/task/createTask", jsData, {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        if (request.status === 201) {
            return true
        } return false
    }

    static async getTasks(token) {

        await AuthService.updateToken();

        let request = await axios.get("http://localhost:7899/api/v1/task/myTasks", {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        if (request.status === 200) {
            return request.data
        } return []
    }

    static async getTask(token, id) {

        await AuthService.updateToken();

    }

    static async getMessage(token) {
        
        await AuthService.updateToken();

        let request = await axios.get("http://localhost:7899/api/v1/task/gettaskformessage", {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        if (request.status === 200) {
            return request.data
        } return false
    }

    static async updateTask(token, id, jsData) {

        await AuthService.updateToken();

        let request = await axios.put("http://localhost:7899/api/v1/task/updateTask/"+id, jsData, {
            headers: {
                Authorization: "Bearer " + token,
            },
        })

        if (request.status === 200) {
            return true
        } return false
    }

    static async deleteTask(token, id) {

        await AuthService.updateToken();

        let request = await axios.delete("http://localhost:7899/api/v1/task/delete/"+id, {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        if (request.status === 200) {
            return true
        } return false
    }
}


export default TaskToDo;