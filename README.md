## Installation

```bash
$ npm install
```

## Running the app

```bash
# create tables
$ npm run typeorm migration:run

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## How to call api

Open `src/users/requests.http` on vscode (REST Client extension needed) and Send Request.

And, Open `src/reports/request.http` and Send Request as well.

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## typeorm migration generate

```bash
# replace <migration name> to something. ex. initial-schema
$ npm run typeorm migration:generate -- -n <migration name> -o
```
