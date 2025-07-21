const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { name, birthday, gender, email, password } = req.body;

  if (!name || !birthday || !gender || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "未入力の項目があります",
    });
  }

  const emailCheck = "SELECT * FROM users WHERE email = ?";
  db.query(emailCheck, [email], (err, results) => {
    if (err) {
      console.error("DBエラー:", err);
      return res
        .status(500)
        .json({ success: false, message: "サーバーエラーが発生しました" });
    }

    if (results.length > 0) {
      return res.status(401).json({
        success: false,
        message: "すでにアカウントが存在します。",
      });
    }
  });

  // dbにinsertする処理
  const sql =
    "INSERT INTO users (name, birthday, gender, email, password) VALUES (?, ?, ?, ?, ?)";
  const values = [name, birthday, gender, email, password];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("DBエラー:", err);
      return res
        .status(500)
        .json({ success: false, message: "登録に失敗しました" });
    }

    return res
      .status(200)
      .json({ success: true, message: "登録が完了しました" });
  });
});

module.exports = router;
