#################################################################
# How to :
# Build : docker build -t pfalfa-ihub .
# Run : docker run --name pfalfa-ihub -d -p 8778:8778 pfalfa-ihub
#################################################################

FROM alpine:3.10

WORKDIR /app
ADD . .

RUN apk update && apk upgrade && apk add --no-cache ca-certificates nodejs-npm && apk add --no-cache --virtual .build-dependencies python make g++
RUN npm install
RUN apk del .build-dependencies && rm -rf /var/cache/* /tmp/npm*

EXPOSE 8778
CMD ["npm","start"]
