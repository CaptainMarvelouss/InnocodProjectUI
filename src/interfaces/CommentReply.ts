import { User } from "./User";
import { React } from "../interfaces/React";

export interface CommentReply {
    id: number;
    content: string;
    reacts: React[];
    userId: number;
    user: User;
    commentId: number;
    comment: Comment;
    date: Date;
  }