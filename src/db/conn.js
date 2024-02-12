const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/dymamic_web", {
    //useCreateIndex:true,
    //useNewUrlParser:true,
    //useUnifiedTopology:true
}).then(()=>{
    console.log("connection success");
}).catch((error) => {
    console.log(error);
})
