// ホーム画面（日記表示）
const express = require("express");
const router = express.Router();
const db = require("../db");

// 一覧データ取得
router.get("/:userId", (req, res) => {
  const userId = req.params.userId;
  db.query(
    "SELECT * FROM diaries WHERE user_id = ?",
    [userId],
    (err, results) => {
      if (err) {
        console.error("データ取得エラー:", err);
        res.status(500).json({ error: "データ取得失敗" });
      } else {
        console.log("処理開始");
        console.log("取得件数:", results.length);
        console.log("結果:", JSON.stringify(results, null, 2));
        res.json(results);
      }
    }
  );
});

// 特定IDのデータ取得
router.get("/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM diaries WHERE id = ?", [id], (err, results) => {
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

// 特定IDのデータ削除
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM diaries WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error("データ削除エラー:", err);
      res.status(500).json({ error: "データ削除失敗" });
    } else {
      console.log("処理開始");
      console.log("結果:", JSON.stringify(results, null, 2));
      res.json(results);
    }
  });
});

// 特定IDのデータ更新
router.post("/:id", (req, res) => {
  const { content, picture, emotion, tag } = req.body;
  const id = req.params.id;
  db.query(
    "UPDATE diaries SET content = ?, picture = ?, emotion = ?, tag = ? WHERE id = ?",
    [content, picture, emotion, tag, id],
    (err, results) => {
      if (err) {
        console.error("データ更新エラー:", err);
        res.status(500).json({ error: "データ更新失敗" });
      } else {
        console.log("処理開始");
        console.log("結果:", JSON.stringify(results, null, 2));
        res.json(results);
      }
    }
  );
});

module.exports = router;
