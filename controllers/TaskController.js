 var Tasks = require('../models/tasks_model')

 const UsuariosControllers = {
     MostrarTasks : (req,res) => {
        console.log(req.params.id)
   
    if(req.params.id != undefined){
        var id = req.params.id
        Tasks.find({userID:id}, function (err, user) {
            res.json(user)
        });
        
    }else {
        Tasks.find({}, function (err, user) {
            if (err) {
                return console.log(err);
                }
            return res.json(user);
        });
    }


    } 
}

module.exports = UsuariosControllers