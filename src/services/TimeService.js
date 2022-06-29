import { postRequest } from "./ApiService";

class TimeService {
    saveCalendar = async (data) => {
        const res = await postRequest("/time/saveCalendar", data);
        return res;
    };
    saveRegister = async (data) => {
        const res = await postRequest("/time/saveRegister", data);
        return res;
    };
}

export default new TimeService();