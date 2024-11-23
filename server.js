// Importando o módulo express para criar o servidor
import express from "express";
// Importando o módulo routes 
import routes from "./src/routes/postsRoutes.js";

// Criando uma instância do express
const app = express();

// Utilizando as rotas definidas
routes(app)

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
    console.log("Funcionado....");
});