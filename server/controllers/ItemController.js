const ItemList = require('../models/ItemModel');


const addItem = async(req,res) =>{
    try{
        const Item = new ItemList(req.body);
        await Item.save();
        res.status(201).json({
            status:'success',
            data:{Item,},
        });
    }catch (err) {
        res.status(500).json({
            status:'faild',
            message:err.message,
        });
    }
};

const getItem = async(req,res) =>{
    try{
        const Items = await ItemList.find({});
        res.status(200).json({
            status:'Success',
            data:{
                Items,
            },
        });
    }catch(err){
        res.status(500).json({
            status:'faild',
            message:err.message,
        });
    }
};

const updateItem = async(req,res) =>{
    try{
        const updateItem = await ItemList.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true,
                runValidators:true,

            }
        );
        res.status(200).json({
            status:'success',
            data:{
                updateItem
            },
        });
    } catch (err){
        res.status(500).json({
            status:'faild',
            message:err.message,
        });
    }
};

const deleteItem = async(req,res) => {
    try{
        await ItemList.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status:'success',
            date:{},
        });
    } catch (err){
        res.status(500).json({
            status:'failed',
            message:err.message,
        });
    }
};

module.exports = {
    addItem,
    deleteItem,
    updateItem,
    getItem,
}