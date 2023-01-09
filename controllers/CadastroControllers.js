var User = require('../models/register_models')
const bcrypt = require("bcrypt");

 const CadastroController = {

    sigin: (req,res)=>{

      if(req.body.name != '' && req.body.email != '' && req.body.password != ''){
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(req.body.password, salt, function (err, hash) {
            console.log(hash)
            let signin = new User(
              {
              name: req.body.name,
              email: req.body.email,
              password : hash
              }
              );
            User.find({email:req.body.email },function(err,response){
                if(response == "[]" || response == null || response == ""){
                    signin.save(function (err) {
                      if (err) {
                      return res.send(err);
                      }
                    res.send('registrado com sucesso!')
                    })
                }else{
                  console.log(err)
                  return res.send("esse usuario ja existe")
                }
            });
            
          });
        });
  
      }
      
     
          
           
    }



}

module.exports = CadastroController
