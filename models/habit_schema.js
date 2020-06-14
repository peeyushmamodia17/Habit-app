const mongoose=require('mongoose');

const habitSchema=new mongoose.Schema({
    name:{
        type:String, 
        required:true
    },
    time:{
        type: String,
        required:true
    },
    day:{
        type:String,
        required:true
    },
    best:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    }
},
    {
        timestamps: true
    }
);

const habit=mongoose.model('habit',habitSchema);


module.exports=habit;