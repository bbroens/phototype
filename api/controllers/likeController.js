import { db } from "../connect.js";

export const getLikes = (req, res) => {
  const likeQuery = "SELECT user_id FROM likes WHERE post_id = ?";

  db.query(likeQuery, [req.query.post_id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.map((like) => like.user_id));
  });
};

export const addLike = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in.");

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Token invalid.");

    const q = "INSERT INTO likes (`user_id`,`post_id`) VALUES (?)";
    const values = [userInfo.user_id, req.body.post_id];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post liked.");
    });
  });
};

export const deleteLike = (req, res) => {
  //TODO
};
