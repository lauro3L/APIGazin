FROM node:alpine

WORKDIR /usr/app

COPY src /usr/app/src

COPY ./*.json /usr/app/

COPY ./.env /usr/app/

COPY ./.sequelizerc /usr/app/.sequelizerc

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

RUN npm install

ADD . .

EXPOSE 3000

CMD ["yarn", "start"]

