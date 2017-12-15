export const validate_name = function (name){
    var reg=/^[a-zA-Z]([._-]?[a-zA-Z0-9]+)*$/;
    if(!reg.test(name)){
       return 0;
    }
    else{
        return 1;
    }
}

export const validate_email = function ( email ){
    var reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(!reg.test(email)){
        return 0;
    }
    else{
        return 1;
    }
}

export const validate_phone = function (phone){
    var reg = /^(\+\d{1,2})?\(?\d{3}\)?\d{3}\d{4}$/;
    if(!reg.test(phone)){
        return 0;
    }
    else{
        return 1;
    }
}