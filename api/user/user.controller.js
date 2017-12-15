import User from '../../models/userCollections';
import { validate_email, validate_phone, validate_name } from "./user.validate.js";

 //function to add data to db
export const add = function(req, res) {
    //validating data provided in request body
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
//function to delete data from db for a particular _id
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
    //function to update data in db given a particular _id
    User.find({_id : req.body.id})
    .then((respond) => {
        // validating data provided in request body. If provided and validates it is updated.
        const name = req.body.name && validate_name(req.body.name) ? req.body.name :  respond[0].name ;
        const email = req.body.email && validate_email(req.body.email) ? req.body.email : respond[0].email;
        const phone = req.body.phone && validate_phone(req.body.phone) ? req.body.phone : respond[0].phone;
        const output = User.findOneAndUpdate({_id : req.body.id}, 
                                             {$set: { name : name, email : email, phone : phone}})
        .then((resp) => res.send({
            message : "Updated successfully",
            resp : resp,
        }))
       .catch((err) => res.send({
            message : "Error" + err,
        }))
    })
   .catch((err) => res.send({
        message : "Error" + err,
    }))
}





