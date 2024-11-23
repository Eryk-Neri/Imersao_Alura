# Pasta controllers

**O que é:**
A pasta `controllers` contém os controladores, que são responsáveis por lidar com as requisições HTTP recebidas pelo servidor e gerar as respostas. Eles atuam como intermediários entre as requisições do usuário e a lógica de negócios da aplicação.

**Para que serve:**
Os controladores definem as ações que serão executadas quando o usuário acessa uma determinada rota. Por exemplo, quando um usuário acessa a rota `/users`, o controlador responsável por essa rota buscará todos os usuários no banco de dados e retornará a lista como resposta.

**Exemplo de arquivo:**
```javascript
// UserController.js
const User = require('../models/User');

async function getUsers(req, res) {
  const users = await User.find();
  res.json(users);
}

module.exports = {
  getUsers
};