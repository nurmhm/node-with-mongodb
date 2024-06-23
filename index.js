 const express = require('express');
 const app = express();
 const cors = require("cors");

 const port = 5000;

//  middelwere
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('node server is running')
})

app.listen(port, ()=>{
    console.log(`node server is running on port ${port}`)
})