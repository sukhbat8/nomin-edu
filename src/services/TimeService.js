import { postRequest, getRequest } from "./ApiService";

class TimeService {
    saveCalendar = async (data) => {
        const res = await postRequest("/time/saveCalendar", data);
        return res;
    };
    saveRegister = async (data) => {
        const res = await postRequest("/time/saveRegister", data);
        return res;
    };
    getCalendar = async () => {
        const res = await getRequest("/time/getCalendar");
        return res;
    };
}

export default new TimeService();