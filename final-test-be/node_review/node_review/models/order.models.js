import mongoose from "mongoose";
import { COLLECTIONS } from "../utils/collections.js";

const orderSchema = new mongoose.Schema({
    _id: {
        type: Number,
    },
    item: {
        type: String,
    },
    price: {
        type: Number,
    },
    quantity: {
        type: Number,
    }
})

const OrderModel = new mongoose.model(COLLECTIONS.ORDER, orderSchema)

export default OrderModel