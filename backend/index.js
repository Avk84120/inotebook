const connectDB = require('./db');
const express = require('express')

connectDB();

const app = express()
const port = 1000

app.use(express.json())
//Availabel Routes

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


app.listen(port, () => {
  console.log(`iNotebook Backend listening on port at http://localhost:${port}`)
})

