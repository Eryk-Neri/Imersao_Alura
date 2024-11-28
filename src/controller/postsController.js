// Importando o modelo de posts
import  { getTodosPosts, criarPost,atualizarPost } from "../models/postsModel.js";
import fs from "fs"
import gerarDescricaoComGemini from "../services/geminiService.js";

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
        console.log(error.messagem);
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
        console.log(error.messagem);
        res.status(500).json({"Erro":"falha na requisição"})
    }
}

export async function atualizaPost(req, res) {
    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.png`;
    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
        const descricao = await gerarDescricaoComGemini(imgBuffer);

        const post ={
            imgUrl: urlImagem,
            descricao: descricao,
            alt: req.body.alt
        }

        const postCriado = await atualizarPost(id, post);
        res.status(200).json(postCriado);
    } catch (error) {
        console.log(error);
        res.status(500).json({"Erro":"falha na requisição"})
    }
}