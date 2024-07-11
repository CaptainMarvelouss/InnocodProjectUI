import axios from "axios";
import { ChatGPTDto } from "../../common";
import { DataStructure } from "../../interfaces";

export const ChatGPTService = {
 
  chatWithGPT: async (dto: ChatGPTDto): Promise<DataStructure> => {
    const response = await axios.post(`https://localhost:7139/ChatCompletion/answer?question`,dto)
    const dataStructure: DataStructure = response.data;
    return dataStructure;
  },

};