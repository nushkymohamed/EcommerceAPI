const express = require('express');
const bodyParser = require("body-parser");
const Order = require("../models/Order");
const orderRouter = express.Router();

orderRouter.use(bodyParser.json());

orderRouter.route('/')
    .get(async (req,res,next) =>{
        await Order.find({})
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
        await Order.find({})
            .then( async (order) =>{
                let orderIDArr=[];
                for(let i=0;i < order.length;i++  ){
                    orderIDArr[i]=order[i].productID;
                }
                let orderID=generateId(orderIDArr);
                let orderObj=req.body;
                orderObj.orderID=orderID;
                await Order.create(orderObj)
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

orderRouter.route('/:id')
    .get(async (req,res,next) => {
        await Order.findById(req.params.id)
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
        await Order.findByIdAndUpdate(req.params.id,{
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
        await Order.findByIdAndRemove(req.params.id)
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

/*Product ID */
function  generateId(orderIdArray)
{
    let orderId;
    let arrSize = orderIdArray.length;
    arrSize++;

    orderId="OR0"+arrSize;
    if(orderIdArray.includes(orderId))
    {
        arrSize++;
        orderId="ST0"+arrSize;
    }
    return orderId;
}

module.exports = orderRouter;