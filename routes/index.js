const express = require('express');
const router = express.Router();

// Products
const routerGetAllProducts = require('./records/route.getAllRecords.js');
const routerAddProduct = require('./records/route.addRecord');
const routerUpdateProduct = require('./records/route.updateRecord');
const routerDeleteProductById = require('./records/route.deleteRecordById');
router.use(routerGetAllProducts);
router.use(routerAddProduct);
router.use(routerUpdateProduct);
router.use(routerDeleteProductById);

module.exports = router;
