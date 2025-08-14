const express = require("express");
const cors = require("cors");
const db = require("./db");
const loginRoutes = require("./routes/login");
const usersServices = require("./services/users");
const createUserServices = require("./services/createUser");
const updateEmailServices = require("./services/updateEmail");
const updatePasswordServices = require("./services/updatePassword");
const updateRegisterServices = require("./services/updateRegister");

const app = express();
const PORT = 3000;

// ミドルウェア
app.use(cors());
app.use(express.json());

// 各APIのルート
app.use("/api/login", loginRoutes);
app.use("/api/users", usersServices);
app.use("/api/createUser", createUserServices);
app.use("/api/updateEmail", updateEmailServices);
app.use("/api/updatePassword", updatePasswordServices);
app.use("/api/updateRegister", updateRegisterServices);

// 簡単なテスト用ルート
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
