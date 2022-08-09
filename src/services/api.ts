import axios from "axios"

export const api = axios.create({
  //test
  // baseURL: "http://localhost:3333"
  //production
  baseURL: "https://stepdev.herokuapp.com"
});