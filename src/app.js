const express = require ('express');
const app = express();
const path = require('path');   
const morgan = require('morgan');
const mongoose = require ('mongoose');

//connecting to db mongo altas
mongoose.connect('mongodb+srv://jhon:jhon@cluster0.ela7t.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true ,
    useUnifiedTopology:true
})
.then(()=> console.log('DB is connected'))
.catch(e =>console.log(e));

//importing routes
const indexRoutes = require ('./routes/index');

//settings
app.set('port' , process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine' , 'ejs')


//middlewares
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev')); 

//routes
app.use('/', indexRoutes);

//static file
app.listen(app.get('port'), () =>{
    console.log(`server on port ${app.get('port')}`)
});