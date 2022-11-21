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
        { id: 1, username: 'Jefferson',password:'12345' },
        { id: 2, username: 'Andrea', password:'12345' },
        { id: 3, username: 'Bryan', password:'12345' }
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

app.listen(8080, () => { });