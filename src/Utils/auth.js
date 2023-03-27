import axios, { Axios } from "axios";
export async function signIn(email, password) {
  console.log(email, password);
  return await axios.post("http://localhost:4000/api/user/signin", {
    email,
    password,
  });
}
export async function signUp(data) {
  console.log(data);
  return await axios.post("http://localhost:4000/api/user/signup", {
    ...data,
  });
}
