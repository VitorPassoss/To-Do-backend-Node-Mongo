var express = require('express');
var router = express.Router();

var CadastroController = require('../controllers/CadastroControllers')
var LoginController = require('../controllers/LoginController')
var UsuariosControllers = require('../controllers/UsuariosControllers')
var TodoController = require('../controllers/TodoController')
var TaskController = require('../controllers/TaskController')
var DeleteController = require('../controllers/DeleteController')
var UpdateController = require('../controllers/UpdateController')
/* GET home page. */
router.get('/usuarios/:id?', UsuariosControllers.MostrarUsuario);
router.get('/tasks/:id?',TaskController.MostrarTasks)
router.post('/cadastro', CadastroController.sigin);
router.post('/login', LoginController.join);
router.post('/todoadd', TodoController.savetask);
router.get('/delete/:id', DeleteController.deletetask)
router.post('/update/', UpdateController.updatetask)

module.exports = router;
