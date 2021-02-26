<p align="center">
  <img src="./images/strapi-logo.svg" width="260px" />
</p>
<br><br>

<p align="center">
  <img src="https://img.shields.io/badge/Node%20js-14.15.4-3c730f?style=for-the-badge&logo=node.js&labelColor=20232a" />
  <img src="https://img.shields.io/badge/strapi-3.4.5-35408a?style=for-the-badge&logo=strapi&labelColor=20232a" />
  <img src="https://img.shields.io/badge/dockerhub-1.1.1-2496ED?style=for-the-badge&logo=docker&labelColor=20232a" />
</p>

---

<h3 align="center">Guía para usar Strapi + MongoDB Atlas + Docker + Docker Compose.</h3>
<br>
<p align="center">
  <img src="./images/strapi-cover.png" />
</p>

<br><br>

# Empezando

La imagen de este proyecto utiliza strapi en su base para funcionar. Se complementa con una base de datos autoadministrada en mongodb atlas. Puede ver los requisitos de este documento para obtener las credenciales de las variables de entorno.

#### Correr el proyecto con la imagen de dockerhub

```
docker run --name strapi -p 1337:1337 \
-e DATABASE_HOST= \
-e DATABASE_SRV=true \
-e DATABASE_NAME= \
-e DATABASE_USERNAME= \
-e DATABASE_PASSWORD= \
-e DATABASE_SSL=true \
-e ADMIN_JWT_SECRET= \
-e AWS_ACCESS_KEY_ID= \
-e AWS_ACCESS_SECRET= \
-e AWS_REGION= \
-e AWS_ENDPOINT= \
-e AWS_BUCKET= \
luisfalconmx/strapi:latest
```

#### Correr el proyecto con la imagen de Github Package Registry

```
docker run --name strapi -p 1337:1337 \
-e DATABASE_HOST= \
-e DATABASE_SRV=true \
-e DATABASE_NAME= \
-e DATABASE_USERNAME= \
-e DATABASE_PASSWORD= \
-e DATABASE_SSL=true \
-e ADMIN_JWT_SECRET= \
-e AWS_ACCESS_KEY_ID= \
-e AWS_ACCESS_SECRET= \
-e AWS_REGION= \
-e AWS_ENDPOINT= \
-e AWS_BUCKET= \
ghcr.io/luisfalconmx/strapi:latest
```

## Prerrequisitos

Primero vamos a MongoDB Atlas, iniciamos sesión y desde el menú principal seleccionamos un proyecto. Si no tienes ningún proyecto, crea uno.
![MongoDB Atlas - Tutorial 1](./images/1-mongodb-atlas-tutorial.png?raw=true)

Despues vamos a la sección **Database Access**.
![MongoDB Atlas - Tutorial 2](./images/2-mongodb-atlas-tutorial.png?raw=true)

Damos clic en **Add New Database User**
![MongoDB Atlas - Tutorial 3](./images/3-mongodb-atlas-tutorial.png?raw=true)

Creamos un nuevo usuario con el nombre y la contraseña. Debemos asegurarnos de asignarle los permisos necesarios para poder leer y escribir en la base de datos. Al terminar damos clic en **Add User**
![MongoDB Atlas - Tutorial 4](./images/4-mongodb-atlas-tutorial.png?raw=true)

Volvemos a la seccion **Clusters** y damos clic en el botón **CONNECT**
![MongoDB Atlas - Tutorial 5](./images/5-mongodb-atlas-tutorial.png?raw=true)

Seleccionamos **Connect your application**
![MongoDB Atlas - Tutorial 6](./images/6-mongodb-atlas-tutorial.png?raw=true)

Configuramos el primer campo en **Node js** con la versión **3.0 or later** y copiamos el código que nos entrega abajo.
![MongoDB Atlas - Tutorial 7](./images/7-mongodb-atlas-tutorial.png?raw=true)

El siguiente código nos servirá para configurar strapi con MongoDB Atlas. Asegúrate de usar el tuyo, este es solo de ejemplo.

```bash
mongodb+srv://strapi:<password>@main.hfhwg.mongodb.net/<dbname>?retryWrites=true&w=majority
```

El código anterior contiene los siguientes campos:

```bash
conection-type: mongodb+srv
host: main.hfhwg.mongodb.net
dbname: <dbname>
username: strapi
password: <password>
```

