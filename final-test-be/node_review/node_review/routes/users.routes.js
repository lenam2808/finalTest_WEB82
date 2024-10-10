import { Router } from "express";
import { register,getAllUser, login } from "../controllers/users.controllers.js";
import authMiddleware from "../middlewares/auth.middlewares.js";
const userRouter = Router()

// userRouter.post('/register', register)
// userRouter.post('/login', login)

userRouter.get('/', getAllUser)

export default userRouter