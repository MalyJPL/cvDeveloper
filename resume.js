const express = require('express'),
      app = express(),
      path = require('path'); //path es uno de los 34 móddulos de node
      cookieParser = require('cookie-parser'),
      cookieSession = require('cookie-session');

      //nos pemrite ubicar los archivos de la carpeta public css&img
      app.use(express.static(path.join(__dirname, "/public")));
          //USO DE MIDDLEWARES
    app.use(cookieParser());
    app.use(cookieSession({secret: "I'm a secret"}));



      // creamos las rutass de anuestr aaplicación
      app.get('/', (peticion, respuesta)=>{
        peticion.session.visitas || (peticion.session.visitas = 0);
        let n = peticion.session.visitas++;
        console.log(`Visita # ${n}`);
        
          respuesta.sendFile(`${__dirname}/views/index.html`);
      });
      

      app.get('/acercademi', (peticion, respuesta)=>{
          respuesta.sendFile(`${__dirname}/views/acercademi.html`);
      });

      app.get('/experiencia', (peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/experiencia.html`);
    });
      
    app.get('/educacion', (peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/educacion.html`);
    });

    app.get('/idiomas', (peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/idiomas.html`);
    });

    app.get('/aptitudes', (peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/aptitudes.html`);
    });
   
    let port = process.env.PORT;
    if (port == null || port == "") {
      port = 3030;
    }
    app.listen(port);
    

  
      console.log("funciona");


