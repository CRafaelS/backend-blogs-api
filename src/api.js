const express = require('express');
const loginRouter = require('./routes/login');
const userRouter = require('./routes/user');
const categoryRouter = require('./routes/categoryRoute');
const blogPostRouter = require('./routes/blogPostRoute');
const { validateToken } = require('./middleware/validateToken');
// const errorMiddleware = require('./middleware/error');

// ...

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', validateToken, categoryRouter);
app.use('/post', validateToken, blogPostRouter);

// app.use(errorMiddleware);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
