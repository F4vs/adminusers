# Control de usuarios

The project is generated by [LoopBack](http://loopback.io).# adminusers

Para su funcionamiento:

1- Clone el repocitorio.

2- Tener instalado previamente Node.js

3- Instalar dependencias con npm install

4- Instalar Mongodb

5- Ejecutar Mongodb y dentro del directorio del proyecto ejecutar el comando 'node .'

La api correra en http://localhost:3000
para hacer uso de la api puede utilizar http://0.0.0.0:3000/explorer

Nota: es necesario login previamente con el usuario que se crea por default para poder generar un id que lo identifique
      como administrador y poder utilizar la totalidad de la api de lo contrario marcara el siguiente mensaje: Error: Autorización necesaria.

Estructura usuario creado por default.

{
  "nombre": "Felipe",
  "apellido": "Valenzuela",
  "telefono": 6677777777,
  "foto": "imagen.png",
  "username": "admin",
  "email": "user_dummy@correo.com",
  "password": "admin"
}
