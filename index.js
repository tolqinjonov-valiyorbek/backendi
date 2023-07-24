const express = require('express');
const app = express()
const dotenv = require('dotenv')
const dbConnect = require('./config/db.js');
const authRouter = require('./routes/UserRoute.js'); 
const movieRouter = require('./routes/MoviesRoute.js'); 
const UploadRouter = require('./controllers/UploadFiles.js');
dotenv.config();
dbConnect();  
app.use(express.json());

app.use('/api/user', authRouter);
app.use('/api/movies', movieRouter);
app.use('/api/upload', UploadRouter);
//app.use(notFound)
const PORT =  5000

app.listen(PORT, () => {
    console.log(`server is running at PORT : ${PORT}`);
});