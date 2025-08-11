const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { id, password, newPassword } = req.body;

  // idをもとに入力された古いパスワードとDBのパスワードがあってるか
  const passwordCheck = "SELECT * FROM users WHERE id = ? AND password = ?";
  db.query(passwordCheck, [id, password], (err, result) => {
    if (err) {
      console.error("DBエラー:", err);
      return res
        .status(500)
        .json({ success: false, message: "サーバーエラーが発生しました" });
    }

    // あってなかったらエラーではじく
    if (result.length === 0) {
      return res.status(400).json({
        success: false,
        message: "現在のパスワードが一致しません。",
      });
    }
  });
  // DB更新処理
  const sql = "UPDATE users SET password = ? WHERE id = ?";
  db.query(sql, [newPassword, id], (err, result) => {
    if (err) {
      console.error("DBエラー:", err);
      return res.status(500).json({
        success: false,
        message: "パスワードの更新に失敗しました",
      });
    }

    return res
      .status(200)
      .json({ success: true, message: "パスワードを更新しました" });
  });
});

module.exports = router;
