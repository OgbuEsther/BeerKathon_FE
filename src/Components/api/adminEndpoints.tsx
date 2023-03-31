import axios from "axios";

const Endpoint = "https://football-predict-api.onrender.com";

// Get single user/admin:
export const SingleAdmin = async (userID: any) => {
  return await axios
    .get(`${Endpoint}/getsingleuser/${userID}`)
    .then((res) => res.data);
};
