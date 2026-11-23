import http from "http";
import fs from "fs";

const createServer((req,res)=>{
    if (req.url === '/'){
        fs.readFile("home.html",(err,data)=>{
            res.end(data);
        });
    }
    else if ("home.html"){
        res.end(data);
    }
    else if ("cart.html") {
        res.end(data);
    }
    else if ("order.html") {
        res.end(data);
    }
    else{
        res.end("error : 404 Page not found");

    }

});