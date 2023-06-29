const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/ItemController')


router.post('/add-item', ItemController.addItem);

router.get('/get-item', ItemController.getItem);

router.patch('/update-item/:id',ItemController.updateItem);

router.delete('/delete-item/:id',ItemController.deleteItem);

module.exports = router;