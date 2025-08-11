const express = require("express");
const router = express.Router();
const db = require("../db");

// usersテーブルから全データ取得
router.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("データ取得エラー:", err);
      res.status(500).json({ error: "データ取得失敗" });
    } else {
      console.log("処理開始");
      console.log("取得件数:", results.length);
      console.log("結果:", JSON.stringify(results, null, 2));
      res.json(results);
    }
  });
});

module.exports = router;
