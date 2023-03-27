import axios, { Axios } from "axios";
export async function signIn(email, password) {
  // //console.log(email, password);
  return await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}api/user/signin`,
    {
      email,
      password,
    }
  );
}
export async function signUp(data) {
  // //console.log(data);
  return await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}api/user/signup`,
    {
      ...data,
    }
  );
}
