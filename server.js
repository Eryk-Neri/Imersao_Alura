import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto test",
        imagem: "https://placecats.com/mille/300/150"
    },
    {
        id: 2,
        descricao: "Outro post legal",
        imagem: "https://placecats.com/mille/300/150"
    },
    {
        id: 3,
        descricao: "Mais um post",
        imagem: "https://placecats.com/mille/300/150"
    },
    {
        id: 4,
        descricao: "Novo post incrível",
        imagem: "https://placecats.com/mille/300/150"
    },
    {
        id: 5,
        descricao: "Mais um post interessante",
        imagem: "https://placecats.com/mille/300/150"
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Funcionado....");
});

function buscarPostID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.get("/posts/:id", (req, rest) => {
    const index = buscarPostID(req.params.id);
    rest.status(200).json(posts[index]);
});