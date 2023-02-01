const express = require('express');
const app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json())

/*
    {
        'usuario':'admin',
        'password':'admin'
    }
*/
app.post('/auth', (request, response) => {
    let ms = { message: 'Inicio de sesión correcto.', status: 'error' };
   if(request.body.usuario != ''&&request.body.usuario!=undefined) {
        ms = { message: 'El nombre del usuario es obligatorio', status: 'error' };
    }
    response.status(200).json(ms);
});
app.post('/logout', (request, response) => {
    let ms = { message: 'Sesión iniciada correctamente', status: 'success' };
    if (request.body.token == ''||request.body.token==undefined) {
        ms = { message: 'El token es obligatorio', status: 'error' };
    }
    response.status(200).json(ms);
});

app.get('/users', (request, response) => {
    response.status(200).json([
        { id: 1, dni:"0000000000", nombres:"Jefferson",apellidos:"Leon", username: 'Jefferson',password:'12345',vehiculo:null },
        { id: 2, dni:"0000000011", nombres:"Andrea",apellidos:"Leon", username: 'Andrea', password:'12345', vehiculo: {id:2,placa:"AAA-123","marca":"Toyota"} },
        { id: 3, dni:"0000000022", nombres:"Bryan",apellidos:"Leon", username: 'Bryan', password:'12345', vehiculo: {id:3,placa:"CCC-123","marca":"Mazda"} }
    ]);
});
app.put('/users/:id', (request, response) => {
    response.status(200).json({ message: 'No existe el usuario', status: 'error' });
});
app.post('/users', (request, response) => {
    response.status(200).json({ message: 'Usuario creado correctamente', status: 'success' });
});
app.delete('/users/:id', (request, response) => {
    response.status(200).json({ message:'Usuario eliminado correctamente', result: 'success' });
});

//VEHICULOS
app.get('/vehiculos', (request, response) => {
    response.status(200).json([
        { id: 1, placa: 'ABC-123',marca:'Toyota', usuario: {id:1,nombres:"Leon",apellidos:"Jefferson"} },
        { id: 2, placa: 'AAA-123', marca:'Chevrolet', usuario: {id:2,nombres:"Andrea",apellidos:"Leon"} },
        { id: 3, placa: 'CCC-123', marca:'Mazda', usuario: null},
    ]);
});
app.put('/vehiculos/:id', (request, response) => {
    response.status(200).json({ message: 'Error inesperado', status: 'error' });
});
app.post('/vehiculos', (request, response) => {
    response.status(200).json({ message: 'Vehículo creado correctamente', status: 'success' });
});
app.delete('/vehiculos/:id', (request, response) => {
    let seconds=5;
    var waitTill = new Date(new Date().getTime() + seconds * 1000);
    while(waitTill > new Date()){}
    response.status(200).json({ message:'Vehulo eliminado correctamente', result: 'success' });
});


app.listen(8080, () => { });