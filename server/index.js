/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {   
    res.write("Hello hdh");
    setTimeout(() => { res.write('still on');res.end(); }, 1000);
    //res.end();
});

server.listen(8080);

