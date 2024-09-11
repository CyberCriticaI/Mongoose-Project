require('dotenv').config();
// -----> Init() our env File
const express = require('express');
// -----> Imported Express
const app = express();
// -----> Initialize Express
const PORT = process.env.PORT || 3000;
const bikeController = require('./controllers/bikeController')
const studentController = require('./controllers/studentsController')

app.use(express.static('public'))
// ----------------------> {Setup}


// in order to determine routes, we FIRST must determine the capability of our data

app.get('/', () => {
  res.send('the root the root the root is on fyyyaa!!!');
});
// -----> Routing [Bikes]
app.get('/bikes', bikeController, bikeController.readBike)
// -----> Routing [Students]

// -----> Middleware
app.use((rq,res,next)=>{
    // ---> a req/res needs to be INTERCEPTERD and changed.
    console.log("Custom_MiddlewareHit!");
    next()
})


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});