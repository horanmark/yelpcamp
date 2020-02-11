var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

const myPort = 3000;

var campgrounds = [
    {name:"Salmon Creek", image:"https://pixabay.com/get/57e8dc414e5ba814f6da8c7dda793f7f1636dfe2564c704c722772d79645c65f_340.jpg"},
    {name:"Bass Creek", image:"https://pixabay.com/get/57e8dc414e5ba814f6da8c7dda793f7f1636dfe2564c704c722772d79645c65f_340.jpg"},
    {name:"Trout Creek", image:"https://pixabay.com/get/57e8dc414e5ba814f6da8c7dda793f7f1636dfe2564c704c722772d79645c65f_340.jpg"},
    {name:"Salmon Creek", image:"https://pixabay.com/get/57e8dc414e5ba814f6da8c7dda793f7f1636dfe2564c704c722772d79645c65f_340.jpg"},
    {name:"Bass Creek", image:"https://pixabay.com/get/57e8dc414e5ba814f6da8c7dda793f7f1636dfe2564c704c722772d79645c65f_340.jpg"},
    {name:"Trout Creek", image:"https://pixabay.com/get/57e8dc414e5ba814f6da8c7dda793f7f1636dfe2564c704c722772d79645c65f_340.jpg"},
    {name:"Salmon Creek", image:"https://pixabay.com/get/57e8dc414e5ba814f6da8c7dda793f7f1636dfe2564c704c722772d79645c65f_340.jpg"},
    {name:"Bass Creek", image:"https://pixabay.com/get/57e8dc414e5ba814f6da8c7dda793f7f1636dfe2564c704c722772d79645c65f_340.jpg"},
    {name:"Trout Creek", image:"https://pixabay.com/get/57e8dc414e5ba814f6da8c7dda793f7f1636dfe2564c704c722772d79645c65f_340.jpg"}
]

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){

    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");

});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(myPort, function(req, res){
    console.log("Starting yelpcamp server on "+myPort);
});

