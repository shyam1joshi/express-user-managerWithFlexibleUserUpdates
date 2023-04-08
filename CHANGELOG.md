# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 7.0.0 (2023-04-08)


### ⚠ BREAKING CHANGES

* **app (new methods):** - SESSION_TOKEN_KEY deprecated in favour of SESSION_SECRET
- AUTH_TOKEN_KEY
deprecated in favour of AUTH_TOKEN_SECRET
- PASSWORD_BLACK_LIST deprecated in favour of
DISALLOWED_PASSWORDS
* **app (src/index.js):** \r
- `express-user-manager.getDbDriver` has been removed. Calls to it will
error.\r
- `express-user-manager.getDbAdapter(adapter)` no longer returns a constructor, instead it
returns an object. This means the following no longer works:\r
```\r
const DataStore =
userManager.getDbAdapter(adapter);\r
const store = new DataStore(); // Error: DataStore is not a
constructor\r
\r
userManager.set('store', store);\r
```\r
Do this instead:\r
`const store =
userManager.getDbAdapter(adapter);`\r
This still performs all the previous initialization steps,
but internally.
* **supported databases:** Calls to `express-user-manager.getDbDriver('mysql')` will fail. Passing connection
parameters to the constructor returned by the call to `express-user-manager.getDbDriver()` no longer
connects to the database, the `connect()` method must be explicitly called on the instantiated
object and passed the connection parameters. `express-user-manager.getDbDriver()` is now deprecated
and will be removed in an upcoming release, use `express-user-manager.getDbAdapter()` instead.
* **user delete route:** Calls to the previous route with /delete in the path will henceforth fail
* **app:** Code using the previous 'listen()' will fail since the userModule instance is no
longer returned as a result of a call to 'listen()' rather it is now exported from the index.js
file, and the call to userModule.listen() returns undefined.
* **data-store:** Apps relying on the previous method of setting and detecting the database engine
will break as the two methods differ completely both in philosophy and implementation. Also, though
minor, the directory "databases/drivers" has been replaced with "lib/stores".

### Features

* **/api/v1/users/:username:** implement route /api/v1/users/:username to get a user by username ([803e81c](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/803e81cf613193ffadeb50adcca88f688734cf72))
* **api user routing:** setup user routes: /api/v1/users routes ([66e38b3](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/66e38b3852e716834021368fd691fc39c357bd44))
* **app (new methods):** add new configuration and initialization methods ([8e306ef](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/8e306ef58a3f36fdf218b569ef197730dc4d1974))
* **application:** allow automatic creation of API endpoints for clients app ([61af991](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/61af9918511452a416a7e4e90610cd4656138a88))
* **application:** emit events on important actions in application ([1384968](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/138496885cac3f3dcb317a97130f893689ecf584))
* **built-in server:** add a built-in server ([4c6f5d2](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/4c6f5d21f9fb9294a1ba85fb48801feacbe66488))
* **custom routes:** allow users to specify custom routes ([2338257](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/233825746552cd207f1c7a0da354fe521da03f73))
* **data-store:** provide API for setting the database (data store) engine ([c390255](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/c3902559cb1a123b33fd5dff97b31316d75aa568))
* **datastore:** add option for exiting script if database connectoin fails ([7ebe25d](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/7ebe25d533eb7fa36fd5adc1da86818728f06d06))
* **db (mongodb):** setup database (mongodb) ([e875bf8](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/e875bf874981ad041f8b6fc413b06253577f841f))
* **debug output:** let clients specify name for turning on debug output ([f9b2ff6](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/f9b2ff6eaddb1c147aad75c53acf234e2506c127))
* **hooks:** implement methods to unregister hooks ([2590cc2](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/2590cc22ebb81aaf922565719b7201c6e1d1ad7e))
* **hooks:** implement request hooks ([445f32a](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/445f32a238b45e6686087b102cfb9ff93ecf801d))
* **hooks:** implement response hooks ([a919078](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/a91907886ec1cb5b853ce2ee023b15101e6036e4))
* **initialization (appmodule.listen):** allow clients to specify the base API route on init ([50c1619](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/50c161991660116511d26ada889b4c9b9c6fe72d))
* **middlewares:** export middlewares as part of the userModule object ([f5be995](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/f5be9958c119abf3a9fa96fb307fbd08069d6d5c))
* **passwords:** allow customization of password length and non-secure passwords list ([cf2d977](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/cf2d977d11803c142855611e7b9137a70093fe9a))
* **routing:** implement user data update route ([f487bf0](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/f487bf0ddd46f238f6469ae863b7da36aa960164))
* **routing:** setup routing with express server ([23c9743](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/23c974352ebc17aba658b16a925221c7925556e9))
* **supported database engines:** add support for MySQL Database using MySQL2 and Sequelize adapter ([f86217b](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/f86217bcc58ee90c4fc87fcce4be3848bfef62ef))
* **supported databases:** add support for more databases ([ad39a98](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/ad39a987f62bd5d57c315726d5c0cea50f0b31eb))
* **user:** add route for deleting user, also write tests to cover the feature ([f830f54](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/f830f54a8732e78d2566887b90c868f34baf462f))
* **users listing:** implement results filtering, pagination, and limit ([3309734](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/3309734e72276473fd87f6e7e16db12a9806e673))
* **users search:** add ability to search users by keys: firstname, lastname, username, email ([2e06c69](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/2e06c6946542a2b8e3c8ff30f4613289c181211d))


