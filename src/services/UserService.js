import { postRequest, getRequest } from "./ApiService";

class UserService {
    saveUser = async (data) => {
        const res = await postRequest("/user/saveUser", data);
        return res;
    };
    loginUser = async (data) => {
        const res = await postRequest("/user/loginUser", data);
        return res;
    };
    getUserInfo = async () =>{
        const res = await getRequest("/user/getUserInfo");
        return res;
    }
}

export default new UserService();