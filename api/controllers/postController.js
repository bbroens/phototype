import { db } from "../connect.js";

export const getPosts = (req, res) => {
  let postQuery = `SELECT * FROM posts`;

  //TODO Post filtering
};
