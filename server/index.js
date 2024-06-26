require('dotenv').config();
const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@atlascluster.lklamvj.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster`;

const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');
const chatRouter = require('./routes/chat');
const profileRouter = require('./routes/profile');
const adminRouter = require('./routes/admin');
const appointmentRouter = require('./routes/appointment');
const expertRouter = require('./routes/expert');
const { channel } = require('diagnostics_channel');


app.use(express.json()); 
const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

connectDB();

app.use('/api/auth', authRouter);
app.use('/api/post', postRouter);
//app.use('/api/chat', chatRouter);
app.use('/api/profile', profileRouter);
app.use('/api/admin', adminRouter);
app.use('/api/appointment', appointmentRouter);
app.use('/api/expert', expertRouter);
const cors = require('cors')
app.use(cors(
    {
        origin: '*',
    }
));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
