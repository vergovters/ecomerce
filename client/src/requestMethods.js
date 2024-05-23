import axios from "axios";

const BASE_URL = "http://localhost:50000/api/";


//const user = useSelector((state) => state.user.currentUser);

const TOKEN = "ecomerce"


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});