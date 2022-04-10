const express  =require("express");
const { createConnection } = require("./db");
const { meetupRouter } = require("./routers/meetup");
const port =80;
const app = express();
app.use(express.urlencoded({extended : true}));
const swig = require("swig");
app.use(express.json());


//Only for developement mode and not for the production mode
swig.setDefaults = {
    cache  : false
}

app.engine('html' , swig.renderFile);
app.set('view engine' , 'html');
app.set('views' , __dirname + '/views');

createConnection().then(()=>{
    console.log("Connected..")
}).catch((err)=>{
    console.log({
        message : "Coonection error", 
        error  : err.message
    })
});

app.listen(port , ()=>{
    console.log("Server has started running on port " ,port);
})

// this is use to redirect to some other url from the given url
app.get('/' , (req,res)=>{
    res.redirect('/meetups');
})


app.use('/meetups' , meetupRouter);