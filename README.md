# nodeJs-boilerplate (RESTful API server)
A boilerplate for quickly building RESTful APIs using nodeJs, expressJs and mongoose.

## Installation

Clone the repo:

```

git clone --depth https://github.com/vikS7/nodeJs-boilerplate.git
cd nodeJs-boilerplate

```
Install the dependencies:

```

npm install

```

Set the enviornment variables in src/config/dev.env

## Features

- **NoSQL database**: [MongoDB](https://www.mongodb.com) object data modeling using [Mongoose](https://mongoosejs.com)

- **Authentication**: using [jsonwebtokens](https://www.npmjs.com/package/jsonwebtoken)

- **Validation**: request data validation using [validator](https://www.npmjs.com/package/validator)

- **Enviornment Variables**: using [env-cmd](https://www.npmjs.com/package/env-cmd)

## Commands 

Running locally :  ``npm run start``

Running in production :  ``npm run dev``



## Environment variables

The environment variables can be modified in the `.env` file. Deafault values are :
```

#Port number
PORT=3001

#URL of MongoDB
MONGODB_URL=mongodb://127.0.0.1:27017/{database_name}

#JWT SECRET KEY
JWT_ENCRY_KEY={ENCRYPTION_KEY}

```

## Available routes 

`POST /register` - register\
`POST /login` - login\
`POST /user/logout` - logs out user
`POST /user/logoutall` - logs out user of all devices (deletes all auth tokens)
`GET /user/me` - get user information


## Authentication

To user authentication for certain routes, simply add 'auth' middleware. 



## Dependencies

- "bcrypt": "^5.0.0",
- "express": "^4.17.1",
- "jsonwebtoken": "^8.5.1",
- "mongoose": "^5.11.10",
- "morgan": "^1.10.0",
- "validator": "^13.5.2",
- "env-cmd": "^10.1.0",
- "nodemon": "^2.0.6"
