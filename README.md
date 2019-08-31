# Fabcar - Fullstack example

This project combines the a basic contract example with the help of conv-rest-api to generate an API server and integrates a browser adapter to make calls to the API.

[![Convector Developer Office Hours: Adapters | Episode #7
](https://api.monosnap.com/file/download?id=H3OLP76HtBCr8pepaAZNkG5aJHhHAu)](https://youtu.be/fSi3x5279ms)

The project is created with Angular but the same approach can be used with any other framework.

## Start

```bash
# Install dependencies - From the root of your project
npm i

npm run start
```

## REST Server

Generate and regenerate the REST Server with `conv-rest-api`.

```bash
npm i -g @worldsibu/conv-rest-api

# [re]generate the REST server from the api.json file
conv-rest-api generate api -c fabcar -f ./org1.fabcar.config.json

# Start the rest server (remove "npx" if you don't use it)
npx lerna run start --scope server --stream

POST http://localhost:8000/fabcar/init
```

### Make web requests

You can either use CURL if available or a tool like [Postman](https://www.getpostman.com/).

#### With CURL

```bash
curl http://localhost:8000/fabcar/init -H "Content-Type: application/json" --request POST

curl http://localhost:8000/fabcar/queryAll -H "Content-Type: application/json" --request GET

curl http://localhost:8000/fabcar/queryOne/1 -H "Content-Type: application/json" --request GET
```

#### With Postman
```bash
POST http://localhost:8000/fabcar/init
GET http://localhost:8000/fabcar/queryAll
GET http://localhost:8000/fabcar/queryOne/1
```

## About Hurley

You may as well install **Hurley** globally for easier and more flexible management. 

`npm i -g @worldsibu/hurley`

Since with Hurley globally you have control over everything, some things that you can do, for example, is installing a Convector Smart Contract with a different name than the one you used for your project.

```
# Use the same package
# Install a new chaincode with the same source code but the name 'anothernameforyourcc'
hurl install anothernameforyourcc node
```

Other complex tasks you may need is installing to a different channel.

```
# Use the same package
# Be sure you started your environment with more than one channel running 'hurl new --channels 2'. Otherwise this will throw an error.
hurl install anothernameforyourcc node --channel ch2
```

## Start - if you have Hurley globally

### Bring your project to life 

```
# Install dependencies - From the root of your project
npm i
# Create a new development blockchain network  - From the root of your project
hurl new
```

###  Install and upgrade chaincodes

```
# Package your smart contract's code  - From the root of your project
npm run cc:package -- fabcar org1
# Install to your blockchain - From the root of your project
hurl install fabcar node -P ./chaincode-fabcar
# Install in debug mode, this will run the chaincode server locally so you can debug
hurl install fabcar node -P ./chaincode-fabcar --debug

# Upgrade your existing chaincode - From the root of your project
hurl upgrade fabcar node 1.2 -P ./chaincode-fabcar
```

## Start - if you don't have Hurley globally

### Bring your project to life 

```
# Install dependencies - From the root of your project
npm i
# Create a new development blockchain network  - From the root of your project
npm run env:restart
```

###  Install and upgrade chaincodes

```
# Install to your blockchain - From the root of your project
npm run cc:start -- fabcar

# Upgrade your existing chaincode - From the root of your project
npm run cc:upgrade -- fabcar 1.2
```

## Tests

```
npm run test
```

> Check all the information to work with Convector <a href="https://worldsibu.github.io/convector" target="_blank">in the DOCS site</a>.

## Collaborate to the Convector Suite projects

* <a href="https://discord.gg/twRwpWt" target="_blank">Discord chat with the community</a>
* <a href="https://github.com/worldsibu" target="_blank">Convector projects</a>
