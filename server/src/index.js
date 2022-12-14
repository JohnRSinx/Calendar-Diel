const express = require('express');
const app = express();
const mysql= require('mysql2');
const cors= require('cors');
const env= require('../env.json');
const db = mysql.createPool(env.connection)

app.use(cors());
app.use(express.json())


app.get("/getCards",( _ , res)=>{
  let sql = "SELECT * FROM task";

  db.query(sql,(err,result)=>{
    if(err) console.error(err)
    else res.status(200).send(result);
  })
})

app.post("/register", (req, res) => {
  const {title,description,date,time} = req.body;

  let sql = "INSERT INTO task (title,description,date,time) VALUES (?,?,?,?)";
  db.query(sql, [title,description,date,time],(err, _) => {
    console.log(err);
  })
  res.status(201).send('user cadastrado');
})


app.put("/edit",(req , res)=>{
  const {id,title,description,date,time} = req.body;

  let sql = "UPDATE task SET title=? , description=? , date=? , time=? WHERE id=? ;"

  db.query(sql,[title,description,date,time,id],(err, result)=>{
    if(err) console.log(err)
    else res.send(result)
  })
})


app.delete("/delete/:id", (req , res)=>{
  const {id}= req.params;
  let sql = "DELETE FROM task WHERE id=?";
  db.query(sql,[id],(err, result)=>{
    console.log(result);
    if(err) console.log(err)
    else res.status(204).send('User deleted')
  });
})

app.listen(3001,()=> {
  console.log("Rodando servidor")
})
