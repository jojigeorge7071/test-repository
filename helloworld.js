const http =require('http')

const myServer = http.createServer((req,res)=>{
    console.log('New request recived');
    console.log('add console in master');
    res.end('God is Love ')

})
myServer.listen(5000,()=>{console.log("server started 5000")})