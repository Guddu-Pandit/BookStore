import express from 'express'
import dotenv from 'dotenv'
const app = express()

dotenv.config()

const PORT= process.env.PORT || 4000;
const URL=process.env.MONGO_URL;


try {
  mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  });
  console.log("Connected to MongoDB");
}catch (error) {
  console.log("Error: ",error);
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
