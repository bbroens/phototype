import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

export const getPosts = (req, res) => {
  const user_id = req.query.user_id;
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not logged in.");

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    let postQuery = `SELECT * FROM posts`;
    if (user_id !== "undefined") {
      postQuery = `SELECT p.*, u.user_id AS user_id, u.firstname, u.lastname, u.profile_img 
      FROM posts AS p JOIN users AS u ON (u.user_id = p.user_id) 
      WHERE p.user_id = ? ORDER BY p.created_at DESC`;
    } else {
      postQuery = `SELECT p.*, u.user_id AS user_id, u.firstname, u.lastname, u.profile_img  
      FROM posts AS p JOIN users AS u ON (u.user_id = p.user_id) 
      LEFT JOIN user_relationships AS r ON (p.user_id = r.followed_user_id) 
      WHERE r.follower_user_id= ? OR p.user_id = ? ORDER BY p.created_at DESC`;
    }

    const values =
      user_id !== "undefined"
        ? [user_id]
        : [userInfo.user_id, userInfo.user_id];

    db.query(postQuery, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};

export const addPost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in.");

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Token not valid.");

    const addPostQuery =
      "INSERT INTO posts(`text`, `img`, `created_at`, `user_id`) VALUES (?)";
    const values = [
      req.body.text,
      req.body.img,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      userInfo.user_id,
    ];

    db.query(addPostQuery, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post has been created.");
    });
  });
};
