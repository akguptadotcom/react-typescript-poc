import axios, { AxiosPromise } from "axios";

const instance:any = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

export default instance;
