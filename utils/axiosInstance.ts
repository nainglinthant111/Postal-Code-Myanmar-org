import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://myanmar-postal-code.vercel.app/api/data/myanmar",
});
