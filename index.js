/* //Modules
const {Krishnam,Upadhyay} = require('./names')
const sayHi = require('./utils')


sayHi('susan');
sayHi(Krishnam);
sayHi(Upadhyay);


 */

// const { reset } = require("nodemon");

//OS Module ************************************************
/* const os = require('os')

//infro about current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds

console.log(`The system Uptime is ${os.uptime()}`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS) */


//PATH MODULE *******************************************

/* const path = require('path')
console.log(path.sep)

const filePath = path.join('/content','test.txt')
console.log(filePath);
const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,"content","test.txt");
console.log(absolute); */


//FSMODULE SYNC ******************************************************

/* onst{readFileSync,writeFileSync, readFile} = require('fs');

const first=readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/subfolder/test.txt','utf-8');

console.log(first,second);

writeFileSync('./content/returl-sync.txt',`here is the result:${first},${second}`,{flag :'a'})


 */

//FSMODULE {************************************
/* readFile('./content/first.txt',(err,result=>{
    if(err){
        console.log(err)
        return
    }
    const frist = result;
    readFile('./content/second.txt','utf-8',(err,result)={
        if(err){
            console.log(err)
            return
        }

        
        


})))
 */
//HTTP MODULE ******************************************


/* const http =  require('http');
const server = http.createServer((req,res)=>{
    
    res.write('Welcome to our page');


});

server.listen(5000); */

/*  
const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url =='/'){
        res.end('Home Page')

    }
    if(req.url ==='/about'){
        for(let i =0;i;i<1000){
            for(let j=0;j<1000;j++){
                console.loge
            }
        }
        res.end('About Page')
    }
    res.end('Error Page')

    console.log()

})
 */

//Hosting a wesite on server withnode.js

/* 
const http = require('http')
const {readFileSync}= require('fs')

//get all fielsin

const homePage = readFileSync('./content/subfolder/index.html')
const homeStyle= readFileSync('./content/subfolder/style.css')
const homeJs = readFileSync('./content/subfolder/browser.js')




const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url==='/'){

    
    res.writeHead(200,{'contnent-type':'text/html'})
    res.write(homePage);
    
    res.end()}
    //Styles

    else if(url ==='/style.css'){
        res.writeHead(200,{'contnent-type':'text/css'})
    res.write(homeStyle);
    
    res.end()

    }
    else if(url ==='/browser.js'){
        res.writeHead(200,{'contnent-type':'text/JavaScript'})
    res.write(homeJs);
    
    res.end()

    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write("<h1>sorry</h1>")
        res.end('pagenot found')
    }


})




server.listen(5000)
 */
/* 
const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    console.log('User usedt he esorce')
    res.status(200).send('.HOmePage');
    
})

app.get('/about',(req,res)=>{
    res.send('About Page')
})

app.all('*',(req,res)=>{
    res.status(200).status(200).send('<h1>resource not Found </h1>')
})

app.listen(5000,()=>{
    console.log('server is listenon port no: 5000')
})

//app.get
//app.post
//app.put
//app.delete
//ap.all
//app.use
//app.listen */


//********************************

/* 
const express = require('express')
const path = require('path')

const app =express()


//setup static and middleware 
app.use(express.static("./content/subfolder"))


app.get('/',(req,res)=>{

res.sendFile(path.resolve(__dirname,'./content/subfolder/index.html'))


})


app.get('*',(req,res)=>{
    res.status(404).send("resource not found")
})




app.listen(5000,()=>{
    console.log("server startedonthe port number : 5000 >")
}) */

/* const express= require('express');
const app = express();


app.get('/',(req,res)=>{
    res.json([{name:'John'},{name:'susan'}]);

})

app.get('/api/products')

app.listen(5000,()=>{
    console.log('server is listening on Port 5000....')

})
 */



//*****************************************************
/* 
const express =require('express')
const app= express()
const logger= require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')





app.use(morgan('tiny'));

// app.use(logger,authorize);

app.get('/',(req,res)=>{
    
    res.send('Home')
   
})
 



app.get('/about',(req,res)=>{
    res.send('About')
})
app.get('/api/products',(req,res)=>{
    
    res.send('HProducts')
   
})




app.get('/api/items',(req,res)=>{

    console.log(req.user)
    res.send('Items');
})

app.listen(5000,()=>{

    console.log('server is listening on port 5000')

})


*/
//HTTP METHOD*****************************************************************


const express = require('express')
const app =express()
let {people}=require('./people')

//static assets


app.use(express.static('./content/subfolder'))

//paser from data

app.use(express.urlencoded({extended:false}))



app.get('/',(req,res)=>{
    res.sendFile('./content/subfolder/index.html')
})

app.post('/login',(req,res)=>{
    const {name}=req.body
    if(name){
        return res.status(200).send(`Welcome${name}`)

    }
    else{
        res.status(200).send(`please provide credecntioal`)
    }
    res.send('post')

})
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})

})



app.listen(5000,()=>{
    console.log('server started on port 5000:')
})












 


















    


