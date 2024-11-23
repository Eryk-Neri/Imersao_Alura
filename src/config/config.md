# Pasta config

**O que é:**
A pasta `config` armazena arquivos que contêm as configurações do seu aplicativo. Essas configurações podem incluir:

* **Conexão com o banco de dados:** Informações como o nome do banco, usuário e senha.
* **Variáveis de ambiente:** Configurações que podem variar dependendo do ambiente (desenvolvimento, produção, etc.).
* **Outras configurações:** Quaisquer outras configurações específicas da sua aplicação.

**Para que serve:**
A pasta `config` centraliza todas as configurações do seu aplicativo, facilitando a manutenção e a atualização. Ao separar as configurações do código, você torna o seu código mais flexível e reutilizável.

**Exemplo de arquivo:**
```javascript
// config.js
module.exports = {
  database: {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydatabase'
  }
};