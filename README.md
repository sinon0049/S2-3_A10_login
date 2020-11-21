# Login page

This is a login page trial for me, done by Node.js and Express.

## Features

There are five seed datas in user.json, and you can login with these five datas.
  
If you insert wrong email or password, the page will display "wrong email or password".

If you login succesfully, you'll see a welcome page.

## Download, install and run
+ Use Terminal to download the repository
```
git clone https://github.com/sinon0049/S2-3_A10_login.git
```
+ Download MongoDB and create a database called "user"
+ Download Express and Handlebars in the folder ```S2-3_A10_login```
```
npm i express
npm i express-handlebars
npm i body-parser
npm i mongoose
```
or install them together
```
npm i express express-handlebars body-parser mongoose
```
+ Use npm command to add seed data
```
npm run seed
```
and run the project
```
npm run dev
```
If succeeded, Terminal will show 
```
Login system is listening on http://localhost:3000
mongodb connected!
```
, and you can use it on your browser with the address http://localhost:3000/

## Environments and utilities
+ Node.js v10.15.0
+ Express 4.17.1
+ Handlebars 5.2.0
+ bootstrap 4.2.1
+ jquery 3.3.1
+ MongoDB
+ Mongoose 5.10.14