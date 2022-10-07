/*
const http = require('http');
const fs= require('fs');

const server= http.createServer((req,res)=> {
    const url = req.url;
    const method = req.method;

    if(url== '/'){


        res.write('<html>');
        res.write('<head><title>Module 1 node demo </title> </head>');
        res.write('<body><form action="/message" method="POST"> <input type="text" name="message"><button type="submit"></button> </form><body>');
        res.write('</html');
        return res.end();
    }

        if(url == '/message' && method=== 'POST'){
            const body= [];
            req.on('data', (chunk)=> {
                body.push(chunk)
            });

            return req.on('end', ()=> {

                const parseBody = Buffer.concat(body).toString();
                const message = parseBody.split('=')[1];
                fs.writeFileSync('message.txt', message);
                res.statusCode= 302;
                res.setHeader('Location', '/');
                return res.end();

                //console.log(message);
            })

            
        }

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Module 1 node demo </title> </head>');
        res.write('<body><form action="/message" method="POST> <input type="text" name="message"s> </form><body>');
        res.write('</html');
        res.end();




})

server.listen(3001);

*/



const http= require('http')
const fs= require('fs');

const server= http.createServer((req,res)=> {
    const url = req.url; const method= req.method;

    
    if(url==='/'){

        res.write('<html>');
        res.write('<body>');
        res.write('<form action="/message" method="POST">');
        res.write('<input type="text" ><button type="submit"></button>');
        res.write('</form></body></html>');
        res.end();

    }

    if(url=== '/message'){
        const body=[];
        req.on('data', (chunk)=> {
            body.push(chunk);
        })

        return req.on('end', ()=> {
            const parsedBody= Buffer.concat().toString();
            const message= parsedBody.split('=')[1];
            //fs.writeFileSync('message.txt', message);
            //res.statusCode=302;
            //res.setHeader('Location', '/');
            //return res.end();
          
            fs.writeFile('message.txt', message, ()=> {
                res.statusCode=302;
                res.setHeader('Location', '/');
                return res.end();

            })

        })
    }


    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body><h1>check this cool code out</h1></body>');
    res.write('</html>');
    return res.end();

})