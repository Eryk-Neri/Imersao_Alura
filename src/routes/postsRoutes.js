// Importando o express e as rotas dos posts
import express from "express"; // Importa o framework Express.js para criar a aplicação web
import { listarPosts, NewPost, uploadImagem, atualizaPost } from "../controller/postsController.js"; // Importa as funções controladoras para posts (listarPosts, NewPost, uploadImagem) do arquivo postsController.js
import multer from "multer"; // Importa o middleware multer para manipular uploads de arquivos
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

const storage = multer.diskStorage({ // Define as configurações de armazenamento para uploads
  destination: function (req, file, cb) { // Função para definir o diretório de destino dos uploads
    cb(null, 'uploads/'); // Define o diretório 'uploads/' para armazenar os arquivos
  },
  filename: function (req, file, cb) { // Função para definir o nome do arquivo após o upload
    cb(null, file.originalname); // Usa o nome original do arquivo para mantê-lo
  }
});

const upload = multer({ dest: "./uploads", storage }); // Cria uma instância do middleware multer com as configurações de armazenamento

const routes = (app) => { // Função que define as rotas da aplicação
  // Permite que o servidor interprete requisições com JSON
  app.use(express.json()); // Habilita o middleware express.json para que o servidor possa entender dados enviados no formato JSON
  app.use(cors(corsOptions));
  // Define uma rota GET para "/posts":
  app.get("/posts", listarPosts); // Define uma rota que responde a requisições GET para "/posts" utilizando a função listarPosts

  // Define uma rota POST para "/posts": (corrigido para POST)
  app.post("/posts", NewPost); // Define uma rota que responde a requisições POST para "/posts" utilizando a função NewPost

  // Define uma rota POST para "/upload":
  app.post("/upload", upload.single("imagem"), uploadImagem); // Define uma rota que responde a requisições POST para "/upload" utilizando o middleware upload.single("imagem") para manipular o arquivo enviado com o campo "imagem" e, em seguida, executa a função uploadImagem
  
  app.put("/upload/:id", atualizaPost); 
};

export default routes; // Exporta a função routes para ser utilizada em outros arquivos