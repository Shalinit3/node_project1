import User from '../../models/userCollections';

export const add = function(req, res) {
    console.log(req.body);
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
};

export const del = function(req, res)  {
    console.log(req.body);
    User.remove({_id : req.body.id})
    .then(() => res.send({
        message : "Data Deleted Successfully",
    }))
   .catch((err) => res.send({
        message : "Error" + err,
    }))
}