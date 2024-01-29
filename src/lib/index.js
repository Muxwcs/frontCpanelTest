import { Axios } from "../config";

export const getMovies = async () => {
  try {
    const res = await Axios.get("movies");
    return { data: res.data, error: false };
  } catch (error) {
    return { data: [], error: true };
  }
};
