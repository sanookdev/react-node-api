const express = require('express')
const morgan = require('morgan')

const cors = require('cors')
const bodyParser = require('body-parser')
const connectDB = require('./config/database')
const app = express()
connectDB()
app.use(morgan('dev')) // read api route

app.use(cors())
app.use(bodyParser.json({limit: '10mb'}))


const userModel = require('./model/userModel')


const PORT = 5000

app.get('/', function (req, res) {
  res.send('HI NODE')
})


app.get("/usersMode", async (req, res) => {
  const allUsers = await userModel.find();
  return res.status(200).json(allUsers);
});

app.use('/api',require('./routes'))

app.listen(PORT,()=> console.log(`SERVER IS RUNNING PORT = ${PORT}`))