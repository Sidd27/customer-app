# CustomerApp

This is different MEAN Stack project where Acronym means as below
- *M* : MySql
- *E* : Express
- *A* : Angular(v9)
- *N* : NodeJS

## Installation

- run `npm i` to install dependecies.
- Install and run mySql.
- Create Database named as `customer`.
- Create user for data base as `username=customerUser` and `password=customerPassword`.
- Grant all privlieges to user.
- run `npm serve` to run only server side application.

___
***NOTE***
> You can change db config from `server/configs` folder open `dev.js` and edit the mySql configuration
____

## Import Data
- Use mySql JSON import, Mock data are available in `mock-data` folder.
- First Import `Customer.json` in `profiles` table as Address Data has foreign key dependency.
- Then Import `Address.json` in `addresses`.
___
***NOTE:***
> You have to run `npm serve` once before the import so that project can create tables
___

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:9001/`.

## Run Production server
- Run `npm run build`
- Run `npm serve`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Server Logs

Server logs are present in `server/logs` folder there are two types of logs currently.
- **App logs**: These logs are logged when we trigger them manually.
- **Access logs**: These logs are logged when any request comes to server.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build or you can use directly `npm run build` which will create production build

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
