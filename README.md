# React + Typescript + Clean Architecture Starter

This is a repository to start a new React + Typescript project following SOLID principles (Clean Architecture).

## Scripts

### Install dependencies

```
$ yarn
```

### Run the app

```
$ yarn start
```

### Build the app

```
$ yarn build
```

### Preview the production version locally

```
$ yarn preview
```

### Run tests

```
$ yarn test
```

#### Watch mode

```
$ yarn test:watch
```

#### Generate coverage

```
$ yarn coverage
```

## Layers

This project has 4 layers:

- Entities: entities of the system (enterprise business rules)
- App: use-cases of the system (application business rules) and contracts to interact with external services
- Externals: implementations with external services of the contracts defined in the Application layer
- UI: presentation layer (regular React project structure) isolated from the core business rules

## Features

This repository supports the following features:

- Path aliases with `@/` (e.g., `import { User } from "@/entities/user";`)

## Organization

This codebase has 5 main folders:

- `src/entities`: To define the entities

For example: There is an entity `User`.

- `src/app/contracts`: To define the contracts that should be followed especially by external items like `IUserRepository`:

1. create()
2. update()
3. delete()
4. deleteAll()
5. getById()
6. listAll()

- `src/app/use-cases`: To define the system actions. For example:

1. create-user
2. update-user
3. delete-user
4. get-user-by-id
5. list-users

Each use case should have its automated tests.

- `src/externals`: To define the rest, implementations that are not important for the business rules like Http Clients, Libraries, Cache, etc.

- `src/ui`: To define the UI or Presentation layer of the app, in this case a React project.

## Libraries

- `React` as the UI Library
- `Axios` as the Http Client
- `Formik` for handling forms
- `Vitest` for unit and integration tests

## Conclusion

This is a template following SOLID principles with React + Typescript. The goal here is to use REact only in the UI layer, in order to decouple the business rules.

Feel free to use the best practices for React in terms of routing, componentization, contexts, hooks, etc. Business rules should be reserverd to `use cases` and `entities`.
