const http =require('http')

const myServer = http.createServer((req,res)=>{
    console.log('New request recived');
    res.end('God is Love')
    res.end('version-2')
})
myServer.listen(5000,()=>{console.log("server started 5000")})