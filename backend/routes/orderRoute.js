import express from "express"
import  adminAuth from "../middleware/adminAuth.js"
import {placeorder,placeorderRazorpay,placeorderStripe,allOrders,userOrders,updateStatus} from "../controllers/orderController.js"
import authUser from "../middleware/auth.js"

const orderRouter = express.Router()

//admin
orderRouter.post("/list",adminAuth,allOrders)
orderRouter.post("/status",adminAuth,updateStatus)

//user
orderRouter.post("/place",authUser,placeorder)
orderRouter.post("/stripe",authUser,placeorderStripe)
orderRouter.post("/razorpay",authUser,placeorderRazorpay)

//User Feature
orderRouter.post("/userorders",authUser,userOrders)


export default orderRouter
