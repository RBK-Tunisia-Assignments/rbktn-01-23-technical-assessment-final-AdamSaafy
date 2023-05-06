const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser')
const router = require('./routes/recipiesRoute.js')


const app = express();
const PORT = 4000;

app.use(express.json())
app.use(cors());



// TODO - add additional route handlers as necessary


app.use('/api/recepie' , router)


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
