import { Category, SortEnum, State } from "../enum";

export interface SearchPostDto {
    searchString: string;
    category: Category;
    sortEnum: SortEnum;
    state: State;
}