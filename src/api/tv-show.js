import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY_PARAM = "?api_key=6e727ad0d59b71fcb38a8ff135697ab3";

export class TVShowAPI {
  static async fetchPopulars() {
    const reponse = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    console.log(reponse.data.results);
    return reponse.data.results;
  }
}

