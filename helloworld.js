const http =require('http')

const myServer = http.createServer((req,res)=>{
    console.log('New request recived');
    console.log('Third commit');
    res.end('God is Love \nEdit after first commit')

})
myServer.listen(5000,()=>{console.log("server started 5000")})