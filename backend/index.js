import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoute from './route/book.route.js'


const app = express()

dotenv.config()

const PORT= process.env.PORT || 4000;
const URL=process.env.MONGO_URL;

// connect to mongoDB
try {
  mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  });
  console.log("Connected to MongoDB");
}catch (error) {
  console.log("Error: ",error);
}

// defining routes
app.use("/book", bookRoute);



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
