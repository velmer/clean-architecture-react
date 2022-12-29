# React + Typescript + Clean Architecture Starter

This is a repository to start a new React + Typescript project following SOLID principles (Clean Architecture).

## Layers

This project has 4 layers:

- Entities: entities of the system (enterprise business rules)
- App: use-cases of the system (application business rules) and contracts to interact with external services
- Externals: implementations with external services of the contracts defined in the Application layer
- UI: presentation layer (regular React project structure) isolated from the core business rules

## Install dependencies

```
$ yarn
```

## Run the app

```
$ yarn start
```

## Build the app

```
$ yarn build
```

## Preview the production version locally

```
$ yarn preview
```

## Run tests

```
$ yarn test
```

### Watch mode

```
$ yarn test:watch
```

### Generate coverage

```
$ yarn coverage
```
