FROM node:18.16.0

WORKDIR /tallergithubactions

COPY . .

RUN npm install

EXPOSE 4400

CMD [ "npm", "test" ]
