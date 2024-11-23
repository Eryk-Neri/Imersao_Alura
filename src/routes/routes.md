# Pasta routes

**O que é:**
A pasta `routes` define as rotas da sua aplicação, ou seja, os endereços que o usuário pode acessar e as ações que serão executadas para cada um deles.

**Para que serve:**
As rotas mapeiam as requisições HTTP (GET, POST, PUT, DELETE) para os controladores responsáveis por processar essas requisições.

**Exemplo de arquivo:**
```javascript
// routes/users.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.get('/',   
 userController.getUsers);

module.exports = router; 