const express=require('express');
const router=express.Router();
const Professorsdata=require('../models/professor')

router.get('/',(req,res)=>{
    res.send('welcome user')
})

router.post('/signup',(req,res)=>{
    console.log(req.body);
   
    var Professor = {       
        name : req.body.professor.uname,
        email : req.body.professor.email,
        qulification : req.body.professor.qulification,
        experience : req.body.professor.experience,
        password : req.body.professor.password
   }       
   var data = new Professorsdata(Professor);
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

router.post('/login',checkuser,(req,res)=>{
    useremail=req.body.email;
    userpassword=req.body.password;
    let payload = {subject: email+password}
    let token = jwt.sign(payload, 'secretKey')
    res.status(200).send({token})  
})


module.exports=router;