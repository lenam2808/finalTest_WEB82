import { Router } from "express";
import { getAllProduct, createProduct, lowStockItems } from "../controllers/inventory.controllers.js";

const inventoryRouter = Router()

inventoryRouter.get('/', getAllProduct)
inventoryRouter.post('/create-product', createProduct)
inventoryRouter.get('/low-stock', lowStockItems)

export default inventoryRouter