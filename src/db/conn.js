const mongoose = require('mongoose');


// mongoose.set("strictQuery",false);
mongoose.connect('mongodb://0.0.0.0:27017/My-DataBase').then(() =>{
    console.log("Connection Is successful");
}).catch((e)=>{
    console.log("No Connection" +e);
})

