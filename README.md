# Identity Hub

Pfalfa Identity served as decentralized identity hub inside Pfalfa Platform.  
[Read More Whitepaper](https://pfalfa.github.io/whitepaper/chapter_4.html)

## Usage

```bash
# If access using https, please rename .env.example to be .env and configure HTTPS_KEY & HTTPS_CERT

# Install depedencies
$ npm install

# Run application
$ npm run start
```

## Using Docker

```bash
# Build docker image
$ docker build -t pfalfa-ihub .

# Run docker container
$ docker run --name pfalfa-ihub -d -p 8778:8778 pfalfa-ihub
```

## API Docs
API Docs : [Repository](https://github.com/pfalfa/api-docs)  
