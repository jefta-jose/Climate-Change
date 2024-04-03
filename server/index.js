import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import Logger from './src/Utils/Logger.js';
import userRouter from './src/Routes/userRouter.js';
import blogRouter from './src/Routes/blogsRouter.js';
import initiativeRouter from './src/Routes/initiativesRouter.js';

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
};

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

//multa
app.use('/photos/users', express.static('src/photos/users'));

//testing health
app.get('/health', (req, res) => {
    res.status(200).send('I am very healthy💪');
});

// routes
app.use('/api', userRouter);
app.use('/api', blogRouter);
app.use('/api', initiativeRouter);

// start server
app.listen(port, () => {
    Logger.info(`Server running on http://localhost:${port}`);
});