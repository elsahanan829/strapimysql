FROM node:14.15.4-alpine
COPY [".", "/usr/src/"]
WORKDIR /usr/src/
ENV NODE_ENV=production
RUN npm install
RUN npm run build
CMD [ "npm", "start" ]
EXPOSE 1337