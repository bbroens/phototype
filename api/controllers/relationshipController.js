import { db } from "../connect.js";

export const getRelationships = (req, res) => {
  const relationQuery =
    "SELECT follower_user_id FROM user_relationships WHERE followed_user_id = ?";

  db.query(relationQuery, [req.query.followedUserId], (err, data) => {
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

    const q =
      "INSERT INTO user_relationships (`follower_user_id`,`followed_user_id`) VALUES (?)";
    const values = [userInfo.user_id, req.body.userId];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Now following user.");
    });
  });
};

export const deleteRelation = (req, res) => {
  //TODO
};
