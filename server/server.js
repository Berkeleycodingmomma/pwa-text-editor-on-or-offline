// const idb = require('idb');
// const express = require('express');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, '../client/src')));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// require('./routes/htmlRoutes')(app);

// // Catch-all route
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/src/index.html'));
// });

// app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'client', 'src')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));

