const express = require('express');
const app = express();
const fs = require('fs')
const path = require('path')

app.get('/', (req,res)=>{
    res.send("<h1>I am on the home page</h1>")
    res.end();
})

app.get('/gallery', (req,res)=>{
    res.send("<h1>I am on the Gallery page</h1>")
    res.end();
})

app.get('/submit', (req,res)=>{
    res.send("<h1>Get of Submit......</h1>")
    res.end();
})
// 
// app.post("/submit", (req,res)=>{
    //  const content= "hello";
    // //  fs.appendFile(path.join(__dirname, "/massage.text"),content,function(err){
        // if(err){
            // console.log(err);
            // return;
        // }
        // res.send("Data Submitted")
    // });
//  });


app.post('/submit', (req,res)=>{
    res.send("<h1>Post Worked......</h1>")
    res.end();
})

app.listen(8000, ()=>{
    console.log('Application is running')
});