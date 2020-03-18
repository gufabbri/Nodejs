//criação do servidor web


//trazendo módulos disponibilizados pelo node

const express = require('express');
const app = express();


app.listen(3000, function(params) {
      console.log(`Servidor Rodando na porta 3000`);
});

//função que sempre será executado quando houve uma requisição no /
app.get('/', function(req, resp) {
      resp.send(`
         <html>
          <head>
            <meta charset="utf-8">
          </head>
          <body>
             <h1> Training </h1>
          </body>
       </html>
          `
      );
});

app.get('/livros', function(req, resp) {
      resp.send(`
      <html>
       <head>
         <meta charset="utf-8">
       </head>
       <body>
          <h1> Listagem de livros </h1>
       </body>
    </html>
       `
      )
});

// const http = require('http');

// const servidor = http.createServer(function(req, resp) {

//    let html = '';
//    if(req.url == '/'){

//       html = `
//       <html>
//          <head>
//             <meta charset="utf-8">
//          </head>
//          <body>
//             <h1> Training </h1>
//          </body>
//       </html>
//          `;
//    }else if(req.url == '/livros'){

//       html = `
//       <html>
//          <head>
//             <meta charset="utf-8">
//          </head>
//          <body>
//             <h1> Listar Livros </h1>
//          </body>
//       </html>
//          `;
//    }
//    resp.end(html);

// });
// servidor.listen(3000);