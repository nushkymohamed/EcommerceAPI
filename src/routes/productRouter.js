const express = require('express');
const bodyParser = require("body-parser");
const Product = require("../models/Products");
const productRouter = express.Router();

productRouter.use(bodyParser.json());

productRouter.route('/')
    .get(async (req,res,next) =>{
        await Product.find({})
            .then((product) =>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(product);
            },(err) =>{
                next(err);
            })
            .catch((err) =>{
                next(err);
            })

    })
    .post(async(req,res,next) =>{
        await Product.find({})
            .then( async (product) =>{
                let productIDArr=[];
                for(let i=0;i < product.length;i++  ){
                    productIDArr[i]=product[i].productID;
                }
                let productID=generateId(productIDArr);
                let productObj=req.body;
                productObj.productID=productID;
                await Product.create(productObj)
                    .then((product) =>{
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(product);
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

productRouter.route('/:id')
    .get(async (req,res,next) => {
        await Product.findById(req.params.id)
            .then((product) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(product);
            },(err) => {
                next(err);
            })
            .catch((err) => {
                next(err);
            })
    })
    .put(async (req, res, next) => {
        await Product.findByIdAndUpdate(req.params.id,{
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
        await Product.findByIdAndRemove(req.params.id)
            .then((product) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(product);
            },(err) => {
                next(err);
            })
            .catch((err) => {
                next(err);
            })
    });

/*Product ID */
function  generateId(productIdArray)
{
    let productId;
    let arrSize = productIdArray.length;
    arrSize++;

    productId="P0"+arrSize;
    if(productIdArray.includes(productId))
    {
        arrSize++;
        productId="ST0"+arrSize;
    }
    return productId;
}

module.exports = productRouter;