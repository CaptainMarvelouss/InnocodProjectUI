import { Category } from "../common/enum/Category";
import { State } from "../common/enum/State";
import { User } from "../interfaces/User";
import { React } from "../interfaces/React";


export interface Post {
    id: number;
    category: Category;
    content: string;
    title: string;
    userId: number;
    user: User;
    image?: string; // Optional field
    reacts: React[];
    state: State;
    date: Date;
  }