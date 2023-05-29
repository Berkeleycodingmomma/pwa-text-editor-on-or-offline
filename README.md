# pwa-text-editor-on-or-offline

// - Strategies: https://developers.google.com/web/tools/workbox/modules/workbox-strategies
// - Precaching: https://developers.google.com/web/tools/workbox/modules/workbox-precaching


<iframe src="https://drive.google.com/file/d/18nrwA2vs7NWTacLipcb8ZEIOe5h9lyCk/preview" width="640" height="480"></iframe>


https://youtu.be/tsxejVJhqBI




# You & Your Friends; API Social Network 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [Open Source Initiative Link](https://opensource.org/licenses/MIT)

## Description.

This is an API built on Node.js that enables users to perform CRUD operations on data models related to social networking. It utilizes a NoSQL database and offers support for various models such as friends, users, thoughts, and reactions. These models can be retrieved either by their unique IDs or in their entirety. By leveraging the power of Node.js and Mongoose, this API provides a user-friendly and scalable solution for managing social networking data, removing the limitations typically associated with traditional relational databases.
#

## Table of Contents:
- [Overview](#Overview)
- [The Challenge](#The-Challenge)
- [Usage Information](#Usage-Information)
- [Installation Process](#Installation-Process)
- [Built With](#Built-With)
- [Code Snippets](#Code-Snippets)
- [What I Learned](#What-I-Learned)
- [License](#License)
- [Author](#Author)
- [Acknowledgments](#Acknowledgments)
#

# Overview

## The Challenge:

The task involved creating a RESTful API for a social media startup, enabling them to carry out CRUD operations on data models for users, thoughts, and reactions. The API was developed utilizing Node.js and Mongoose, with a focus on scalability to handle substantial volumes of unstructured data.

API must allow users to:

- Create and delete user accounts.
- Create, read, update, and delete thoughts.
- Add and remove reactions to thoughts.
- Add and remove friends to a user's friend list.

Test API: use Insomnia or a similar tool to send HTTP requests to the API endpoints and verify that the responses are correct.
#
## Assigned User Story:
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria:
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove 
friends to a user’s friend list

```

## Usage Instructions:

1. Repository: Access the open documentation and run 'npm i' to install the necessary dependencies. Don't forget to update the '.env' file.
2. In the project's root directory, create a file named '.env' and include the following variables.
3. Once the server is up and running, you can utilize a tool like Insomnia to test the API endpoints.
4. With Insomnia, test the routes for categories, products, and tags using the API's GET, POST, PUT, and DELETE methods. Ensure that data creation, updating, and deletion operations are successful within the database by testing the route at http://localhost:3001.

#### Available Endpoints:

Each endpoint must include the necessary data in the request body or URL parameters as specified in the acceptance criteria.

1. GET /api/users - get all users
2. GET /api/users/:userId - get a single user by ID
3. POST /api/users - create a new user
4. PUT /api/users/:userId - update a user by ID
5. DELETE /api/users/:userId - delete a user by ID
6. GET /api/thought - get all thought
7. GET /api/thought/:thoughtId - get a single thought by ID
8. POST /api/thought - create a new thought
9. PUT /api/thought/:thoughtId - update a thought by ID
10. DELETE /api/thought/:thoughtId - delete a thought by ID
11. POST /api/thought/:thoughtId/reactions - add a reaction to a thought
12. DELETE /api/thought/:thoughtId/reactions/:reactionId - remove a reaction from a thought
13. POST /api/users/:userId/friends/:friendId - add a friend to a user's friend list
14. DELETE /api/users/:userId/friends/:friendId - remove a friend from a user's friend list

## GitHub Repository:
[GitHub Repository:](https://github.com/Berkeleycodingmomma/you-and-your-friends-api-social-network)

## YouTube Walkthrough Video:
[Click Here to Watch](https://youtu.be/xsS7M2-5MhM)

## Screenshots:
### Figure 1. Screeshot of project

![Screen Shot 2023-05-23 at 5 07 39 PM](https://github.com/Berkeleycodingmomma/you-and-your-friends-api-social-network/assets/127444682/10b5d1a3-7a1e-40cc-b54e-a2d1009997df)

#

## Installation Process:
1. Clone the starter code repository.
2. Navigate to the repository directory.
3. Install the required dependencies.
4. Start the backend server and serve the client.
5. Build the JavaScript files using webpack.
6. Run the webpack plugins to generate additional files.
7. Ensure your application is using supported next-gen JavaScript features.
8. Open the text editor in your web browser to create IndexedDB storage.
9. Enter content in the text editor and let it save automatically.
10. Close and reopen the text editor to retrieve the saved content.
11. Click the "Install" button to download the web application as an icon.
12. Load the web application from the downloaded icon on your desktop.
13. Ensure the service worker is registered using Workbox.
14. Pre-cache static assets, including subsequent pages, using the service worker.
15. Deploy the application to Heroku, considering proper build scripts.

#
## Built With:

- Express: [Download Express](https://www.npmjs.com/package/express)
- if-env: [Download if-env](https://www.npmjs.com/package/if-env)
- concurrently: [Download concurrently](https://www.npmjs.com/package/concurrently)
- nodemon: [Download nodemon](https://www.npmjs.com/package/nodemon)
- @babel/core: [Download @babel/core](https://www.npmjs.com/package/@babel/core)
- @babel/plugin-transform-runtime: [Download @babel/plugin-transform-runtime](https://www.npmjs.com/package/@babel/plugin-transform-runtime)
- @babel/preset-env: [Download @babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)
- @babel/runtime: [Download @babel/runtime](https://www.npmjs.com/package/@babel/runtime)
- babel-loader: [Download babel-loader](https://www.npmjs.com/package/babel-loader)
- css-loader: [Download css-loader](https://www.npmjs.com/package/css-loader)
- html-webpack-plugin: [Download html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)
- http-server: [Download http-server](https://www.npmjs.com/package/http-server)
- style-loader: [Download style-loader](https://www.npmjs.com/package/style-loader)
- webpack: [Download webpack](https://www.npmjs.com/package/webpack)
- webpack-cli: [Download webpack-cli](https://www.npmjs.com/package/webpack-cli)
- webpack-dev-server: [Download webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)
- webpack-pwa-manifest: [Download webpack-pwa-manifest](https://www.npmjs.com/package/webpack-pwa-manifest)
- workbox-webpack-plugin: [Download workbox-webpack-plugin](https://www.npmjs.com/package/workbox-webpack-plugin)
- babel: [Download babel](https://www.npmjs.com/package/babel)
- code-mirror-themes: [Download code-mirror-themes](https://www.npmjs.com/package/code-mirror-themes)
- idb: [Download idb](https://www.npmjs.com/package/idb)
- License Badge: [MIT](https://opensource.org/licenses/MIT))
- Visual Studio Code: [Website](https://code.visualstudio.com/)
- Heroku CLI: [Download Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

## Code Snippets 
#

```sh

const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`))


This code initializes an Express server, serves static files from the "../client/dist" directory, handles URL-encoded and JSON 
data in requests, sets up HTML-related routes, and starts the server on a specified port.

```
#


```sh

 <!doctype html><html lang="en"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>J.A.T.E</title><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/codemirror.min.css"><script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/codemirror.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/mode/javascript/javascript.min.js"></script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/theme/monokai.min.css"><script defer="defer" src="main.bundle.js"></script><script defer="defer" src="install.bundle.js"></script><meta name="theme-color" content="#225ca3" /><link rel="manifest" href="./manifest.json" /></head><body><nav id="navbar"><div class="nav-btn"><a class="btn btn-sm btn-dark" id="buttonInstall" role="button">Install!</a></div><h1>Just Another Text Editor</h1><div class="navbar-brand"><img src="./assets/icons/icon_96x96.png"/></div></nav><main id="main"><div class="loading-container"><div class="loading-spinner"></div></div></main></body></html>
  
The above code provided appears as it does in the "dist" files because it has been processed and transformed by the build tools     webpack, which applied optimizations, minification, and asset management techniques to produce a final version of the 
code for deployment.

```
#


```sh

registerRoute(
  ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
  new StaleWhileRevalidate({
    cacheName: 'asset-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

This code registers a route handler that caches and serves assets (styles, scripts, and workers) using the Stale-While-Revalidate # strategy with specified cache settings.

```
#


```sh

 plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'JATE',
      }),
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
      }),
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: "Just Another Text Editor",
        short_name: "JATE",
        description: "PWA Text Editor App",
        background_color: "#225ca3",
        theme_color: "#225ca3",
        start_url: "./",
        publicPath: "./",
        icons: [
          {
            src: path.resolve("./src/images/logo.png"),
            sizes: [16, 96, 128, 192, 256, 384, 512],
            destination: path.join("assets", "icons"),
          },
        ],

This code configures various plugins for webpack, including HtmlWebpackPlugin, InjectManifest, and WebpackPwaManifest, to generate a Progressive Web App (PWA) text editor called "JATE" with specified settings and assets.

```
#

## What I Learned:
1. Developed a RESTful API using Node.js and Mongoose.
2. Employed a NoSQL database to efficiently manage unstructured data.
3. Established endpoints to facilitate CRUD operations on data models for users, thoughts, and reactions.
4. Implemented additional endpoints to enable the addition and removal of friends from a user's friend list.
5. Thoroughly tested API endpoints using the Insomnia tool.
6. Proficiently handled HTTP requests and processed JSON-formatted data.
7. Ensured security and confidentiality by utilizing environment variables and .env files for sensitive data storage.
#



## License & Copyright ©
#
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [Open Source Initiative Link](https://opensource.org/licenses/MIT)

#
### Copyright © 2023 Amanda Gray
#
```md

MIT License

Copyright (c) 2023 Amanda Gray

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, srcribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```
#
## Author

Follow me on Github at [AmandaGray](https://github.com/Berkeleycodingmomma)! 
Find me on Linkedin at [AmandaGray](https://www.linkedin.com/in/amanda-gray-121a6a254/)! 

## Acknowledgments

-UC Berkeley Extension, Coding Bootcamp

-Shout out to my Instructor Jerome Chenette and all his TA's: Manuel Nunes, Kyle Vance, and James Harding

-Google Search! Seriously, thank you google search!
#
© 2023 [AmandaGray](https://github.com/Berkeleycodingmomma)! Confidential and Proprietary. All Rights Reserved.
