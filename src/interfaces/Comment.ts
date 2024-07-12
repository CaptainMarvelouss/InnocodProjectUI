import { User } from "./User";
import { Post } from "./Post";
import { React } from "../interfaces/React";
import { CommentReply } from "./CommentReply";

export interface Comment {
    id: number;
    content: string;
    reacts: React[];
    userId: number;
    user: User;
    postId: number;
    post: Post;
    commentReply: CommentReply[];
    date: Date;
}

