# Fabcar - Fullstack example

This project combines the a basic contract example with the help of conv-rest-api to generate an API server and integrates a browser adapter to make calls to the API.

[![Convector Developer Office Hours: Adapters | Episode #7
](https://api.monosnap.com/file/download?id=H3OLP76HtBCr8pepaAZNkG5aJHhHAu)](https://youtu.be/fSi3x5279ms)

The project is created with Angular but the same approach can be used with any other framework.

This awesome project was created automatically with <a href="https://github.com/worldsibu/convector-cli" target="_blank">Convector CLI</a>.
By default new Convector projects locally include <a href="https://github.com/worldsibu/hurley">Hurley</a> to manage your development environment seamlessly, so you don't have to worry about setting up the network and hard ways to install  and upgrade your chaincodes.

## Start

```
# Install dependencies - From the root of your project
npm i
# Create a new development blockchain network  - From the root of your project
npm run env:restart
# Install your smart contract
npm run cc:start -- fabcar
# Start the server and the UI
npm run start
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
