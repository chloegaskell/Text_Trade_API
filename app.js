/** seperation just allows you to run w multiple routes
*/

var express = require('express');
const route = require('./routes/route');

const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();
app.use(cors());
const port = 4000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
route(app);
app.listen(process.env.PORT || port, () => {
  /** ignore. */
});
