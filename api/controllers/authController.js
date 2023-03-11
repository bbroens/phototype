import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  // Existing user check
  const selectUserQuery = "SELECT * FROM users WHERE username = ?";

  db.query(selectUserQuery, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User exists in db already.");

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    const userHandle = `${req.body.firstname}${req.body.lastname}`;

    // Create new user
    const newUserQuery =
      "INSERT INTO users (`username`,`password`,`firstname`,`lastname`, `handle`) VALUE (?)";

    const values = [
      req.body.username,
      hashedPassword,
      req.body.firstname,
      req.body.lastname,
      userHandle,
    ];

    db.query(newUserQuery, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User was created in db.");
    });
  });
};

export const login = (req, res) => {
  const loginQuery = "SELECT * FROM users WHERE username = ?";

  db.query(loginQuery, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found.");

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!checkPassword) return res.status(400).json("Incorrect login.");

    const token = jwt.sign(
      { user_id: data[0].user_id },
      process.env.JWT_SECRET_KEY
    );
    const { password, ...others } = data[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User logged out.");
};