Identifica los mismos campos pero con tu codigo para que puedas seguir con el tutorial.

Para el campo **dbname** tu mismo especificaras cual es la base de datos a la que te quieres conectar y para el campo **password** será la contraseña que le colocaste al usuario que creaste. **Sigue el tutorial para que veas a detalle como se utilizan estos campos**.

## 1 - Inicializar el proyecto

Ejecuta el siguiente comando para inicializar el proyecto. Cambia **my-project** por el nombre real de tu proyecto.

```bash
npx create-strapi-app my-project
```

Despues selecciona la opción **Custom (manual settings)**

```bash
? Choose your installation type
 Quickstart (recommended)
> Custom (manual settings)
```

Ahora selecciona **mongo**

```bash
? Choose your default database client
 sqlite
 postgres
 mysql
> mongo
```

Inserta el nombre de la base de datos. Si no existe se creara una nueva con el nombre que proporciones.

```bash
? Database name: strapi
```

El host lo encontramos en el codigo que obtuvimos en MongoDB Atlas (**Mira los prerequisitos de arriba**). Asegurate de colocar el tuyo, el siguiente es de ejemplo.

```bash
? Host: main.hfhwg.mongodb.net
```

Colocamos **true** ya que se nos indico en el codigo de MongoDB Atlas que el **conection-type** es **mongodb+srv**

```bash
? +srv connection: true
```

El puerto por defecto en mongodb es **27017**

```bash
? Port (It will be ignored if you enable +srv): 27017
```

Ahora colocaremos el nombre del usuario que creamos en MongoDB Atlas. Asegurate de usar el tuyo.

```bash
? Username: strapi
```

Despues colocamos la contraseña para el usuario que usamos anteriormente.

```bash
? Password: ****
```

Aqui solo presionaremos enter ya que seleccionaremos la segunda opcion que es blank

```bash
? Authentication database (Maybe "admin" or blank):
```

Para finalizar pondremos **y** para habilitar una la conexion mediante ssl

```bash
? Enable SSL connection: y
```

Listo. Esperamos a que se termine de instalar el proyecto y podremos acceder a la siguiente url donde estara el panel de strapi.

