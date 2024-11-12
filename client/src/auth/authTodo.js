import axios from "axios";


class AuthService {

    static async registrationUser(formData) {
        let req = await axios.post("http://localhost:7899/api/v1/auth/register", formData, {ContentType: "multipart/form-data"});
        if (req.status === 200) {
            return true
        } return false
    }

    static async loginUser(data) {
        let req = await axios.post("http://localhost:7899/api/v1/auth/login", data);
        if (req.status === 200) {
            return req.data
        } return false
    }

    static async updateToken(token) {
        let req = await axios.post("http://localhost:7899/api/v1/auth/updateToken", {}, {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        if (req.status === 200) {
            return req.data;
        } return false
    }
}


export default AuthService;