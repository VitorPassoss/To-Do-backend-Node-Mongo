 var User = require('../models/register_models')

  const UsuariosControllers = {
     MostrarUsuario : (req,res) => {
        console.log(req.params.id)
   
     if(req.params.id != undefined){
        var id = req.params.id
        User.findOne({_id:id}, function (err, user) {
            res.send(user)
        });
        
    }else {
        User.find({}, function (err, user) {
            if (err) {
                return console.log(err);
                }
            return res.json(user);
        });
    }


    } 
}

module.exports = UsuariosControllers
