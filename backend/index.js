const express = require("express");
const cors = require("cors");

app.use(cors);

app.use(express.json());//body parser

const mainRouter = require("./routes/index.js");
const app = express();

app.use("/api/v1", mainRouter);

// /api/v1/user/signup
// /api/v1/user/signin
// /api/v1/user/changePassword

// /api/v1/accounts/transferMoney
// /api/v1/accounts/balance




app.listen(3000);


