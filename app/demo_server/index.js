const express = require("express");
const PORT = 3000;
const app = express();

app.get("/api", (req,res) =>{
    res.json({message: "Hi mum!"});
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});