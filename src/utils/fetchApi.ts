import axios from "axios";
interface IOption {
  method: "GET" | "POST";
}
export const getAPI = async (url: string) => {
  try {
    const response = await axios.get(import.meta.env.API_URL + url);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
