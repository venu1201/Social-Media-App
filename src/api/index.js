import axios from 'axios';


const API = axios.create({baseURL:'http://localhost:5000'});

const BASE_URL=  `http://localhost:5000`;
export const signin=(formdata)=> API.post('/user/signin',formdata);
export const signup=(formdata)=> API.post('/user/signup',formdata);
export const getusers=(username)=> API.post('/user/users',username);
export const getgoogleuser=(email)=> API.get(`/user/googleverify/${email}`);
// export const fetchDataFromApi = async (url, params) => {
//     try {
//         const { data } = await axios.get(BASE_URL + url,params);
//         return data;
//     } catch (err) {
//         console.log(err);
//         return err;
//     }
// };
