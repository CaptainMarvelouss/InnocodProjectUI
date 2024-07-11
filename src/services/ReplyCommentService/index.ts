import axios from "axios";
import { ReplyCommentDto, UpdateReplyComment } from "../../common";


export const ReplyCommentService = {
 
//   createPost: async (dto: CreateNewPostDto): Promise<Post> => {
//     const response = await axios.post(`https://localhost:7139/Post/Create`,dto)
//     const post: Post = response.data;
//     return post;
//   },

  createReplyComment: async (dto: ReplyCommentDto) : Promise<string> => {
    const response = await axios.post(`https://localhost:7139/ReplyComment/CreateReplyComment`, dto);
    const reponseMessage : string = response.data;
    return reponseMessage;
  },
 
  updateReplyComment: async (dto: UpdateReplyComment) : Promise<string> => {
    const response = await axios.put(`https://localhost:7139/ReplyComment/UpdateReplyComment`, dto);
    const reponseMessage : string = response.data;
    return reponseMessage;
  },

  deleteReplyComment: async (commentId: string) : Promise<string> => {
    const response = await axios.delete(`https://localhost:7139/ReplyComment/DeleteReplyComment?commentId=`+commentId);
    const reponseMessage : string = response.data;
    return reponseMessage;
  },
  
};