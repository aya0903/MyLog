const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// ミドルウェア
app.use(cors());
app.use(express.json()); // JSONのリクエストボディを扱えるようにする

// 簡単なテスト用ルート
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
