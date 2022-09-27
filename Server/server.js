//this is the file we are gonna run
let comments= [
    'SERVERS ARE GREAT',
    'You suck',
    'I want awards',
    'fancy'
];
const express= require('express');

//express is a function

const app=express();
                    //string is file path to public folder
app.use(express.static('./server/public'));    

//App get is an event handler for I WANT COMMENTS    
//event app.on(get)
                    //request and response
app.get('/comments', (req, res) => {
    console.log('jimmy wants those comments');

    res.send(comments);
});

//first comment

app.get('/comments/first', (req, res)=>{
    console.log('comments/first');
    res.send(comments[0]);
})
   //first argument is the port number, second is a function
        //function serves as the onready function
        //use over 3000 for these
        // we are 'listening' on port 3000

        //built in special url  'localhost'
                //anonymous functions must be connected to a variable or passed in a function

app.listen(3000, () => {
console.log('we\'re live 💸');
});

console.log('in server.js 😄');


