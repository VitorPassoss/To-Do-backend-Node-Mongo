var Tasks = require('../models/tasks_model')

 const DeleteController = {
    deletetask : (req,res) => {
        
        Tasks.deleteOne({userID: req.params.id},function(err,result){
            if(result){
                return res.send("deletado")
            }
            if(err){
                return res.send("erro")
            }



        });
   } 
}

module.exports = DeleteController
