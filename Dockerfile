#################################################################
# How to :
# Build : docker build -t pfalfa-ihub .
# Run : docker run --name pfalfa-ihub -d -p 8778:8778 pfalfa-ihub
#################################################################

FROM node:10

# setting the work directory
WORKDIR /app

# copy sources
COPY . .

# install dependencies
RUN npm install

# expose port
EXPOSE 8778
EXPOSE 3003

# execute
CMD [ "node", "index.js" ]
