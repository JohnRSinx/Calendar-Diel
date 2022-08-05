const express = require('express');
const app = express();
const mysql= require('mysql2');
const cors= require('cors');
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "@Jtr19970",
  database: "calendar",
})

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  let sql = "INSERT INTO task (title, description, date, time) VALUES('estudos','react', '2017-12-12' ,'12')";

  db.query(sql, (err, result) => {
    console.log(err);
  })
})

app.post("/register", (req, res) => {
  const {title,description,date,time} = req.body;

  let sql = "INSERT INTO task (title,description,date,time) VALUES (?,?,?,?)";
  db.query(sql, [title,description,date,time],(err,  result) => {
    console.log(err);
  })
  res.status(201).send('user cadastrado');  
})

app.get("/getCards",( _ , res)=>{
  let SQL = "SELECT * FROM task";

  db.query(SQL,(err,result)=>{
    if(err) console.log(err)
    else res.status(200).send(result);
  })
  
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
