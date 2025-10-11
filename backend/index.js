const express = require("express");
const cors = require("cors");
const loginRoutes = require("./routes/login");
const usersServices = require("./services/users");
const createUserServices = require("./services/createUser");
const updateEmailServices = require("./services/updateEmail");
const updatePasswordServices = require("./services/updatePassword");
const updateRegisterServices = require("./services/updateRegister");
const postDiaryServices = require("./services/postDiary");
const diariesServices = require("./services/diaries");
const countDiaryServices = require("./services/countDiary");

const app = express();
const PORT = 3000;

// ミドルウェア
app.use(cors());
// JSON と URLエンコードされたデータのサイズ上限を増やす
app.use(express.json({ limit: "10mb" })); // 10MBまで受け付け
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// 各APIのルート
app.use("/api/login", loginRoutes);
app.use("/api/users", usersServices);
app.use("/api/createUser", createUserServices);
app.use("/api/updateEmail", updateEmailServices);
app.use("/api/updatePassword", updatePasswordServices);
app.use("/api/updateRegister", updateRegisterServices);
app.use("/api/postDiary", postDiaryServices);
app.use("/api/diaries", diariesServices);
app.use("/api/countDiary", countDiaryServices);

// 簡単なテスト用ルート
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
