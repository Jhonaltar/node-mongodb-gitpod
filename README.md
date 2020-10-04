# node-mongodb-gitpod

const express = require ('express');
const app = express();
const path = require('path');   
const morgan = require('morgan');


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




///////////////////////////
https://www.youtube.com/watch?v=YRB9SvnETBk
https://www.youtube.com/watch?v=3J925fRl_UE

video: 39:18

bootswatch cdn :https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/litera/bootstrap.min.css


/* app.get('/',  async(req,res)=>{
    const tasks = await Task.find();
    res.render('index', {tasks});
}) */ 

// CREATE TASKS /////////////////////////////////
/* app.post('/create', async(req,res)=>{
    
   const newTask = new Task({
        task: req.body.task,
        description: req.body.description,
        active: req.body.active
    })
    await newTask.save();
    res.redirect('/');
}) */

////////////////////////////////////////////////////
/* const mongoose = require ('mongoose');

mongoose.connect('mongodb+srv://jhon:jhon@cluster0.ela7t.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true ,
    useUnifiedTopology:true
})
.then(()=> console.log('DB is connected'))
.catch(e =>console.log(e)); */

node-mongodb-gitpod


///////
<a href="/turn/<%= tasks[i]._id %>" 
    class="btn <%= tasks[i].status ? 'btn-success' : 'btn-dark' %>">

      Activo

</a>

/////
<a href="/turn/<%= tasks[i]._id %>">
                                <% if (tasks[i].status == true) { %>
                                    <button type="button" class="btn btn-success">Activado</button>
                                <% } else { %>
                                    <button type="button" class="btn btn-dark">Desactivado</button>
                                <% } %>
                                </a>
