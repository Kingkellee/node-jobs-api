// Import modules
require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

// connectDB

// router
const authRouter = require('./routes/auth');
const jobsRouter = require('./routes/jobs');

// Error Handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());

// routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

// server
const port = process.env.PORT || 3000;
const start = async () => {
  try {
    app.listen(port, () => console.log(`server listening on PORT:${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
