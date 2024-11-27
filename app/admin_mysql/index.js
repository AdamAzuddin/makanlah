const express = require("express");
const PORT = 3000;
const app = express();
const bodyParser = require("body-parser");

app.post('/api/admin_sql', (req, res) => {
    const{money, id, name, email, password, address} = req.body;
    console.log('Received data: ',{money, id, name, email, password, address});
    res.json({message: "Data received successfully!"});
});

app.get("/api", (req,res) =>{
    res.json({message: "Hi mum!"});
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});