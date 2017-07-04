var express=require("express");
var app=express();
var setupControllers=require("./controllers/setupControllers");
setupControllers(app);
var port=process.env.PORT||3000;
app.listen(port);