const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { id, email } = req.body;

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
  const sql = "UPDATE users SET email = ? WHERE id = ?";
  const values = [email, id];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("DBエラー:", err);
      return res
        .status(500)
        .json({
          success: false,
          message: "メールアドレスの更新に失敗しました",
        });
    }

    return res
      .status(200)
      .json({ success: true, message: "メールアドレスを更新しました" });
  });
});

module.exports = router;
