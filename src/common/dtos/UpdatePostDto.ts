import { Category } from "../enum";

export interface UpdatePostDto {
    postId: number;
    category: Category;
    content: string;
    image: string | null;
    title: string;
}