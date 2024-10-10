import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv"
import inventoryRouter from './routes/inventory.routes.js';
import userRouter from './routes/users.routes.js';
import { login, register } from './controllers/users.controllers.js';
import authMiddleware from './middlewares/auth.middlewares.js';

dotenv.config()
//ket noi toi database
await mongoose.connect(process.env.MONGO_DB);

const app = express();
app.use(express.json());
app.post('/register', register)
app.post('/login', login)

// app.use(authMiddleware.authentication)

app.use('/users', userRouter)
app.use('/inventory', inventoryRouter)



app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`)
})