from node:12-alpine 

RUN apk update

WORKDIR /app

COPY . /app


RUN npm install

CMD ["npm" , "run" , "dev" ]


