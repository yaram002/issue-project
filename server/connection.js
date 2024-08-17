let mongoose=require('mongoose');

let schem=new mongoose.Schema({
title:{
    type:String
},
status:{
    type:String,
   
    required:true
},
priority:{
    type:String,
  
    required:true
},
date:{
    type:String
},
description:{
    type:String
},

}
);
let usrs=mongoose.model('issu',schem);
module.exports=usrs