### Bug Fixes

* **databases:adapter:mongoose:** fix the getUsers() filtering bug ([bfcb508](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/bfcb5081625ce40f66b31d3d207c7500dfd7b055))
* **index.js:** fix mount point and routing configuration issues ([c2a1bb3](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/c2a1bb3196861ed7faf952916a133220abd231c7)), closes [#3](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/issues/3)
* **login:** fix user login bug ([e9ba6ce](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/e9ba6cefb884e69f9896c19ac4c634585e5d58a1))
* **mongoose db file:** fix wrong attempt at connecting to DB when no arguments are passed ([0a39758](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/0a3975896f28d6b9b595be549688d60a22c21537))
* **password validator:** fix bug in password validation routine ([2cd3c21](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/2cd3c214964fe7d0a27c588f6794e78f89789ead)), closes [#2](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/issues/2)
* **routing:** remove not-found and internal-server error routing ([94a57eb](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/94a57eb7037b502c29367ec7b8b8f3b1370f0ba8))
* **user data:** fix error with retrieving user data via email or password ([0ce3d50](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/0ce3d50bf81f09e5282edd264c78e478bb17bf4b))


* **app (src/index.js):** simplify the API setup ([e49c432](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/e49c432fd84af759a784b071b64cfa7625e88122))
* **app:** add the 'listen' and 'getDbDriver' methods to the returned module API ([0c611f0](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/0c611f0071be049f2b41d03d2c2e8e841d4f5a5c))
* **user delete route:** change delete route ([ad29a67](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/ad29a679da73f467c1744c90fa65f484b2ad9b06))

## 6.0.0 (2023-04-08)


### ⚠ BREAKING CHANGES

* **app (new methods):** - SESSION_TOKEN_KEY deprecated in favour of SESSION_SECRET
- AUTH_TOKEN_KEY
deprecated in favour of AUTH_TOKEN_SECRET
- PASSWORD_BLACK_LIST deprecated in favour of
DISALLOWED_PASSWORDS
* **app (src/index.js):** \r
- `express-user-manager.getDbDriver` has been removed. Calls to it will
error.\r
- `express-user-manager.getDbAdapter(adapter)` no longer returns a constructor, instead it
returns an object. This means the following no longer works:\r
```\r
const DataStore =
userManager.getDbAdapter(adapter);\r
const store = new DataStore(); // Error: DataStore is not a
constructor\r
\r
userManager.set('store', store);\r
```\r
Do this instead:\r
`const store =
userManager.getDbAdapter(adapter);`\r
This still performs all the previous initialization steps,
but internally.
* **supported databases:** Calls to `express-user-manager.getDbDriver('mysql')` will fail. Passing connection
parameters to the constructor returned by the call to `express-user-manager.getDbDriver()` no longer
connects to the database, the `connect()` method must be explicitly called on the instantiated
object and passed the connection parameters. `express-user-manager.getDbDriver()` is now deprecated
and will be removed in an upcoming release, use `express-user-manager.getDbAdapter()` instead.
* **user delete route:** Calls to the previous route with /delete in the path will henceforth fail
* **app:** Code using the previous 'listen()' will fail since the userModule instance is no
longer returned as a result of a call to 'listen()' rather it is now exported from the index.js
file, and the call to userModule.listen() returns undefined.
* **data-store:** Apps relying on the previous method of setting and detecting the database engine
will break as the two methods differ completely both in philosophy and implementation. Also, though
minor, the directory "databases/drivers" has been replaced with "lib/stores".

### Features

* **/api/v1/users/:username:** implement route /api/v1/users/:username to get a user by username ([803e81c](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/803e81cf613193ffadeb50adcca88f688734cf72))
* **api user routing:** setup user routes: /api/v1/users routes ([66e38b3](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/66e38b3852e716834021368fd691fc39c357bd44))
* **app (new methods):** add new configuration and initialization methods ([8e306ef](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/8e306ef58a3f36fdf218b569ef197730dc4d1974))
* **application:** allow automatic creation of API endpoints for clients app ([61af991](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/61af9918511452a416a7e4e90610cd4656138a88))
* **application:** emit events on important actions in application ([1384968](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/138496885cac3f3dcb317a97130f893689ecf584))
* **built-in server:** add a built-in server ([4c6f5d2](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/4c6f5d21f9fb9294a1ba85fb48801feacbe66488))
* **custom routes:** allow users to specify custom routes ([2338257](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/233825746552cd207f1c7a0da354fe521da03f73))
* **data-store:** provide API for setting the database (data store) engine ([c390255](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/c3902559cb1a123b33fd5dff97b31316d75aa568))
* **datastore:** add option for exiting script if database connectoin fails ([7ebe25d](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/7ebe25d533eb7fa36fd5adc1da86818728f06d06))
* **db (mongodb):** setup database (mongodb) ([e875bf8](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/e875bf874981ad041f8b6fc413b06253577f841f))
* **debug output:** let clients specify name for turning on debug output ([f9b2ff6](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/f9b2ff6eaddb1c147aad75c53acf234e2506c127))
* **hooks:** implement methods to unregister hooks ([2590cc2](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/2590cc22ebb81aaf922565719b7201c6e1d1ad7e))
* **hooks:** implement request hooks ([445f32a](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/445f32a238b45e6686087b102cfb9ff93ecf801d))
* **hooks:** implement response hooks ([a919078](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/a91907886ec1cb5b853ce2ee023b15101e6036e4))
* **initialization (appmodule.listen):** allow clients to specify the base API route on init ([50c1619](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/50c161991660116511d26ada889b4c9b9c6fe72d))
* **middlewares:** export middlewares as part of the userModule object ([f5be995](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/f5be9958c119abf3a9fa96fb307fbd08069d6d5c))
* **passwords:** allow customization of password length and non-secure passwords list ([cf2d977](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/cf2d977d11803c142855611e7b9137a70093fe9a))
* **routing:** implement user data update route ([f487bf0](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/f487bf0ddd46f238f6469ae863b7da36aa960164))
* **routing:** setup routing with express server ([23c9743](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/23c974352ebc17aba658b16a925221c7925556e9))
* **supported database engines:** add support for MySQL Database using MySQL2 and Sequelize adapter ([f86217b](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/f86217bcc58ee90c4fc87fcce4be3848bfef62ef))
* **supported databases:** add support for more databases ([ad39a98](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/ad39a987f62bd5d57c315726d5c0cea50f0b31eb))
* **user:** add route for deleting user, also write tests to cover the feature ([f830f54](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/f830f54a8732e78d2566887b90c868f34baf462f))
* **users listing:** implement results filtering, pagination, and limit ([3309734](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/3309734e72276473fd87f6e7e16db12a9806e673))
* **users search:** add ability to search users by keys: firstname, lastname, username, email ([2e06c69](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/2e06c6946542a2b8e3c8ff30f4613289c181211d))


### Bug Fixes

* **databases:adapter:mongoose:** fix the getUsers() filtering bug ([bfcb508](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/bfcb5081625ce40f66b31d3d207c7500dfd7b055))
* **index.js:** fix mount point and routing configuration issues ([c2a1bb3](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/c2a1bb3196861ed7faf952916a133220abd231c7)), closes [#3](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/issues/3)
* **login:** fix user login bug ([e9ba6ce](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/e9ba6cefb884e69f9896c19ac4c634585e5d58a1))
* **mongoose db file:** fix wrong attempt at connecting to DB when no arguments are passed ([0a39758](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/0a3975896f28d6b9b595be549688d60a22c21537))
* **password validator:** fix bug in password validation routine ([2cd3c21](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/2cd3c214964fe7d0a27c588f6794e78f89789ead)), closes [#2](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/issues/2)
* **routing:** remove not-found and internal-server error routing ([94a57eb](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/94a57eb7037b502c29367ec7b8b8f3b1370f0ba8))
* **user data:** fix error with retrieving user data via email or password ([0ce3d50](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/0ce3d50bf81f09e5282edd264c78e478bb17bf4b))


* **app (src/index.js):** simplify the API setup ([e49c432](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/e49c432fd84af759a784b071b64cfa7625e88122))
* **app:** add the 'listen' and 'getDbDriver' methods to the returned module API ([0c611f0](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/0c611f0071be049f2b41d03d2c2e8e841d4f5a5c))
* **user delete route:** change delete route ([ad29a67](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/ad29a679da73f467c1744c90fa65f484b2ad9b06))

## 5.0.0 (2023-04-08)


### ⚠ BREAKING CHANGES

* **app (new methods):** - SESSION_TOKEN_KEY deprecated in favour of SESSION_SECRET
- AUTH_TOKEN_KEY
deprecated in favour of AUTH_TOKEN_SECRET
- PASSWORD_BLACK_LIST deprecated in favour of
DISALLOWED_PASSWORDS
* **app (src/index.js):** \r
- `express-user-manager.getDbDriver` has been removed. Calls to it will
error.\r
- `express-user-manager.getDbAdapter(adapter)` no longer returns a constructor, instead it
returns an object. This means the following no longer works:\r
```\r
const DataStore =
userManager.getDbAdapter(adapter);\r
const store = new DataStore(); // Error: DataStore is not a
constructor\r
\r
userManager.set('store', store);\r
```\r
Do this instead:\r
`const store =
userManager.getDbAdapter(adapter);`\r
This still performs all the previous initialization steps,
but internally.
* **supported databases:** Calls to `express-user-manager.getDbDriver('mysql')` will fail. Passing connection
parameters to the constructor returned by the call to `express-user-manager.getDbDriver()` no longer
connects to the database, the `connect()` method must be explicitly called on the instantiated
object and passed the connection parameters. `express-user-manager.getDbDriver()` is now deprecated
and will be removed in an upcoming release, use `express-user-manager.getDbAdapter()` instead.
* **user delete route:** Calls to the previous route with /delete in the path will henceforth fail
* **app:** Code using the previous 'listen()' will fail since the userModule instance is no
longer returned as a result of a call to 'listen()' rather it is now exported from the index.js
file, and the call to userModule.listen() returns undefined.
* **data-store:** Apps relying on the previous method of setting and detecting the database engine
will break as the two methods differ completely both in philosophy and implementation. Also, though
minor, the directory "databases/drivers" has been replaced with "lib/stores".

### Features

* **/api/v1/users/:username:** implement route /api/v1/users/:username to get a user by username ([803e81c](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/803e81cf613193ffadeb50adcca88f688734cf72))
* **api user routing:** setup user routes: /api/v1/users routes ([66e38b3](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/66e38b3852e716834021368fd691fc39c357bd44))
* **app (new methods):** add new configuration and initialization methods ([8e306ef](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/8e306ef58a3f36fdf218b569ef197730dc4d1974))
* **application:** allow automatic creation of API endpoints for clients app ([61af991](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/61af9918511452a416a7e4e90610cd4656138a88))
* **application:** emit events on important actions in application ([1384968](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/138496885cac3f3dcb317a97130f893689ecf584))
* **built-in server:** add a built-in server ([4c6f5d2](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/4c6f5d21f9fb9294a1ba85fb48801feacbe66488))
* **custom routes:** allow users to specify custom routes ([2338257](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/233825746552cd207f1c7a0da354fe521da03f73))
* **data-store:** provide API for setting the database (data store) engine ([c390255](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/c3902559cb1a123b33fd5dff97b31316d75aa568))
* **datastore:** add option for exiting script if database connectoin fails ([7ebe25d](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/7ebe25d533eb7fa36fd5adc1da86818728f06d06))
* **db (mongodb):** setup database (mongodb) ([e875bf8](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/e875bf874981ad041f8b6fc413b06253577f841f))
* **debug output:** let clients specify name for turning on debug output ([f9b2ff6](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/f9b2ff6eaddb1c147aad75c53acf234e2506c127))
* **hooks:** implement methods to unregister hooks ([2590cc2](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/2590cc22ebb81aaf922565719b7201c6e1d1ad7e))
* **hooks:** implement request hooks ([445f32a](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/445f32a238b45e6686087b102cfb9ff93ecf801d))
* **hooks:** implement response hooks ([a919078](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/a91907886ec1cb5b853ce2ee023b15101e6036e4))
* **initialization (appmodule.listen):** allow clients to specify the base API route on init ([50c1619](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/50c161991660116511d26ada889b4c9b9c6fe72d))
* **middlewares:** export middlewares as part of the userModule object ([f5be995](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/f5be9958c119abf3a9fa96fb307fbd08069d6d5c))
* **passwords:** allow customization of password length and non-secure passwords list ([cf2d977](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/cf2d977d11803c142855611e7b9137a70093fe9a))
* **routing:** implement user data update route ([f487bf0](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/f487bf0ddd46f238f6469ae863b7da36aa960164))
* **routing:** setup routing with express server ([23c9743](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/23c974352ebc17aba658b16a925221c7925556e9))
* **supported database engines:** add support for MySQL Database using MySQL2 and Sequelize adapter ([f86217b](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/f86217bcc58ee90c4fc87fcce4be3848bfef62ef))
* **supported databases:** add support for more databases ([ad39a98](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/ad39a987f62bd5d57c315726d5c0cea50f0b31eb))
* **user:** add route for deleting user, also write tests to cover the feature ([f830f54](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/f830f54a8732e78d2566887b90c868f34baf462f))
* **users listing:** implement results filtering, pagination, and limit ([3309734](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/3309734e72276473fd87f6e7e16db12a9806e673))
* **users search:** add ability to search users by keys: firstname, lastname, username, email ([2e06c69](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/2e06c6946542a2b8e3c8ff30f4613289c181211d))


### Bug Fixes

* **databases:adapter:mongoose:** fix the getUsers() filtering bug ([bfcb508](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/bfcb5081625ce40f66b31d3d207c7500dfd7b055))
* **index.js:** fix mount point and routing configuration issues ([c2a1bb3](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/c2a1bb3196861ed7faf952916a133220abd231c7)), closes [#3](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/issues/3)
* **login:** fix user login bug ([e9ba6ce](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/e9ba6cefb884e69f9896c19ac4c634585e5d58a1))
* **mongoose db file:** fix wrong attempt at connecting to DB when no arguments are passed ([0a39758](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/0a3975896f28d6b9b595be549688d60a22c21537))
* **password validator:** fix bug in password validation routine ([2cd3c21](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/2cd3c214964fe7d0a27c588f6794e78f89789ead)), closes [#2](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/issues/2)
* **routing:** remove not-found and internal-server error routing ([94a57eb](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/94a57eb7037b502c29367ec7b8b8f3b1370f0ba8))
* **user data:** fix error with retrieving user data via email or password ([0ce3d50](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/0ce3d50bf81f09e5282edd264c78e478bb17bf4b))


* **app (src/index.js):** simplify the API setup ([e49c432](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/e49c432fd84af759a784b071b64cfa7625e88122))
* **app:** add the 'listen' and 'getDbDriver' methods to the returned module API ([0c611f0](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/0c611f0071be049f2b41d03d2c2e8e841d4f5a5c))
* **user delete route:** change delete route ([ad29a67](https://github.com/shyam1joshi/express-user-managerWithFlexibleUserUpdates/commit/ad29a679da73f467c1744c90fa65f484b2ad9b06))

## 4.0.0 (2023-04-08)


### ⚠ BREAKING CHANGES

* **app (new methods):** - SESSION_TOKEN_KEY deprecated in favour of SESSION_SECRET
- AUTH_TOKEN_KEY
deprecated in favour of AUTH_TOKEN_SECRET
- PASSWORD_BLACK_LIST deprecated in favour of
DISALLOWED_PASSWORDS
* **app (src/index.js):** \r
- `express-user-manager.getDbDriver` has been removed. Calls to it will
error.\r
- `express-user-manager.getDbAdapter(adapter)` no longer returns a constructor, instead it
returns an object. This means the following no longer works:\r
```\r
const DataStore =
userManager.getDbAdapter(adapter);\r
const store = new DataStore(); // Error: DataStore is not a
constructor\r
\r
userManager.set('store', store);\r
```\r
Do this instead:\r
`const store =
userManager.getDbAdapter(adapter);`\r
This still performs all the previous initialization steps,
but internally.
* **supported databases:** Calls to `express-user-manager.getDbDriver('mysql')` will fail. Passing connection
parameters to the constructor returned by the call to `express-user-manager.getDbDriver()` no longer
connects to the database, the `connect()` method must be explicitly called on the instantiated
object and passed the connection parameters. `express-user-manager.getDbDriver()` is now deprecated
and will be removed in an upcoming release, use `express-user-manager.getDbAdapter()` instead.
* **user delete route:** Calls to the previous route with /delete in the path will henceforth fail
* **app:** Code using the previous 'listen()' will fail since the userModule instance is no
longer returned as a result of a call to 'listen()' rather it is now exported from the index.js
file, and the call to userModule.listen() returns undefined.
* **data-store:** Apps relying on the previous method of setting and detecting the database engine
will break as the two methods differ completely both in philosophy and implementation. Also, though
minor, the directory "databases/drivers" has been replaced with "lib/stores".

### Features

* **/api/v1/users/:username:** implement route /api/v1/users/:username to get a user by username ([803e81c](https://github.com/simplymichael/express-user-manager/commit/803e81cf613193ffadeb50adcca88f688734cf72))
* **api user routing:** setup user routes: /api/v1/users routes ([66e38b3](https://github.com/simplymichael/express-user-manager/commit/66e38b3852e716834021368fd691fc39c357bd44))
* **app (new methods):** add new configuration and initialization methods ([8e306ef](https://github.com/simplymichael/express-user-manager/commit/8e306ef58a3f36fdf218b569ef197730dc4d1974))
* **application:** allow automatic creation of API endpoints for clients app ([61af991](https://github.com/simplymichael/express-user-manager/commit/61af9918511452a416a7e4e90610cd4656138a88))
* **application:** emit events on important actions in application ([1384968](https://github.com/simplymichael/express-user-manager/commit/138496885cac3f3dcb317a97130f893689ecf584))
* **built-in server:** add a built-in server ([4c6f5d2](https://github.com/simplymichael/express-user-manager/commit/4c6f5d21f9fb9294a1ba85fb48801feacbe66488))
* **custom routes:** allow users to specify custom routes ([2338257](https://github.com/simplymichael/express-user-manager/commit/233825746552cd207f1c7a0da354fe521da03f73))
* **data-store:** provide API for setting the database (data store) engine ([c390255](https://github.com/simplymichael/express-user-manager/commit/c3902559cb1a123b33fd5dff97b31316d75aa568))
* **datastore:** add option for exiting script if database connectoin fails ([7ebe25d](https://github.com/simplymichael/express-user-manager/commit/7ebe25d533eb7fa36fd5adc1da86818728f06d06))
* **db (mongodb):** setup database (mongodb) ([e875bf8](https://github.com/simplymichael/express-user-manager/commit/e875bf874981ad041f8b6fc413b06253577f841f))
* **debug output:** let clients specify name for turning on debug output ([f9b2ff6](https://github.com/simplymichael/express-user-manager/commit/f9b2ff6eaddb1c147aad75c53acf234e2506c127))
* **hooks:** implement methods to unregister hooks ([2590cc2](https://github.com/simplymichael/express-user-manager/commit/2590cc22ebb81aaf922565719b7201c6e1d1ad7e))
* **hooks:** implement request hooks ([445f32a](https://github.com/simplymichael/express-user-manager/commit/445f32a238b45e6686087b102cfb9ff93ecf801d))
* **hooks:** implement response hooks ([a919078](https://github.com/simplymichael/express-user-manager/commit/a91907886ec1cb5b853ce2ee023b15101e6036e4))
* **initialization (appmodule.listen):** allow clients to specify the base API route on init ([50c1619](https://github.com/simplymichael/express-user-manager/commit/50c161991660116511d26ada889b4c9b9c6fe72d))
* **middlewares:** export middlewares as part of the userModule object ([f5be995](https://github.com/simplymichael/express-user-manager/commit/f5be9958c119abf3a9fa96fb307fbd08069d6d5c))
* **passwords:** allow customization of password length and non-secure passwords list ([cf2d977](https://github.com/simplymichael/express-user-manager/commit/cf2d977d11803c142855611e7b9137a70093fe9a))
* **routing:** implement user data update route ([f487bf0](https://github.com/simplymichael/express-user-manager/commit/f487bf0ddd46f238f6469ae863b7da36aa960164))
* **routing:** setup routing with express server ([23c9743](https://github.com/simplymichael/express-user-manager/commit/23c974352ebc17aba658b16a925221c7925556e9))
* **supported database engines:** add support for MySQL Database using MySQL2 and Sequelize adapter ([f86217b](https://github.com/simplymichael/express-user-manager/commit/f86217bcc58ee90c4fc87fcce4be3848bfef62ef))
* **supported databases:** add support for more databases ([ad39a98](https://github.com/simplymichael/express-user-manager/commit/ad39a987f62bd5d57c315726d5c0cea50f0b31eb))
* **user:** add route for deleting user, also write tests to cover the feature ([f830f54](https://github.com/simplymichael/express-user-manager/commit/f830f54a8732e78d2566887b90c868f34baf462f))
* **users listing:** implement results filtering, pagination, and limit ([3309734](https://github.com/simplymichael/express-user-manager/commit/3309734e72276473fd87f6e7e16db12a9806e673))
* **users search:** add ability to search users by keys: firstname, lastname, username, email ([2e06c69](https://github.com/simplymichael/express-user-manager/commit/2e06c6946542a2b8e3c8ff30f4613289c181211d))


### Bug Fixes

* **databases:adapter:mongoose:** fix the getUsers() filtering bug ([bfcb508](https://github.com/simplymichael/express-user-manager/commit/bfcb5081625ce40f66b31d3d207c7500dfd7b055))
* **index.js:** fix mount point and routing configuration issues ([c2a1bb3](https://github.com/simplymichael/express-user-manager/commit/c2a1bb3196861ed7faf952916a133220abd231c7)), closes [#3](https://github.com/simplymichael/express-user-manager/issues/3)
* **login:** fix user login bug ([e9ba6ce](https://github.com/simplymichael/express-user-manager/commit/e9ba6cefb884e69f9896c19ac4c634585e5d58a1))
* **mongoose db file:** fix wrong attempt at connecting to DB when no arguments are passed ([0a39758](https://github.com/simplymichael/express-user-manager/commit/0a3975896f28d6b9b595be549688d60a22c21537))
* **password validator:** fix bug in password validation routine ([2cd3c21](https://github.com/simplymichael/express-user-manager/commit/2cd3c214964fe7d0a27c588f6794e78f89789ead)), closes [#2](https://github.com/simplymichael/express-user-manager/issues/2)
* **routing:** remove not-found and internal-server error routing ([94a57eb](https://github.com/simplymichael/express-user-manager/commit/94a57eb7037b502c29367ec7b8b8f3b1370f0ba8))
* **user data:** fix error with retrieving user data via email or password ([0ce3d50](https://github.com/simplymichael/express-user-manager/commit/0ce3d50bf81f09e5282edd264c78e478bb17bf4b))


* **app (src/index.js):** simplify the API setup ([e49c432](https://github.com/simplymichael/express-user-manager/commit/e49c432fd84af759a784b071b64cfa7625e88122))
* **app:** add the 'listen' and 'getDbDriver' methods to the returned module API ([0c611f0](https://github.com/simplymichael/express-user-manager/commit/0c611f0071be049f2b41d03d2c2e8e841d4f5a5c))
* **user delete route:** change delete route ([ad29a67](https://github.com/simplymichael/express-user-manager/commit/ad29a679da73f467c1744c90fa65f484b2ad9b06))

### [3.0.1](https://github.com/simplymichael/express-user-manager/compare/v3.0.0...v3.0.1) (2022-04-16)


### Bug Fixes

* **index.js:** fix mount point and routing configuration issues ([c2a1bb3](https://github.com/simplymichael/express-user-manager/commit/c2a1bb3196861ed7faf952916a133220abd231c7)), closes [#3](https://github.com/simplymichael/express-user-manager/issues/3)
* **password validator:** fix bug in password validation routine ([2cd3c21](https://github.com/simplymichael/express-user-manager/commit/2cd3c214964fe7d0a27c588f6794e78f89789ead)), closes [#2](https://github.com/simplymichael/express-user-manager/issues/2)

## [3.0.0](https://github.com/simplymichael/express-user-manager/compare/v2.1.0...v3.0.0) (2021-01-02)


### ⚠ BREAKING CHANGES

- **app (new methods):**
    - SESSION_TOKEN_KEY deprecated in favour of SESSION_SECRET
    - AUTH_TOKEN_KEY deprecated in favour of AUTH_TOKEN_SECRET
    - PASSWORD_BLACK_LIST deprecated in favour of DISALLOWED_PASSWORDS
- **app (src/index.js):**
    - `express-user-manager.getDbDriver` has been removed. Calls to it will error.
    - `express-user-manager.getDbAdapter(adapter)` no longer returns a constructor, instead it returns an object.
      This means the following no longer works:
      ```
      const DataStore = userManager.getDbAdapter(adapter);
      const store = new DataStore(); // Error: DataStore is not a constructor

      userManager.set('store', store);
      ```

      Do this instead: `const store = userManager.getDbAdapter(adapter);`

      This still performs all the previous initialization steps, but internally.

### Features

- **app (new methods):** add new configuration and initialization methods ([8e306ef](https://github.com/simplymichael/express-user-manager/commit/8e306ef58a3f36fdf218b569ef197730dc4d1974))
- **hooks:** implement methods to unregister hooks ([2590cc2](https://github.com/simplymichael/express-user-manager/commit/2590cc22ebb81aaf922565719b7201c6e1d1ad7e))
- **hooks:** implement request hooks ([445f32a](https://github.com/simplymichael/express-user-manager/commit/445f32a238b45e6686087b102cfb9ff93ecf801d))
- **hooks:** implement response hooks ([a919078](https://github.com/simplymichael/express-user-manager/commit/a91907886ec1cb5b853ce2ee023b15101e6036e4))
- **routing:** implement user data update route ([f487bf0](https://github.com/simplymichael/express-user-manager/commit/f487bf0ddd46f238f6469ae863b7da36aa960164))
- **app (src/index.js):** simplify the API setup ([e49c432](https://github.com/simplymichael/express-user-manager/commit/e49c432fd84af759a784b071b64cfa7625e88122))

## [2.1.0](https://github.com/simplymichael/express-user-manager/compare/v2.0.0...v2.1.0) (2020-12-21)


### Features

* **passwords:** allow customization of password length and non-secure passwords list ([cf2d977](https://github.com/simplymichael/express-user-manager/commit/cf2d977d11803c142855611e7b9137a70093fe9a))
* **users listing:** implement results filtering, pagination, and limit ([3309734](https://github.com/simplymichael/express-user-manager/commit/3309734e72276473fd87f6e7e16db12a9806e673))

## [2.0.0](https://github.com/simplymichael/express-user-manager/compare/v1.1.0...v2.0.0) (2020-12-20)


### ⚠ BREAKING CHANGES

* **supported databases:** Calls to `express-user-manager.getDbDriver('mysql')` will fail. Passing connection
parameters to the constructor returned by the call to `express-user-manager.getDbDriver()` no longer
connects to the database, the `connect()` method must be explicitly called on the instantiated
object and passed the connection parameters. `express-user-manager.getDbDriver()` is now deprecated
and will be removed in an upcoming release, use `express-user-manager.getDbAdapter()` instead.

### Features

* **supported databases:** add support for more databases ([ad39a98](https://github.com/simplymichael/express-user-manager/commit/ad39a987f62bd5d57c315726d5c0cea50f0b31eb))


### Bug Fixes

* **databases:adapter:mongoose:** fix the getUsers() filtering bug ([bfcb508](https://github.com/simplymichael/express-user-manager/commit/bfcb5081625ce40f66b31d3d207c7500dfd7b055))

## [1.1.0](https://github.com/simplymichael/express-user-manager/compare/v0.0.8-custom-base-route...v1.1.0) (2020-12-19)


### Features

* **supported database engines:** add support for MySQL Database using MySQL2 and Sequelize adapter ([f86217b](https://github.com/simplymichael/express-user-manager/commit/f86217bcc58ee90c4fc87fcce4be3848bfef62ef))
