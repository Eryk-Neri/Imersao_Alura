import express from "express";

const app = express();
app.listen(3000, () => {
    console.log("Funcionado....");
});

app.get("/api",(req, rest) => {
    rest.status(200).send("Status 200");
})