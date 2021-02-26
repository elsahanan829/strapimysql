# Docker and Docker Compose

Now we will configure the file `./Dockerfile` in the root of the project with the following content.

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

We also need the `.dockerignore` in the root of the project with the following content.

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

Let's test the image by building and running a container with the environment variables for production. We will use the MongoDB Atlas credentials. Check out the prerequisites above.

```bash
# shell
docker build -t my-strapi-image .
```

Replace the values with your MongoDB Atlas credentials, and put the **token** you saved earlier in ADMIN_JWT_SECRET.

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

When the container finishes running, access the url: [http://localhost:1337](http://localhost:1337). If you can see and enter strapi then everything is fine.

Now stop the container and configure docker-compose.

We continue with the file `./docker-compose.yml` located at the root of the project with the following content. The only variable you will have to change is ADMIN_JWT_SECRET for the token you saved earlier.

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

Now let's try docker compose with the following command.

```bash
docker-compose up
```

Wait for the image to build and both containers to run. When they finish access the url: [http://localhost:1337](http://localhost:1337)

With the previous files already configured we will have everything ready to work in development with docker compose and in production with the image declared in the Dockerfile.
