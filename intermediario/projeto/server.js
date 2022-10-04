require("dotenv/config");
const express  = require('express');

const app = express();
const port = 3000;

app.get("/", (request, response) => { 
    
    response.send('USER: ' + process.env.USER + ' ,executando em: ' +  process.env.PASSWORD);
    //response.send('Treinamento web Devops');

})

app.listen(port, () => {
    console.log(`acesse em http://localhost:${port}`);
})