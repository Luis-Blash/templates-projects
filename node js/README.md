# Nodejs template

You need install

```bash
npm i express express-validator jsonwebtoken dotenv cors bcryptjs
```

```bash
npm i nodemon --save-prod
```

in packejs.json add

```json
    "test": "jest --verbose"  
    "start": "node app",
    "dev": "NODE_ENV=development nodemon app"
```

Optional configuration database

```bash
npm i mongoose

```