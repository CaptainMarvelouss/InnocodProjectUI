import { Category, State } from "../enum";

export interface CreateNewPostDto {
    userId: number;
    category: Category;
    content: string;
    image: string | null;
    title: string;
    state: State;
}