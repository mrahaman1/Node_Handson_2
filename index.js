const express = require('express');
const app = express();
const fs = require('fs')
const path = require('path')

app.get('/', (req,res)=>{
    res.send('I am on the home page')
    res.end();
})

app.get('/gallery', (req,res)=>{
    res.send('I am on the Gallery page')
    res.end();
})

// app.get('/submit', (req,res)=>{
    // res.send('Get of Submit......')
    // res.end();
// })

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
    res.send('Post Worked......')
    res.end();
})

app.listen(8000, ()=>{
    console.log('Application is running')
});