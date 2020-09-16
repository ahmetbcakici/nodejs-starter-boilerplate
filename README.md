# NodeJS Starter Boilerplate

You can use the boilerplate when starting to a new project.

## Table of Contents

- [Installation](#installation)
- [Structure](#structure)
- [Support](#support)
- [Contributing](#contributing)

## Installation
### with Docker
```
git clone https://github.com/ahmetbcakici/nodejs-starter-boilerplate.git
cd nodejs-starter-boilerplate
docker-compose up
```

### manually
```
git clone https://github.com/ahmetbcakici/nodejs-starter-boilerplate.git
cd nodejs-starter-boilerplate
npm install
# Prepare your environment variables with generating .env file as .env.example file
npm start
```
## Structure
```
├─ public
│  └─ images
│     └─ sample.png
├─ src
│  ├─ api
│  │  ├─ controllers
│  │  │  └─ user
│  │  │     ├─ email-verification.js
│  │  │     ├─ forgot-my-pass.js
│  │  │     ├─ index.js
│  │  │     ├─ login.js
│  │  │     ├─ register.js
│  │  │     └─ send-confirm-code.js
│  │  ├─ middlewares
│  │  │  └─ auth.js
│  │  ├─ routes
│  │  │  ├─ index.js
│  │  │  └─ user.js
│  │  └─ validators
│  │     └─ user.validators.js
│  ├─ config
│  │  ├─ index.js
│  │  ├─ logger.config.js
│  │  └─ swagger.config.js
│  ├─ loaders
│  │  ├─ express.js
│  │  ├─ index.js
│  │  └─ mongoose.js
│  ├─ models
│  │  ├─ index.js
│  │  └─ user.js
│  ├─ utils
│  │  ├─ generate-random-code.js
│  │  ├─ index.js
│  │  └─ send-code-to-email.js
│  └─ app.js
├─ tests
│  ├─ integration-tests
│  │  └─ sample.test.js
│  └─ unit-tests
│     └─ sample.test.js
├─ .dockerignore
├─ .env.example
├─ .eslintrc.json
├─ .gitignore
├─ Dockerfile
├─ LICENSE
├─ docker-compose.yml
├─ jest.config.js
├─ package-lock.json
└─ package.json
```

## Support

Please [open an issue](https://github.com/ahmetbcakici/nodejs-starter-boilerplate/issues) for support & suggestions.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/ahmetbcakici/nodejs-starter-boilerplate/compare).




