require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT;
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./utils/swagger/swagger');
const users = require('./routes/users');
const quiz = require('./routes/quiz');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', users);
app.use('/api/quiz', quiz);

// Swagger docs
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, (err) => {
    if(err) return err;
    console.log(`Server on ${PORT} is running...`);
});