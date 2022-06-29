import { postRequest, getRequest } from "./ApiService";

class TrainingService {
    getTraining = async () =>{
        const res = await getRequest("/training/getTraining");
        return res;
    }
}

export default new TrainingService();