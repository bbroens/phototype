import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
  const user_id = req.query.user_id;

  if (!token) return res.status(401).json("Not logged in.");

  jwt.verify(
    req.cookies.accessToken,
    process.env.JWT_SECRET_KEY,
    (err, userInfo) => {
      if (err) return res.status(403).json("Token invalid.");

      //TODO join posts with followed user relations
      let postQuery = `SELECT * FROM posts WHERE user_id = ?`;

      db.query(postQuery, [user_id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
      });
    }
  );
};

export const addPost = (req, res) => {
  // TODO
};
