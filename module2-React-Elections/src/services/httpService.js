import axios from 'axios';

const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'https://react-elections-jonathan-sengel.glitch.me/';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export default async function getData(url) {
  const { data } = await axiosInstance.get(url);
  console.log(BASE_URL);
  return data;
}
