const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "メールアドレスとパスワードは必須です",
    });
  }

  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error("DBエラー:", err);
      return res
        .status(500)
        .json({ success: false, message: "サーバーエラーが発生しました" });
    }

    if (results.length === 0) {
      return res.status(401).json({
        success: false,
        message: "メールアドレスとパスワードが一致しません",
      });
    }

    // ログイン成功
    return res.status(200).json({ success: true, user: results[0] });
  });
});

module.exports = router;
