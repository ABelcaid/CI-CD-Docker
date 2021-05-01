const express = require('express')
const app = express()
const port = 3000;
const data =  require("./data.json");


app.get("/", (req, res) => {
    res.status(200).json(data);
   

 });

 app.get('/:id',(req,res)=>{

        const id =req.params.id;
        const User = data.find(user => user.id === id);
        res.json(User)
          res.status(201).send(User);
  


 });

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

module.exports = app
