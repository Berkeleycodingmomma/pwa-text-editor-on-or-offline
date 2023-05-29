# pwa-text-editor-on-or-offline

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [Open Source Initiative Link](https://opensource.org/licenses/MIT)

## Description.

In this challenge, you are asked to build a browser-based text editor that works online and offline. It should save content using IndexedDB, be a Progressive Web App (PWA), and use idb for database interaction. Implement a client-server folder structure, bundle JavaScript files with webpack, and handle modern JavaScript. Provide desktop installation and deploy to Heroku with proper build scripts.
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
The challenge is to create a text editor that works in a web browser and can be used offline. It should store data using IndexedDB as a backup option. You will use the idb package to handle data storage. The finished project needs to be deployed to Heroku. The goal is to build a reliable tool for creating and saving notes or code snippets, accessible both online and offline.


## Usage Instructions:
Following these instructions will allow you to create and retrieve notes or code snippets reliably using the text editor web application, both with and without an internet connection.

1. Open the text editor web application in your editor.
2. Upon opening, you should see a client-server folder structure.
3. From the root directory, run npm run start to start up the backend and serve the client.
4. Run the text editor application from your terminal, ensuring that your JavaScript files are bundled using webpack.
5. Run your webpack plugins to generate an HTML file, service worker, and manifest file.
6. Utilize next-gen JavaScript in your application, ensuring that the text editor functions in the browser without errors.
7. When you open the text editor, IndexedDB should immediately create a database storage.
8. Enter content in the text editor and click off the DOM window to save the content using IndexedDB.
9. Upon reopening the text editor after closing it, the content should be retrieved from IndexedDB.
10. Click on the Install button to download the web application as an icon on your desktop.
11. Load the web application, which should register a service worker using workbox.
12. Upon registering the service worker, your static assets should be pre-cached upon loading, including subsequent pages and static assets.
13. When deploying to Heroku, ensure you have proper build scripts for a webpack application.

#
## GitHub Repository: 
[GitHub Repository:](https://github.com/Berkeleycodingmomma/pwa-text-editor-on-or-offline)

## YouTube Demo Walkthrough Video:
[Click Here to Watch](https://youtu.be/tsxejVJhqBI)

## Screenshots:
### Figure 1. After User types out a comment, they click the Install button. User can close browser, search for the link again and it will bring up the site with any context that was priviously inserted before "install".

<img width="1431" alt="Screen Shot 2023-05-28 at 8 09 48 PM" src="https://github.com/Berkeleycodingmomma/pwa-text-editor-on-or-offline/assets/127444682/eb31996b-a0cc-4105-ac33-5ad26ce525dd">

### Figure 2. After site was brought back up through the search browser with the privious context, user can open the console and see 
the manifest.json file. 

<img width="733" alt="Screen Shot 2023-05-28 at 8 10 40 PM" src="https://github.com/Berkeleycodingmomma/pwa-text-editor-on-or-offline/assets/127444682/b6f4c081-3082-4db6-ae63-d6486ffc7871">

### Figure 3. The following image shows the application's registered service worker

<img width="742" alt="Screen Shot 2023-05-28 at 8 10 54 PM" src="https://github.com/Berkeleycodingmomma/pwa-text-editor-on-or-offline/assets/127444682/07135d3d-ffa6-4633-ac6c-a8d1113a7537">

### Figure 4. The image below shows the application's IndexedDB storage:

<img width="732" alt="Screen Shot 2023-05-28 at 8 11 31 PM" src="https://github.com/Berkeleycodingmomma/pwa-text-editor-on-or-offline/assets/127444682/f1642ffb-180b-466e-9084-3f1465042ac4">

### Figure 5. Lastly, this image show the "Cache Storage" in the console. It is a storage mechanism for caching network requests and responses, enabling offline access and optimizing web application performance.

<img width="1426" alt="Screen Shot 2023-05-28 at 8 11 47 PM" src="https://github.com/Berkeleycodingmomma/pwa-text-editor-on-or-offline/assets/127444682/89f3c432-1b27-43f9-9805-11675cddb277">

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

Extra resources that I used to complete this challenge: 
 - Strategies: https://developers.google.com/web/tools/workbox/modules/workbox-strategies
 - Precaching: https://developers.google.com/web/tools/workbox/modules/workbox-precaching

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


**This code initializes an Express server, serves static files from the "../client/dist" directory, handles URL-encoded and JSON 
data in requests, sets up HTML-related routes, and starts the server on a specified port.

```
#


```sh

 <!doctype html><html lang="en"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>J.A.T.E</title><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/codemirror.min.css"><script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/codemirror.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/mode/javascript/javascript.min.js"></script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/theme/monokai.min.css"><script defer="defer" src="main.bundle.js"></script><script defer="defer" src="install.bundle.js"></script><meta name="theme-color" content="#225ca3" /><link rel="manifest" href="./manifest.json" /></head><body><nav id="navbar"><div class="nav-btn"><a class="btn btn-sm btn-dark" id="buttonInstall" role="button">Install!</a></div><h1>Just Another Text Editor</h1><div class="navbar-brand"><img src="./assets/icons/icon_96x96.png"/></div></nav><main id="main"><div class="loading-container"><div class="loading-spinner"></div></div></main></body></html>
  
**The above code provided appears as it does in the "dist" files because it has been processed and transformed by the build tools     webpack, which applied optimizations, minification, and asset management techniques to produce a final version of the 
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

**This code registers a route handler that caches and serves assets (styles, scripts, and workers) using the Stale-While-Revalidate # strategy with specified cache settings.

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

**This code configures various plugins for webpack, including HtmlWebpackPlugin, InjectManifest, and WebpackPwaManifest, to generate a Progressive Web App (PWA) text editor called "JATE" with specified settings and assets.

```
#

## What I Learned:
###In this challenge, as a software engineering bootcamp student, I have learned to:

- Build a web-based text editor.
- Enable offline functionality using a Progressive Web App (PWA) approach.
- Store data persistently using IndexedDB.
- Implement immediate database storage for efficient usage.
- Save and retrieve content within the text editor.
- Set up a client-server folder structure.
- Bundle JavaScript files using webpack.
- Generate essential files (HTML, service worker, manifest).
- Write compatible code in next-gen JavaScript.
- Install the app as a desktop icon.
- Register a service worker for offline caching.
- Deploy the app to Heroku with appropriate build scripts.

In closing, through this challenge I have gained valuable experience in creating a web text editor with offline capabilities, utilizing IndexedDB for data storage, and deploying it to Heroku while ensuring optimal performance.

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
