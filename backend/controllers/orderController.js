import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

//placing order through COD
const placeorder = async(req,res)=>{
    try {
        const{userId,items,amount,address} = req.body;

        const oderData = {
            userId,
            items,
            amount,
            address:address,
            paymentMethod:"COD",
            payment:false,
            date:Date.now()
        }

        const newOrder = new orderModel(oderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true,message:'order placed'})


        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
        
    }

}


//placing order through stripe
const placeorderStripe = async(req,res)=>{
    
}

//placing order through Razorpay
const placeorderRazorpay = async(req,res)=>{
    
}

//all orders data for admin panel
const allOrders = async(req,res)=>{

    try {

        const orders = await orderModel.find({})

        res.json({success:true,orders})


        
    } catch (error) {

         console.log(error)
        res.json({success:false,message:error.message})
        
    }

}

//user orders for frontend
const userOrders = async(req,res)=>{
    try {
        const{userId} = req.body;

        const orders = await orderModel.find({ userId })

        res.json({success:true,orders})
        
    } catch (error) {
         console.log(error)
        res.json({success:false,message:error.message})
        
    }
    
}

//update order status from admin
const updateStatus  = async(req,res)=>{
    try {

        const {orderId,status} = req.body

        await orderModel.findByIdAndUpdate(orderId,{status})
        res.json({success:true,message:'Status Updated'})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
        
    }

}

export{placeorder,placeorderRazorpay,placeorderStripe,allOrders,userOrders,updateStatus}
