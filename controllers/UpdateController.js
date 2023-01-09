 var Tasks = require('../models/tasks_model')

const UpdateController = {
    updatetask : (req,res) => {
        const filter = { _id: req.params.id};
        const update = { title:req.body.title,task:req.body.task, state:req.body.state};

        Tasks.findOneAndUpdate(filter, update, function (err)
        {
        if (err)
        {
            res.json('nope');
        }
        else
        {
            res.json('yep');
        }
        })
        } 
        }

module.exports = UpdateController
