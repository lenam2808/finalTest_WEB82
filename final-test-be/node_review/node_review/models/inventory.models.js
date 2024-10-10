import mongoose from "mongoose";
import { COLLECTIONS } from "../utils/collections.js";

const inventorySchema = new mongoose.Schema({
    // _id: {
    //     type: Number,
    // },
    sku: {
        type: String,
    },
    description: {
        type: String,
    },
    instock: {
        type: Number
    },
})

const InventoryModel = new mongoose.model(COLLECTIONS.INVENTORY, inventorySchema)

export const getProductDB = (data) => {
    return InventoryModel.find(data)
}

export const createProductDB = (data) => {
    return InventoryModel.create(data)
}

export const getlowStockItemsDB = (data) => {
        return InventoryModel.find(data)
   
}

export default InventoryModel