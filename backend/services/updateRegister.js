const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { id, name, birthday, gender } = req.body;

  // DB更新処理
  const sql = "UPDATE users SET name = ?, birthday = ?, gender = ? WHERE id =?";
  db.query(sql, [name, birthday, gender, id], (err, result) => {
    if (err) {
      console.error("DBエラー:", err);
      return res.status(500).json({
        success: false,
        message: "会員情報の更新に失敗しました",
      });
    }

    return res
      .status(200)
      .json({ success: true, message: "会員情報を更新しました" });
  });
});

module.exports = router;