[http://localhost:1337](http://localhost:1337)

## 2 - Variables de entorno

Debemos configurar las variables de entorno para poder usarlas en docker y docker compose.

Primero vamos a editar el archivo `./config/database.js` donde pondremos las variables de entorno con sus valores por defecto.

```javascript
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', '127.0.0.1'),
        srv: env.bool('DATABASE_SRV', false),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'user'),
        password: env('DATABASE_PASSWORD', 'password'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
})
```

Despues en el archivo `./config/server.js` eliminamos el token que está en la variable ADMIN_JWT_SECRET. Asegúrate de guardarlo en un lugar seguro, lo necesitarás para poder autenticarte. ¡No lo pierdas!.

```javascript
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
})
```

Con esto tendremos listas las variables de entorno.

## 3 - Docker y Docker Compose

Ahora configuraremos el archivo `./Dockerfile` en la raiz del proyecto con el siguiente contenido.

```dockerfile
FROM node:14.15.4-alpine
COPY [".", "/usr/src/"]
WORKDIR /usr/src/
ENV NODE_ENV=production
RUN npm install
RUN npm run build
CMD [ "npm", "start" ]
EXPOSE 1337
```

También necesitamos él `.dockerignore` en la raiz del proyecto con el siguiente contenido.

```
.git
.cache
.github
build
docs
node_modules
.env
Dockerfile

```

Probemos la imagen construyéndola y corriendo un contenedor con las variables de entorno para producción. Usaremos las credenciales de MongoDB Atlas. Revisa los prerrequisitos arriba.

```bash
# shell
docker build -t my-strapi-image .
```

Sustituye los valores por tus credenciales de MongoDB Atlas y coloca el token que guardaste anteriormente en ADMIN_JWT_SECRET.

```bash
# shell
docker run --name my-app -p 1337:1337 \
-e DATABASE_HOST=my-host \
-e DATABASE_SRV=true \
-e DATABASE_NAME=my-db \
-e DATABASE_USERNAME=my-username \
-e DATABASE_PASSWORD=my-pass \
-e DATABASE_SSL=true \
-e ADMIN_JWT_SECRET=token \
my-strapi-image
```

Cuando termine de correr el contenedor, acceder a la url [http://localhost:1337](http://localhost:1337). Si puedes ver e ingresar a strapi entonces todo va bien.

Ahora deten el contenedor y configuremos docker-compose.

Seguimos con el archivo `./docker-compose.yml` ubicado en la raiz del proyecto con el siguiente contenido. La única variable que tendrás que cambiar es ADMIN_JWT_SECRET por el token que guardaste anteriormente.

```yml
version: '3'
services:
  strapi:
    build: .
    command: npm run develop
    environment:
      NODE_ENV: development
      DATABASE_CLIENT: mongo
      DATABASE_NAME: strapi
      DATABASE_HOST: mongo
      DATABASE_PORT: 27017
      DATABASE_USERNAME: strapi
      DATABASE_PASSWORD: strapi
      ADMIN_JWT_SECRET: token
    volumes:
      - .:/srv/app
    ports:
      - '1337:1337'
    depends_on:
      - mongo

  mongo:
    image: mongo:4.2.11-bionic
    environment:
      MONGO_INITDB_DATABASE: strapi
      MONGO_INITDB_ROOT_USERNAME: strapi
      MONGO_INITDB_ROOT_PASSWORD: strapi
    volumes:
      - ./.tmp/data:/data/db
```

Ahora probemos docker compose con el siguiente comando.

```bash
docker-compose up
```

Espera a que se construya la imagen y se corran ambos contenedores. Cuando terminen accede a la url [http://localhost:1337](http://localhost:1337)

Con los archivos anteriores ya configurados tendremos todo listo para poder trabajar en desarrollo con docker compose y en producción con la imagen declarada en el Dockerfile.

## Obtener las credenciales de AWS con Digitalocean Spaces

Las siguientes variables de entorno que necesitamos para correr la imagen las obtendremos con el microservicio digitalocean spaces. Para lograr esto primero vamos a nuestro panel de digitalocean, damos clic en el boton verde que dice create y seleccionamos Spaces.

![Digitalocean crear un space tutorial 1](./images/do-space-01.png)

<br>
Seleccionamos la region del datacenter de nuestra preferencia.

![Digitalocean crear un space tutorial 2](./images/do-space-02.png)

<br>
Habilitaremos el Content Delivery Network para que nuestros archivos estaticos sean servidos desde multiples servidores. Para este paso es necesario que agreges tu dominio a digitalocean y lo selecciones en el campo "Use a custom subdomain". Podrás usar directamente el dominio o si especificas un subdominio digitalocean lo creara por ti.

En la opción "Allow file listing?" es recomendable seleccionar "Restrict File Listing" para que solo las aplicaciones de nuestra propiedad puedan listar los contenidos del space.

![Digitalocean crear un space tutorial 3](./images/do-space-03.png)

<br>

Para finalizar simplemente le damos un nombre a nuestro space. Seleccionamos el proyecto y damos clic en el boton de crear. (me sale el mensaje en rojo por que ya lo tenia creado)

![Digitalocean crear un space tutorial 4](./images/do-space-04.png)

<br>

### AWS_ACCESS_KEY_ID y AWS_ACCESS_SECRET

Para obtener el valor de esta variable vamos a **Account > API** en el menu de la izquierda.

![Digitalocean crear un space tutorial 11](./images/do-space-11.png)

Despues damos clic en **Generate New Key**
![Digitalocean crear un space tutorial 12](./images/do-space-12.png)

Y obtendremos los dos valores. El primero es el key y el segundo es el secret.

![Digitalocean crear un space tutorial 12](./images/do-space-13.png)

### AWS_REGION

Para obtener la region simplemente vamos a nuestro en **Settings > Endpoint** y nos mostrara la region. Solo toma lo que hay antes de .digitaloceanspaces.com.

![Digitalocean crear un space tutorial 12](./images/do-space-15.png)

### AWS_ENDPOINT

Ahora copia todo el endpoint que como muestra la imagen y pegalo en la variable de entorno.

![Digitalocean crear un space tutorial 9](./images/do-space-07.png)

### AWS_BUCKET

Por ultimo necesitamos el bucket que es el nombre de nuestro space.

![Digitalocean crear un space tutorial 9](./images/do-space-08.png)
