import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getUser = (req, res) => {
  const user_id = req.params.user_id;
  const userQuery = "SELECT * FROM users WHERE id=?";

  db.query(userQuery, [user_id], (err, data) => {
    if (err) return res.status(500).json(err);
    const { password, ...info } = data[0];
    return res.json(info);
  });
};

export const updateUser = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not authenticated.");

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Token invalid.");

    const updateQuery =
      "UPDATE users SET `username`=?,`firstname`=?,`lastname`=?,`handle`=?,`profile_pic`=? WHERE id=? ";

    db.query(
      updateQuery,
      [
        req.body.username,
        req.body.firstname,
        req.body.lastname,
        req.body.handle,
        req.body.profile_pic,
        userInfo.user_id,
      ],
      (err, data) => {
        if (err) res.status(500).json(err);
        if (data.affectedRows > 0) return res.json("User updated.");
        return res.status(403).json("Not authorized to update user.");
      }
    );
  });
};
