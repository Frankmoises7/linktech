## Acortador de links
Este es un acortador de links desarrollado con Node.js, Express, MongoDB y EJS. Permite a los usuarios registrarse, iniciar sesión y crear enlaces cortos para sus URL.

Requisitos:
- Node.js
- Npm
- Express
- Ejs
- MongoDB

## Instalación
1. Clonar este repositorio o descargar el archivo zip.
2. Desde la línea de comando, navegar hasta la carpeta del proyecto.
3. Ejecutar npm install para instalar las dependencias.

```bash
npm install

```

4. Crear una base de datos MongoDB.
5. Crear un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:

```bash
USERDB=
PASSWORD=
DBNAME=
```

6. Ejecutar npm start para iniciar la aplicación.

```bash
npm run start
```

## Funcionamiento

- Ingresar a http://localhost:3000/ para acceder a la página de inicio.
- Registrarse con un correo electrónico y una contraseña.
- Iniciar sesión con la cuenta creada.
- Crear un enlace corto para una URL ingresada.
- El enlace corto generado se mostrará en la página de inicio.
- Al hacer clic en el enlace corto, se redireccionará a la URL original.

## Desarollado
Por Frank Islas