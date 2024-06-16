const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes/index.js");
const app = express();

app.use(cors);
app.use(express.json());//body parser



app.use("/api/v1", rootRouter);

// /api/v1/user/signup
// /api/v1/user/signin
// /api/v1/user/changePassword

// /api/v1/accounts/transferMoney
// /api/v1/accounts/balance




app.listen(3000,()=>{
  console.log("i am the best")
});


