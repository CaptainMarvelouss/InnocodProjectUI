import axios from "axios";
import { CommentDto } from "../../common/dtos/Comment/CommentDto";
import { UpdateCommentDto } from "../../common/dtos/Comment/UpdateCommentDto";

export const CommentService = {
    createComment: async (dto: CommentDto): Promise<Comment> => {
        const response = await axios.post(`https://localhost:7139/Comment/CreateComment`,dto);
        const comment: Comment = response.data;
        return comment;
    },

    deleteComment: async (id: string): Promise<Comment> => {
        const response = await axios.delete(`https://localhost:7139/Comment/DeleteComment?commentId=`+id);
        const comment: Comment = response.data;
        return comment;
    },

    getAllCommentByUserId: async (id: string): Promise<Comment[]> => {
        const response = await axios.get(`https://localhost:7139/Comment/GetAllCommentByUserId?UserId=`+id);
        const comment: Comment[] = response.data;
        return comment;
    },

    updateComment: async (dto: UpdateCommentDto): Promise<Comment> => {
        const response = await axios.put(`https://localhost:7139/Comment/UpdateComment`,dto);
        const comment: Comment = response.data;
        return comment;
    },

};