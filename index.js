var express = require("express");
var app = express();
app.use(express.static("root"));
data = [
    {"id":"1","name":"js"},
    {"id":"3","name":"python"},
    {"id":"4","name":"php"}
]
app.get("/skills/json",(req,res)=>{
    send = [];
    data.forEach(ele => {
        if(ele["name"].includes(req.query["q"])){
            send.push(ele);
        }
    });
    console.log(send);
    res.send(send);
})

app.listen(3000,()=>{
    console.log("listening on port 3000");
});