const express = require('express');
const app = express();
const port = process.env.PORT || 5055;
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
app.use(cors());
app.use(bodyParser.json());
const uri = "mongodb+srv://shikkhok-database-user-01:$QJxXDF8OT9VtFXQQ@hay-store-cluster-01.coi91.mongodb.net/shikkhok-user-db?retryWrites=true&w=majority";
const userDatabaseURI = `mongodb+srv://${process.env.databaseUser}:${process.env.databasePassword}@hay-store-cluster-01.coi91.mongodb.net/${process.env.userDatabase}?retryWrites=true&w=majority`
const userClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const userCollection = userClient.db(`${process.env.userDatabase}`).collection("user");
userClient.connect(err => {
  const userCollection = userClient.db(`${process.env.userDatabase}`).collection("user");
  
})

app.get('/users', (req, res) => {
  userCollection.find()
    .toArray()
    .then(items =>{
      res.send(items);
    })
})

app.get('/', (req, res) => {
  res.send('Shikkhok Server Site Locally Connected')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const showTimes = () => {
  let result = '';
  const times = process.env.TIMES || 5;
  let i =0;
  for (i = 0; i < times; i++) {
    result += i + ' ';
  }
  return result;
}

app.get('/times', (req, res) => res.send(showTimes()))