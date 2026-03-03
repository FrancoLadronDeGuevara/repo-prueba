import axios from "axios";

const getUsers = async () => {
  const { data } = await axios.get("https://api.disneyapi.dev/character");
  return data;
};

const getPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
};

export { getUsers, getPosts };
