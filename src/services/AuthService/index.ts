import axios from "axios";
import {
  SignInDto,
  SignUpDto,
} from "../../common/dtos";
import { User } from "../../interfaces";




export const AuthService = {
  isLogin: (): boolean => {
    return localStorage.getItem("user") ? true : false;
  },
  getCurrentUser: () => {
    const userJson = localStorage.getItem("user");
    return userJson !== null ? (JSON.parse(userJson) as User)
      : null;
  },
 
  login: async (dto: SignInDto) => {
    const response = await axios.post(
      `https://localhost:7139/Auth/SignIn`,
      dto
    );
    localStorage.setItem("user", JSON.stringify(response.data));
  },
  
  signup: async (dto: SignUpDto) => {
    const response = await axios.post(
      `https://localhost:7139/Auth/SignUp`,
      dto
    );
    localStorage.setItem("user", JSON.stringify(response.data));
  },
  logout: () => {
    localStorage.removeItem("user");
  },
};
