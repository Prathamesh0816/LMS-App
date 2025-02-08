import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/mongodb.js';
import { clerkWebhooks } from './controllers/webhooks.js';

//Initialize Express
const app = express();

//Connect To Database
await connectDB();

//Middlewares
app.use(cors());

//Routes
app.get("/", (req, res)=>{
    res.send("API Is Working!!!");
})
app.post('/clerk', express.json(), clerkWebhooks)

//Port
const port = process.env.PORT || 5000;

//Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})