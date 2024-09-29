const { app } = require(".");

const PORT = 8000;

app.listen(PORT, async ()=>{
    console.log('server is running on ',PORT);
})