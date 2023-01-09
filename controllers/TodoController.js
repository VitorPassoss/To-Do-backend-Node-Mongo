 var Tasks = require('../models/tasks_model')

const TodoController = {
    savetask : (req,res) => {
        let task_save = new Tasks(
            {
            userID: req.body.userid,
            title: req.body.title,
            task : req.body.task,
            state: req.body.state
            }
            );
        task_save.save(function (err) {
            if (err) {
            return res.send(err);
            }
            return res.send('task salva com sucesso')
            })
   } 
}

module.exports = TodoController
