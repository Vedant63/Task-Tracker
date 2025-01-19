const express = require('express');
const app = express();
require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 3000;
const TaskRouter = require('./Routes/TaskRouter');
const bodyParser = require('body-parser');
const cors = require('cors');

app.get('/', (req,res) =>{
    res.send('Hello from server');
})

// for frontend port
app.use(cors())

// middleware finc
app.use(bodyParser.json());
app.use('/tasks',TaskRouter)



// app.listen(PORT, ()=>{
//     console.log('Server is running on PORT ${PORT}');

// })

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
  // Handle cleanup on restart
  process.on('SIGTERM', () => {
    server.close(() => {
      console.log('Server process terminated');
    });
  });
  
  process.on('SIGINT', () => {
    server.close(() => {
      console.log('Server process interrupted');
    });
  });