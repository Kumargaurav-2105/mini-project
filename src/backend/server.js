const express=require('express')
const app=express()
const cors=require('cors')
const bp=require('body-parser')
const jwt=require('jsonwebtoken')
const userCredentials=require('./data/credentials')
app.use(bp.json())
app.use(cors())

app.post('/signin',(req,res)=>{
const data=req.body
const result=userCredentials.find((item)=>item.email===data.email)
if(data.password===result.password){
    const token=jwt.sign({email:data.email},'jamesbond',{expiresIn:'1h'})
    res.send({"msg":'authenticated',"status":true,"accesstoken":token})
}
else{
    res.send({"msg":' not authenticated',"status":false})
}
})
app.listen(3001,()=>console.log('server started at port 3001'))
