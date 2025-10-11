// ログ画面(投稿数・文字数)
const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const userId = req.body.user_id;
  db.query(
    "SELECT content FROM diaries WHERE user_id = ?",
    [userId],
    (err, results) => {
      if (err) {
        console.error("データ取得エラー:", err);
        res.status(500).json({ error: "データ取得失敗" });
      } else {
        console.log("処理開始");
        let totalChars = 0;
        for (const row of results) {
          const cleanText = row.content.replace(/\s/g, "");
          totalChars = totalChars + cleanText.length;
        }

        console.log("投稿数:", results.length);
        console.log("合計文字数:", totalChars);
        console.log("結果:", JSON.stringify(results, null, 2));
        res.json({ totalPosts: results.length, totalChars: totalChars });
      }
    }
  );
});

module.exports = router;
