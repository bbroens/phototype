import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getRelationships = (req, res) => {
  const relationQuery =
    "SELECT follower_user_id FROM user_relationships WHERE followed_user_id = ?";

  db.query(relationQuery, [req.query.followed_user_id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res
      .status(200)
      .json(data.map((relationship) => relationship.follower_user_id));
  });
};

export const addRelationship = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in.");

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Token invalid.");

    const insertQuery =
      "INSERT INTO user_relationships (`follower_user_id`,`followed_user_id`) VALUES (?)";
    const values = [userInfo.user_id, req.body.userId];

    db.query(insertQuery, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Now following user.");
    });
  });
};

export const deleteRelationship = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in.");

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Token invalid.");

    const deleteQuery =
      "DELETE FROM user_relationships WHERE `follower_user_id` = ? AND `followed_user_id` = ?";

    db.query(deleteQuery, [userInfo.user_id, req.query.userId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Unfollowing.");
    });
  });
};
