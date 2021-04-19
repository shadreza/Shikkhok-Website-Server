const express = require('express');
const port = process.env.PORT || 5055;
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express()
app.use(cors());
app.use(bodyParser.json());


const userDatabaseURI = `mongodb+srv://${process.env.databaseUser}:${process.env.databasePassword}@hay-store-cluster-01.coi91.mongodb.net/${process.env.userDatabase}?retryWrites=true&w=majority`
const userClient = new MongoClient(userDatabaseURI, { useNewUrlParser: true, useUnifiedTopology: true });

userClient.connect((err) => {
  console.log('err khaise mongo hayre' , err);
  const userCollection = userClient.db(process.env.userDatabase).collection("user");
  app.get('/users', (req, res) => {
    userCollection.find()
      .toArray()
      .then(items =>{
        res.send(items);
      })
  })
  
})


const adminDatabaseURI = `mongodb+srv://${process.env.databaseUser}:${process.env.databasePassword}@hay-store-cluster-01.coi91.mongodb.net/${process.env.adminDatabase}?retryWrites=true&w=majority`
const adminClient = new MongoClient(adminDatabaseURI, { useNewUrlParser: true, useUnifiedTopology: true });

adminClient.connect((err) => {
  console.log('err khaise mongo hayre' , err);
  const adminCollection = adminClient.db(process.env.adminDatabase).collection("admins");
  app.get('/admins', (req, res) => {
    adminCollection.find()
      .toArray()
      .then(items =>{
        res.send(items);
      })
  })
  app.post('addAdmins' ,(req, res) => {
    const addData = req.body;
    console.log("adding new data on" , addData);
    adminCollection.insertOne(addData)
    .then(result=>{
      console.log("successfully inseterd for ",result.insertedCount);
      res.send(result.insertedCount>0)
    })
    .catch(e=>{
      console.log("data could not be inserted for \n",e);
    })
  }
  
})


const teachersDatabaseURI = `mongodb+srv://${process.env.databaseUser}:${process.env.databasePassword}@hay-store-cluster-01.coi91.mongodb.net/${process.env.teachersDatabase}?retryWrites=true&w=majority`
const teachersClient = new MongoClient(teachersDatabaseURI, { useNewUrlParser: true, useUnifiedTopology: true });

teachersClient.connect((err) => {
  console.log('err khaise mongo hayre' , err);
  const teachersCollection = teachersClient.db(process.env.teachersDatabase).collection("teachers");
  app.get('/teachers', (req, res) => {
    teachersCollection.find()
      .toArray()
      .then(items =>{
        res.send(items);
      })
  })
  
})


const userFeedbackDatabaseURI = `mongodb+srv://${process.env.databaseUser}:${process.env.databasePassword}@hay-store-cluster-01.coi91.mongodb.net/${process.env.userFeedbackDatabase}?retryWrites=true&w=majority`
const userFeedbackClient = new MongoClient(userFeedbackDatabaseURI, { useNewUrlParser: true, useUnifiedTopology: true });

userFeedbackClient.connect((err) => {
  console.log('err khaise mongo hayre' , err);
  const userFeedbackCollection = userFeedbackClient.db(process.env.userFeedbackDatabase).collection("feedbacks");
  app.get('/feedbacks', (req, res) => {
    userFeedbackCollection.find()
      .toArray()
      .then(items =>{
        res.send(items);
      })
  })
  
})



const courseDatabaseURI = `mongodb+srv://${process.env.databaseUser}:${process.env.databasePassword}@hay-store-cluster-01.coi91.mongodb.net/${process.env.courseDatabase}?retryWrites=true&w=majority`
const courseClient = new MongoClient(courseDatabaseURI, { useNewUrlParser: true, useUnifiedTopology: true });

courseClient.connect((err) => {
  console.log('err khaise mongo hayre' , err);
  const courseCollection = courseClient.db(process.env.courseDatabase).collection("courses");
  app.get('/courses', (req, res) => {
    courseCollection.find()
      .toArray()
      .then(items =>{
        res.send(items);
      })
  })
  
})



const reviewsDtabaseURI = `mongodb+srv://${process.env.databaseUser}:${process.env.databasePassword}@hay-store-cluster-01.coi91.mongodb.net/${process.env.reviewsDtabase}?retryWrites=true&w=majority`
const reviewsClient = new MongoClient(reviewsDtabaseURI, { useNewUrlParser: true, useUnifiedTopology: true });

reviewsClient.connect((err) => {
  console.log('err khaise mongo hayre' , err);
  const reviewsCollection = reviewsClient.db(process.env.reviewsDtabase).collection("reviews");
  app.get('/reviews', (req, res) => {
    reviewsCollection.find()
      .toArray()
      .then(items =>{
        res.send(items);
      })
  })
  
})




const serviceDatabaseURI = `mongodb+srv://${process.env.databaseUser}:${process.env.databasePassword}@hay-store-cluster-01.coi91.mongodb.net/${process.env.serviceDatabase}?retryWrites=true&w=majority`
const serviceClient = new MongoClient(serviceDatabaseURI, { useNewUrlParser: true, useUnifiedTopology: true });


serviceClient.connect((err) => {
  console.log('err khaise mongo hayre' , err);
  const serviceCollection = serviceClient.db(process.env.serviceDatabase).collection("services");
  app.get('/services', (req, res) => {
    serviceCollection.find()
      .toArray()
      .then(items =>{
        res.send(items);
      })
  })
  
})





const userOrdersListDatabaseURI = `mongodb+srv://${process.env.databaseUser}:${process.env.databasePassword}@hay-store-cluster-01.coi91.mongodb.net/${process.env.userOrdersListDatabase}?retryWrites=true&w=majority`
const userOrdersListClient = new MongoClient(userOrdersListDatabaseURI, { useNewUrlParser: true, useUnifiedTopology: true });


userOrdersListClient.connect((err) => {
  console.log('err khaise mongo hayre' , err);
  const userOrdersListCollection = userOrdersListClient.db(process.env.userOrdersListDatabase).collection("orders-list");
  app.get('/orders-list', (req, res) => {
    userOrdersListCollection.find()
      .toArray()
      .then(items =>{
        res.send(items);
      })
  })
})


app.get('/', (req, res) => {
  res.send('Shikkhok Server Site Locally Connected')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
