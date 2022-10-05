const express = require('express');
const bodyParser = require("body-parser");
const Category = require("../models/Category");
const categoryRouter = express.Router();

categoryRouter.use(bodyParser.json());

categoryRouter.route('/')
    .get(async (req,res,next) =>{
        await Category.find({})
            .then((category) =>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(category);
            },(err) =>{
                next(err);
            })
            .catch((err) =>{
                next(err);
            })

    })
    .post(async(req,res,next) =>{
        await Category.find({})
            .then( async (category) =>{
                let categoryIDArr=[];
                for(let i=0;i < category.length;i++  ){
                    categoryIDArr[i]=category[i].productID;
                }
                let categoryID=generateId(categoryIDArr);
                let categoryObj=req.body;
                categoryObj.orderID=categoryID;
                await Category.create(categoryObj)
                    .then((category) =>{
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(category);
                    },(err) =>{
                        next(err);
                    })
                    .catch((err) =>{
                        next(err);
                    })

            },(err) =>{
                next(err);
            })
            .catch((err) =>{
                next(err);
            })


    });

categoryRouter.route('/:id')
    .get(async (req,res,next) => {
        await Category.findById(req.params.id)
            .then((order) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(order);
            },(err) => {
                next(err);
            })
            .catch((err) => {
                next(err);
            })
    })
    .put(async (req, res, next) => {
        await Category.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{ new :true })
            .then((student) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(student);
            },(err) => {
                next(err);
            })
            .catch((err) => {
                next(err);
            })
    })
    .delete(async (req, res, next) => {
        await Category.findByIdAndRemove(req.params.id)
            .then((order) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(order);
            },(err) => {
                next(err);
            })
            .catch((err) => {
                next(err);
            })
    });

/*Category ID */
function  generateId(categoryIdArray)
{
    let categoryId;
    let arrSize = categoryIdArray.length;
    arrSize++;

    categoryId="CA0"+arrSize;
    if(categoryIdArray.includes(categoryId))
    {
        arrSize++;
        categoryId="CA0"+arrSize;
    }
    return categoryId;
}

module.exports = categoryRouter;