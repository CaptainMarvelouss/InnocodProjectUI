import { State } from "../enum";

export interface UpdatePostStateDto {
    postId: number;
    state: State;
}