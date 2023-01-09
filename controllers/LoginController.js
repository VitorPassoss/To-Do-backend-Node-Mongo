var User = require('../models/register_models')
var jwt = require('jsonwebtoken')
 const bcrypt = require("bcrypt");

const LoginController = {
        join: (req,res)=>{   
            console.log(req.body)
            if(req.body.name != "" && req.body.email != "" && req.body.password != ""){
            User.find({email:req.body.email },function(error,response){
                if(!error){
                    if(response != "[]" || response != null || response != "" || response != undefined || response.length != 0){
                        passwordInput = req.body.password
                        passwordDB = response[0].password
                        
                        bcrypt.compare(passwordInput, passwordDB, function (err, result) {
                            if(result == true){
                                
                                let token = jwt.sign({usuario:response[0].name}, '99746510Gg@', {
                                    expiresIn: 1440
                                });
                                data = {
                                    "tokenUser":token,
                                    "dataUser":response
                                }
                                return res.json(data)
                            }else{
                                return res.json
                            }
                          });
    
                    }else{
                        res.send("usuario não existe")
                    }
                }

            })
        }else{
            return console.log("erro")
        }
    }


}

module.exports = LoginController
