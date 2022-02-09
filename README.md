## Installation

```bash
$ npm install
```

## Running the app with sqlite

```bash
# create tables
$ npm run typeorm migration:run

# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Running the app with postgresql

```bash
# start up postgresql using docker-compose
$ docker-compose up -d

# development (watch mode)
$ npm run start:devpg
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
