import { postRequest, getRequest } from "./ApiService";

class LessonService {
    getLessons = async () => {
        const res = await getRequest("/lesson/getLessons");
        return res;
    };
    getLevels = async () => {
        const res = await getRequest("/lesson/getLevels");
        return res;
    };
    getTeachers = async (lesson_id) => {
        const res = await getRequest(`/lesson/getTeachers?lesson_id=${lesson_id}`);
        return res;
    };
    saveLessons = async (data) => {
        const res = await postRequest("/lesson/saveLessons", data);
        return res;
    };
}

export default new LessonService();