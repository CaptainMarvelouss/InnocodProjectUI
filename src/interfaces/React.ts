import { Emotion } from "../common/enum/Emotion";
import { Post } from "./Post";
import { User } from "./User";
import { CommentReply } from "./CommentReply";

export interface React {
    id: number;
    emotion: Emotion;
    userId: number;
    user: User;
    postId?: number; // Optional field
    post?: Post; // Optional field
    commentId?: number; // Optional field
    comment?: Comment; // Optional field
    commentReplyId?: number; // Optional field
    commentReply?: CommentReply; // Optional field
  }