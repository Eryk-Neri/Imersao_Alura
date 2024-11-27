// Importando o modelo de posts
import  { getTodosPosts, criarPost } from "../models/postsModel.js";
import fs from "fs"

// Função para obter todos os posts
export async function listarPosts(req, rest) {
    const posts = await getTodosPosts();
    rest.status(200).json(posts);
}

export async function NewPost(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch (error) {
        console.log(erro.messagem);
        res.status(500).json({"Erro":"falha na requisição"})
    }
}
export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: "",
    };
    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
        fs.renameSync(req.file.path, imagemAtualizada);
        res.status(200).json(postCriado);
    } catch (error) {
        console.log(erro.messagem);
        res.status(500).json({"Erro":"falha na requisição"})
    }
}