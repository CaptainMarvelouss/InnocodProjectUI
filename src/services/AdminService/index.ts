import axios from "axios";
import { Post, User } from "../../interfaces";

export const AdminService = {
    getAllUser: async (): Promise<User[]> => {
        const response = await axios.get(`https://localhost:7139/Admin/GetAllUser`);
        return response.data;
    },

    getAllPendingPost: async (): Promise<Post[]> => {
        const response = await axios.get(`https://localhost:7139/Admin/GetAllPendingPost`);
        return response.data;
    },
};