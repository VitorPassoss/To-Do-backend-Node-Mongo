var Tasks = require('../models/tasks_model')

 const DeleteController = {
    deletetask : (req,res) => {
        Tasks.deleteOne({ _id: req.params.id},function(err,result){
            if(result.acknowledged == true){
                return res.send("dado deletado com sucesso")
            }else{
                return res.send("houve algum erro na exclusão desse dado")
            }
        });
   } 
}

module.exports = DeleteController
