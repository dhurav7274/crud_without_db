
## Description
📌 Overview
This is a simple CRUD API built with NestJS that stores user data in an in-memory array. It provides endpoints to create, read, update, and delete users efficiently.

## ⚡ Features
✅ Lightweight & Fast – No database required, data is stored in memory.
✅ TypeScript-Powered – Ensures type safety and scalability.
✅ RESTful API – Follows best practices for API design.

## 📌 API Endpoints
  Method	 Endpoint	         Description
  GET	   /user/findAll	    Get all users
  GET	   /user/findOne/:id	Get a user by ID
  POST   /user/create	      Create a new user
  POST	 /user/update/:id	  Update user details
  DELETE  /user/delete/:id	Delete a user by ID

## Required Data For Creating time.
{
  "id":1,
  "name":"Dhurav",
  "brach":"Uic",
  "username":"Dhurav7274",
  "password":"12345"
}

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Author - dhurav Kumar
- Linkedin - https://www.linkedin.com/in/dhurav7274/

