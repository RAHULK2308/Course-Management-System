const express=require('express')
const router=express.Router();
const studentschema=require('../models/students');
const jwt=require('jsonwebtoken')

router.get('/',(req,res)=>{
    res.send('welcome user')
})

router.post('/signup',(req,res)=>{
    var student = {       
        name : req.body.student.uname,
        email : req.body.student.email,
        password : req.body.student.password
   }       
   var data = new studentschema(student);
   data.save();
   console.log('saved')
})

function checkuser(req,res, next){
    useremail=req.body.email;
    userpassword=req.body.password;
    studentschema.findOne({email:useremail})
  .then(function(data){
    if (useremail==data?.email && userpassword == data?.password){
        console.log("you are in user")
        next()}else{
        res.status(401).send('Invalid Login Attempt')
      }
  })
}

router.post('/login', checkuser,(req,res)=>{
    email=req.body.email;
    password=req.body.password;
    let payload = {subject: email+password}
    let token = jwt.sign(payload, 'secretKey')
    res.status(200).send({token})
})


module.exports=router;