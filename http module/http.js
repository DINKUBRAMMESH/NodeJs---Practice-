const http =require('http')
let server = http.createServer((req,res)=>{
    res.end("hello ,gm")
})

server.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log("server running hhtp:localhost.8080"  )
})