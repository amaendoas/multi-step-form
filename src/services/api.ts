import axios from "axios"

export const api = axios.create({
  //test
  // baseURL: "http://localhost:3334"
  //production
  baseURL: "https://stepdev.herokuapp.com"
});