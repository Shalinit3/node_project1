import User from '../../models/userCollections';
import { validate_email, validate_phone, validate_name } from "./user.validate.js";

export const add = function(req, res) {
    if(validate_email(req.body.email) && validate_phone(req.body.phone) && validate_name(req.body.name) ){
        var myData = new User(req.body);
        myData.save()
        .then(() => res.send({
            data : req.body,
            message : "Data Saved",
        }))
        .catch((err) => res.send({
            data : false,
            message : "Error" + err,
        }))
    } 
    else {
        res.send({
            data : false,
            message : "Enter Valid Data",
        })
    }   
}

export const del = function(req, res)  {
    User.remove({_id : req.body.id})
    .then((respond) => res.send({
        message : "Data Deleted Successfully",
        respond : respond,
    }))
   .catch((err) => res.send({
        message : "Error" + err, 
    }))
}

export const update = function(req, res)  {
    User.find({_id : req.body.id})
    .then((respond) => {
        const name = req.body.name && validate_name(req.body.name) ? req.body.name :  respond[0].name ;
        const email = req.body.email && validate_email(req.body.email) ? req.body.email : respond[0].email;
        const phone = req.body.phone && validate_phone(req.body.phone) ? req.body.phone : respond[0].phone;
        const output = User.findOneAndUpdate({_id : req.body.id}, 
                                             {$set: { name : name, email : email, phone : phone}})
        .then((resp) => res.send({
            message1 : "Updated successfully",
            resp : resp,
        }))
       .catch((err) => res.send({
            message2 : "Error" + err,
        }))
    })
   .catch((err) => res.send({
        message3 : "Error" + err,
    }))
}





