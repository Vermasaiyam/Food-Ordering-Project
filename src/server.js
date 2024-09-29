const { app } = require(".");
const connectDB = require("./config/db.js");

const PORT = 8000;

app.listen(PORT, async ()=>{
    await connectDB();
    console.log('server is running on ',PORT);
})