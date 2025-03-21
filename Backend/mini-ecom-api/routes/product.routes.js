const express =require('express');
const router=express.Router();
const {getProducts, getProductById,addProduct}=require('../controllers/productController');
const authMiddleware=require('../middleware/auth');

router.get('/',getProducts);
router.get('/:id',getProductById);
router.post('/',authMiddleware,addProduct);
module.exports=router;