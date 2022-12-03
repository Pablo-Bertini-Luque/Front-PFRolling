import axios from "axios";
const url = "http://localhost:4002/api/v1/users/login";

export async function Login(credentials) {
  try {
    const response = await axios.post(url, {
      email: "pablobertiniluque1@hotmail.com",
      password: "123456",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
