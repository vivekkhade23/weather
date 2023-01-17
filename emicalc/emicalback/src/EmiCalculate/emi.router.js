const express=require("express")

const app=express.Router()


app.post("/",async(req,res)=>{
    try{
        const {amount,interest,tenure}=req.body
        let r=interest/12/100
        let e = (amount *r*( 1 + r )**tenure) / ( ( 1 + r )**tenure-1) 
        let total=e*tenure
        let ipayable=total-amount
      
        if(amount<=0 || tenure<=0){
            res.status(404).send({message:"Invalid details"})
        }
      
        res.send({emi:e,totalPayable:total,interestPayable:ipayable})
    }
    catch(e){
        res.status(404).send({error:e})
    }
})

module.exports = app;