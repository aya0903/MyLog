// 日記投稿処理
const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { user_id, emotion, content, tag, picture = null } = req.body;

  // db更新処理
  const day = new Date().toISOString().split("T")[0];
  const sql =
    "INSERT INTO diaries (user_id, day, content, emotion, tag, picture) VALUES (?, ?, ?, ?, ?, ?)";

  db.query(
    sql,
    [user_id, day, content, emotion, tag, picture],
    (err, result) => {
      if (err) {
        console.error("DBエラー", err);
        return res.status(500).json({
          success: false,
          message: "日記の登録に失敗しました",
        });
      }

      return res
        .status(200)
        .json({ success: true, message: "日記の登録が完了しました" });
    }
  );
});

module.exports = router;
