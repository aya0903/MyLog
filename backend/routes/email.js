const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { currentEmail, NewEmail, confirmEmail } = req.body;

  if (!NewEmail || !confirmEmail) {
    return res.status(400).json({
      success: false,
      message: "未入力の項目があります",
    });
  }
  if (!currentEmail) {
    return res.status(400).json({
      success: false,
      message: "現在のメールアドレスが取得できませんでした",
    });
  }
  if (NewEmail !== confirmEmail) {
    return res.status(400).json({
      success: false,
      message: "メールアドレスが一致しません",
    });
  }

  const emailCheck = "SELECT * FROM users WHERE email = ?";
  db.query(emailCheck, [NewEmail], (err, results) => {
    if (err) {
      console.error("DBエラー:", err);
      return res.status(500).json({
        success: false,
        message: "サーバーエラーが発生しました",
      });
    }
    if (results.length > 0) {
      return res.status(401).json({
        success: false,
        message: "すでに登録されているメールアドレスです",
      });
    }

    const sql = "UPDATE users SET email = ? WHERE email = ?";
    const values = [NewEmail, currentEmail];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("DBエラー:", err);
        return res.status(500).json({
          success: false,
          message: "変更に失敗しました",
        });
      }

      if (result.changedRows === 0) {
        return res.status(400).json({
          success: false,
          message: "変更内容が以前と同じです",
        });
      }
      return res.status(200).json({
        success: true,
        message: "メールアドレスを変更しました",
      });
    });
  });
});

module.exports = router;
