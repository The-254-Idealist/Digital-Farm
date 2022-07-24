import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentBuyer
//     .accessToken || "";

const buyer = JSON.parse(localStorage.getItem("persist:root"))?.buyer;
const currentBuyer = buyer && JSON.parse(buyer).currentBuyer;
const TOKEN = currentBuyer?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const buyerRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});

//  export const  = async(goalData, token) =>{
//   const config = {
//       headers:{
//           Authorization: `Bearer ${token}` 
//       }
//   }
//   const response = await axios.post(API_URI, goalData, config)

//   return response.data
// }