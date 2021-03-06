<h1 align="center">ExpressJS - TelegramApp-Express</h1>

This project was built as a form of response to technological developments, especially in the field of communications. practical and instant communication makes it very easy for us to connect with one another, that's why I built this project. Telegram App. [More about Express](https://en.wikipedia.org/wiki/Express.js)

## Built With

[![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.12.13-green.svg?style=rounded-square)](https://nodejs.org/)

## Requirements

1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. Node_modules
3. <a href="https://www.getpostman.com/">Postman</a>
4. Web Server (ex. localhost)

## How to run the app ?

1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Create a database with the name #nama_database, and Import file sql to **phpmyadmin**
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.(ex. localhost:3000/)
8. You can see all the end point [here](https://documenter.getpostman.com/view/13449265/TW6upVB5)

## Set up .env file

Open .env file on your favorite code editor, and copy paste this code below :

```
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=''
DB_NAME=telegram
DB_TIMEZONE=UTC
```

## License

© [Mohammad Ilham Nurdhi Hafsyah](https://github.com/IlhamHafsyah)
