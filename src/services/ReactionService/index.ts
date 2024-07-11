import axios from "axios";
import { ReacionDto } from "../../common/dtos/ReactionDto";
export const ReactionService = {
 
  Reaction : async (dto: ReacionDto)  => {
    const response = await axios.post(`'https://localhost:7139/React/React'`,dto)
  },

};