// Importando o modelo de posts
import getTodosPosts from "../models/postsModel.js";

// Função para obter todos os posts
export async function listarPosts(req, rest) {
    const posts = await getTodosPosts();
    rest.status(200).json(posts);
}