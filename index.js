const express = require('express');

const app = express();

require('dotenv').config();

app.use(express.json());

const PORT = process.env.PORT || 3001;



app.get('/', (req, res) => {
  res.send('server is running');
});

app.post('/user', (req, res) => {
    const userDetails = [
        {username:"alice",age:25,email:"alice@example.com"},
        {username:"bob",age:30,email:"bob@example.com"},
        {username:"charlie",age:35,email:"charlie@example.com"},
    ];
  const { username, age, email } = req.body;
  if(!username){
    res.status(400).send({"Message":"User not found"});
}
   if(!username || !age || !email){
       res.status(400).send("User parameter cannot be empty");
   }
   res.status(201).send({"Message":"User found", "data":{userDetails}});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
  


