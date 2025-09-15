const express = require('express');
const app = express();
const cors = require('cors');
const jwt=require('jsonwebtoken')
const blogRoute = require('./routes/blogRoute');
const userRoute=require('./routes/userRoute')
require('dotenv').config();
require('./connection');
app.use(cors());
app.use(express.json());
app.use('/blog',blogRoute);
app.use('/user',userRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`);
});
