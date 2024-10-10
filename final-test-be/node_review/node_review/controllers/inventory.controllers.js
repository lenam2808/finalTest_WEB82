import {createProductDB, getlowStockItemsDB, getProductDB} from "../models/inventory.models.js"

export const getAllProduct = async (req, res) => {
    try {
      const listProduct = await getProductDB();
      res.status(200).send({
        listProduct,
      });
    } catch (error) {
      res.status(500).send({
        message: error.message,
      });
    }
  };

export const createProduct = async (req, res) => {
    const {userId} = req.query
    const {_id, sku, description, instock} = req.body
    try {
        const newProduct = {userId, sku, description, instock}
        const createNewProduct = await createProductDB(newProduct)
        res.status(201).send({
            message: 'Create success',
            product: createNewProduct,
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

export const lowStockItems  = async (req, res) => {
  const {quantity} = req.query
  try {
    const listProduct = await getProductDB();
    // console.log(listProduct.filter((product)=>product.instock <= 100))
    // if(quantity <= 100) {
      const listlowStockItems = listProduct.filter((product)=>product.instock <= 100);
      // console.log(listlowStockItems)
      res.status(200).send({
        listlowStockItems
      })
    // }
  } catch (error) {
    res.status(500).send({
      message: error.message
  })
  }
}