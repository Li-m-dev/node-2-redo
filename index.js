require('dotenv').config();
const express = require('express');
const {json} = require('body-parser');
const massive = require('massive');
const {getAll, create} = require('./products_controller');


const app = express();

app.use(json());
massive(process.env.CONNECTION_STRING).then(dbInstance => {
app.set('db', dbInstance)
}).catch(err => console.log(err))

const port = process.env.PORT || 3000;




app.get('/api/products', getAll);
app.post('/api/products', create)



app.listen(port, () => console.log(`Listening on port ${port}`))
