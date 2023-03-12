import { db } from "../connect.js";

export const getLikes = (req, res) => {
  const likeQuery = "SELECT user_id FROM likes WHERE post_id = ?";

  db.query(likeQuery, [req.query.post_id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.map((like) => like.user_id));
  });
};

export const like = (req, res) => {
  //TODO
};

export const deleteLike = (req, res) => {
  //TODO
};
