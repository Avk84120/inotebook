// const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/";

// const connectToMongo =()=>{
//     mongoose.connect(mongoURI,()=>{
//         console.log("Connected to mongo Successfully");
//     })
// }

// module.exports = connectToMongo; 
const mongoose = require('mongoose');

const connectDB =()=> {
  try {
     mongoose.connect('mongodb://localhost:27017/inotebook', {
      ///useNewUrlParser: true,
      //useUnifiedTopology: true,
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
}

module.exports = connectDB;
