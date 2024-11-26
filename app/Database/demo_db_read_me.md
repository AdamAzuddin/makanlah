First you need a myqsl driver

```angular2html
npm install mysql
```
type this in the terminal line

Then in mysql workbench, you need to write this to authenticate yourself
```angular2html
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'localpassword';
```
Replace `root` to your user; `localhost` to your url; `localpassword` to your password  

use one of these `demo` files by calling `node`.

E.g

```
node demo_create_db.js
```
in your terminal line

use `Ctrl + C` to exit terminal line when it doesn't show any of the C:/user/user/makanlah

