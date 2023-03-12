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
  //TODO
};

export const deleteRelation = (req, res) => {
  //TODO
};
