# Pasta models

**O que é:**
A pasta `models` define a estrutura dos dados que serão manipulados pela aplicação. Um modelo representa uma tabela no banco de dados ou uma entidade do seu sistema.

**Para que serve:**
Os modelos definem as propriedades de cada entidade e as relações entre elas. Eles são utilizados pelos controladores para realizar operações de criação, leitura, atualização e deleção de dados.

**Exemplo de arquivo (utilizando Mongoose):**
```javascript
// User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

module.exports = mongoose.model('User', userSchema);  