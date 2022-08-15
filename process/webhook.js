const express = require('express')
const request = require('request');
const fs = require('fs')

let app = express()
let port = 1704

app.get('/send', function(req, res){
    if(JSON.parse(fs.readFileSync('./banned.json')).includes(req.headers['ip'])){
        res.send().status(403)
    }
    else{
        request.post('https://discord.com/api/webhooks/1008810771599339620/0S4eAhKtgux6Fs55rtFisPsTwynlKW5d_T1w29c6GLE_aPkcCYNW_N5pNqy2Ly0XFL4K',{ json: { content: req.headers['content'], username: `${req.headers['author']} [${req.headers['ip']}]`, } },
            function (error, response, body) {
                if (error) {
                    console.log(error);
                    res.send().status(500)
                }
                else{
                    res.send().status(200)
                }
            }
        );

    }
})

app.listen(port, () => {
    console.log('Starting listening on port '+port.toString())
})