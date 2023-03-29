const express = require('express');
const path = require('path');
const app = express();
const rutasMain = require('./routes/main');
const rutasServices = require('./routes/services');
const rutasBlog = require('./routes/blog');

app.use(express.static(path.resolve(__dirname,'../public')));
app.set('view engine', 'ejs');


app.listen(80, () => console.log('server running on port 3000'));


app.use('/', rutasMain);
app.use('/services', rutasServices);
app.use('/blog', rutasBlog);

app.use((req, res, next) => {
    res.status(404).render(path.resolve(__dirname,'./views/notFound.ejs'));
})