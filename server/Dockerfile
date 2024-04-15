FROM node:19-alpine
WORKDIR /app/
COPY tokens /tokens/
COPY *.js ./
COPY *.json /
EXPOSE 7750
RUN npm install
ENTRYPOINT npm start
