import axios from "axios";

export async function getUserData() {
  const res = await axios.get("http://localhost:3000/meli-users");
  return res.data;
}
