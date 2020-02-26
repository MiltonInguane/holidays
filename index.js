const express = require('express')
const app = express();
const port = 3000;

const holidays =require("./Mozambique.json")

app.get('/', function (request, response) {
    response.send(`api running on port ${port}.`);
});

app.get('/api/holidays/mz', (request, response) => {
    if (request.query.param) {
        const queryResponse = holidays.find(item => item.name.toLowerCase().includes(request.query.param.toLowerCase()));
        if (queryResponse == null) {
            response.status(404).send(`There is no result for ${request.query.param}`);
        }
            response.send(queryResponse);
    }
    response.send(holidays);
});

app.get('/api/holidays/mz/:id', (request, response) => {
    const holiday = holidays.find(item => item.id === parseInt(request.params.id));
    if (!holiday) response.status(404).send('holidays with the given ID was not found');
    response.send(holiday);
});

app.listen(port, () =>{
    console.log("api running")
});
