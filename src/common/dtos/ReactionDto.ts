import { Emotion } from "../enum";

export interface ReacionDto {

        emotion: Emotion;
        userId: number;
        postId: number;
        commentId: number;
        commentReplyId: number;
    
}