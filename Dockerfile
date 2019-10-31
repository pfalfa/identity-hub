#################################################################
# How to :
# Build : docker build -t pfalfa-ihub .
# Run : docker run --name pfalfa-ihub -d -p 8765:8765 pfalfa-ihub
#################################################################

FROM alpine:latest

WORKDIR /app
ADD . .

RUN apk update && apk upgrade && apk add --no-cache ca-certificates nodejs-npm && apk add --no-cache --virtual .build-dependencies python make g++
RUN npm install
RUN apk del .build-dependencies && rm -rf /var/cache/* /tmp/npm*

EXPOSE 8765
CMD ["npm","start"]
