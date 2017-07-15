'use strict';

module.exports = (app, next) => {
  console.log('Asegurar roles existentes');
  const Role = app.models.Role;
  const ROL_REQUERIDO = ['admin'];
  let adminRol = null;

  function AsegurarRol(roleName) {
    Role.findOne({
      where: {
        name: roleName,
      },
    }, (err, role) => {
      if (err) throw err;
      if (!role) {
        Role.create({name: roleName, persistent: true}, (err, role) => {
          if (err) throw err;
          adminRol = role;
          crearAdministrador();
        });
      } else {
        next();
      }
    });
  }

  var Usuario = app.models.usuario;
  var RoleMapping = app.models.RoleMapping;
  var defaultCredentials = {
    nombre: 'Felipe',
    apellido: 'Valenzuela',
    telefono: 6677777777,
    foto: 'imagen.png',
    username: 'admin',
    email: 'user_dummy@correo.com',
    password: 'admin',
  };

  var crearAdministrador = () => {
    console.log('EL usuario no se encontro, creando...');

    Usuario.create([defaultCredentials], (err, usuario) => {
      if (err) {
        throw err;
      } else {
        console.log('El usuario administrador se creo correctamente!');
      }
      asignarRole(usuario);
    });
  };

  var asignarRole = function() {
    adminRol.principals.create({
      principalType: RoleMapping.Usuario,
      principalId: Usuario.id,
    }, function(err, principal) {
      next();
    });
  };

  RoleMapping.belongsTo(Usuario);
  Usuario.hasMany(RoleMapping, {foreignKey: 'principalId'});
  Role.hasMany(Usuario, {through: RoleMapping, foreignKey: 'roleId'});

  ROL_REQUERIDO.forEach((role) => AsegurarRol(role));
};
