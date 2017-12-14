import mongoose from 'mongoose';
const schema = mongoose.Schema;

const User = new schema({
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

export default mongoose.model('userData', User) ;