const express=require('express');
const router=express.Router();
const formdata=require('../models/studentform')

router.post('/register',(req,res)=>{
    var studentform = {       
        name:req.body.form.name,
       lastname :req.body.form.lastname,
        dob:req.body.form.dob,
        address:req.body.form.address,
        qulification:req.body.form.qulification,
        course:req.body.form.course,
        email:req.body.form.email,
        status:null
    }       
   var data = new formdata(studentform);
   data.save();
   console.log('saved')
   
   
})

router.put('/reject',(req,res)=>{
    id=req.body._id,
  
    formdata.findByIdAndUpdate({"_id":id},
                                 {$set:{"status" : "rejected",
                                 }})
    .then(function(){
        
        res.send();
    })
    

})

function checklimit(req,res,next){
    const course=req.body.course;
    formdata.count({"course":course})
    .then(data=>{
        if(data<=4){
            res.send();
            next();
        }else{
            res.status(401).send('sorry..over the limit')
        }
      
    })
    
}

router.put('/update',checklimit,(req,res)=>{
    // console.log(req.body)
    id=req.body._id,
  
   formdata.findByIdAndUpdate({"_id":id},
                                {$set:{"status" : "accepted",
                                }})
   .then(function(){
       
       res.send("Accepted");
   })
   
})

router.get('/',(req,res)=>{
   formdata.find({"status":null})
   .then(data=>{
       res.send(data)
   })
})

module.exports=router;