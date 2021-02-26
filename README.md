<h1 align="center">Strapi</h1>

<h3 align="center">A strapi project with support for Mongo DB Atlas, Docker, Docker Compose and AWS S3 Bucket.
</h3>

<br>

<p align="center">
  <img src="https://img.shields.io/badge/Node%20js-14.15.4-3c730f?style=for-the-badge&logo=node.js&labelColor=20232a" />
  <img src="https://img.shields.io/badge/strapi-3.4.5-35408a?style=for-the-badge&logo=strapi&labelColor=20232a" />
  <a href="https://hub.docker.com/r/luisfalconmx/strapi">
    <img src="https://img.shields.io/badge/dockerhub-1.1.1-2496ED?style=for-the-badge&logo=docker&labelColor=20232a" />
  </a>
</p>

<br>

<p align="center">
  <img src="./docs/images/strapi-cover.png" />
</p>

<br><br>

## Getting Started

The image in this project uses strapi in its base to function. It is complemented by a self-administered database in mongodb atlas. You can view the requirements in this document to obtain the credentials of the environment variables.

### Run the project with the dockerhub image

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
-e AWS_BUCKET= \
luisfalconmx/strapi:latest
```

### Run the project with the image from Github Package Registry

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
-e AWS_BUCKET= \
ghcr.io/luisfalconmx/strapi:latest
```

<br>

## Requeriments

## Guides

## Changelog

## License
