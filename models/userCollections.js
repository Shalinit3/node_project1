import mongoose from 'mongoose';
const schema = mongoose.Schema;

const USERDATA = new Schema({
    name : String ,
    email : { 
        type : String ,
        requires : true,
        unique : true,
    },
    phone : {
        type : Number,
        unique : true,
        requires : true,
    },
    date : {
        type : Date,
        default : Date.now,
    }
});

export default USERDATA ;