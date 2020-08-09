const devs = [
    {
        name: "Diego Juremo",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp:"81994545459",
        bio:"Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        technology:"Full-Stack",
        cost:"20",
        weekday:[0],
        time_from:[720],
        time_to:[1220],
    },
    {
        name: "Diego Jurandir",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp:"81994545459",
        bio:"Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        technology:"Fron-end",
        cost:"20",
        weekday:[0],
        time_from:[720],
        time_to:[1220],
    },
    {
        name: "Diego Jucelino",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp:"81994545459",
        bio:"Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        technology:"Back-end",
        cost:"20",
        weekday:[0],
        time_from:[720],
        time_to:[1220],
    }
]; // lista de objetos

const technologys = [
    "Front-end",
    "Back-end",
    "Full-Stack",
    "Mobile",
    "Banco de Dados",
    "Cloud",
    "I.A",
    "Data Science",
]; //lista de objetos

const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
]; //lista de objetos

function getTechnology(technologyNumber){
    const position = +technologyNumber - 1;
    
    return technologys[position]
}

function pageLanding(req, res){
    return res.render("index.html");
}

function pageContract(req, res){
    const filters = req.query;
    return res.render("contract.html", {devs, filters, technologys, weekdays});
}

function pageProject(req, res){
    const data = req.query;

    const isNotEmpty = Object.keys(data).length > 0;

    if (isNotEmpty){
        data.technology = getTechnology(data.technology);

        devs.push(data);

        return res.redirect("/contract");
    }

    return res.render("project.html", {technologys, weekdays}); //__dirname é o diretorio do script que está sendo executado
}

const express = require('express');  //Chamar servidor
const server = express(); //configuração do servidor

//configurar nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
});

server
//configurar arquivos estaticos (css, scripts, imagens)
.use(express.static("public"))
//rotas do aplicativo
.get("/", pageLanding)// (req, res) => é um arrow function, um função curta.
.get("/contract", pageContract)
.get("/project", pageProject)
.listen(5500) //liberando a porta 5500 do computador.