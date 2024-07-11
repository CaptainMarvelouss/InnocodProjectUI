import { User } from './../../interfaces/User';
import axios from "axios";
import { Post } from "../../interfaces";
import { CreateNewPostDto, SearchPostDto, UpdatePostDto, UpdatePostStateDto } from "../../common";
import { SortEnum } from '../../common/enum';

export const PostService = {
 
  createPost: async (dto: CreateNewPostDto): Promise<Post> => {
    const response = await axios.post(`https://localhost:7139/Post/Create`,dto)
    const post: Post = response.data;
    return post;
  },

  updatePostState: async (dto: UpdatePostStateDto) : Promise<Post>=> {
    const response = await axios.put(`https://localhost:7139/Post/UpdatePostState`,dto)
    const post: Post = response.data;
    return post;
  },

  updatePost: async (dto: UpdatePostDto) : Promise<Post> => {
    const response = await axios.put(`https://localhost:7139/Post/UpdatePost`, dto)
    const post : Post = response.data;
    return post;
  },

  getAllPostByLearnerId: async (id: string) : Promise<User[]>=> {
    const response = await axios.get(`https://localhost:7139/Post/GetAllPostById?UserId=`+id);
    const list: User[] = response.data;
    return list;
  },

  getPostById: async (id: string) : Promise<Post> => {
    const response = await axios.get(`https://localhost:7139/Post/GetSinglePostById?postId=`+id);
    const post: Post = response.data;
    return post;
  },

  deletePost: async (id: string) => {
    await axios.delete(`https://localhost:7139/Post/DeletePost?postId=`+id);
  },

  sortAllPost: async (sortEnum: SortEnum) : Promise<Post[]> => {
    const response = await axios.get(`https://localhost:7139/Post/SortAllPost?sortEnum=`+sortEnum);
    const list: Post[] = response.data;
    return list;
  },

  searchPost: async (dto: SearchPostDto) : Promise<Post[]> => {
    const response = await axios.post(`https://localhost:7139/Post/SearchPost`, dto);
    const list: Post[] = response.data;
    return list;
  },
};