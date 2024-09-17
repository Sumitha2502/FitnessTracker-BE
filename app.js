// require express
const express = require('express');
const ConnectDB = require("./config/Database");

// import the user routes
const userRouter = require('./routes/userRoutes');
const goalRoute = require('./routes/goalRoute');
const nutritionRoute = require('./routes/nutritionRoute');
const sleepPatternRoute = require('./routes/sleepPatternRoute');

// create an express app
const app = express();

// require cors
const cors = require('cors');

// require cookie-parser
const cookieParser = require('cookie-parser');

// require morgan
const morgan = require('morgan');

// use the cors middleware
app.use(cors({
    //https://splendid-sable-ded7c2.netlify.app
    origin: ['https://splendid-sable-ded7c2.netlify.app', 'http://localhost:5173'],
    credentials: true
}));

// use the cookie-parser middleware
app.use(cookieParser());


// use the morgan middleware
app.use(morgan('dev'));

// use the express json middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.head('/api', (req, res) => {
    res.send('Welcome to JustFit');
});

// define the endpoints
app.use('/api/users', userRouter);
app.use('/api/goals', goalRoute);
app.use('/api/nutrition', nutritionRoute);
app.use('/api/sleep', sleepPatternRoute);

//Server listening
app.listen(3004, async () => {
    try {
        console.log("App is running...")
        await ConnectDB();
    } catch (error) {
        console.log("NOT CONNECTED!");
    }
});

