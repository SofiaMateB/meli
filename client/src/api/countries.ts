import axios from "axios";

export async function getCountries() {
  const res = await axios.get("http://localhost:3000/meli-countries");
  return res.data;
}