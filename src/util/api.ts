import axios from "axios";
import { User } from "../types/types";
export const fetchUsers=async():Promise<User[]> =>{
    const resp=await axios.get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
    return resp.data;
}