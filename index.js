const express = require('express')
const app = express();
const port = 3000;

const employees = [
    { id: 1, name: 'Clayton Matule'},
    { id: 2, name: 'Ivan Vilanculo'},
    { id: 3, name: 'Luis Pereira'},
    { id: 4, name: 'Milton Inguane'},
    { id: 5, name: 'Steven Cardoso'},
    { id: 6, name: 'Zainadine Zidane'}
];

app.get('/', function (request, response) {
    response.send(`app is running without problem.`);
});

app.get('/api/employees', (request, response) => {
    if (request.query.param) {
        const queryResponse = employees.find(item => item.name.toLowerCase().includes(request.query.param.toLowerCase()));
        if (queryResponse == null) {
            response.status(404).send(`There is no result for ${request.query.param}`);
        }
            response.send(queryResponse);
    }
    response.send(employees);
});

app.get('/api/employees/:id', (request, response) => {
    const employee = employees.find(item => item.id === parseInt(request.params.id));
    if (!employee) response.status(404).send('Employee with the given ID was not found');
    response.send(employee);
});

app.listen(port, () =>{
    console.log("Its ok")
});
