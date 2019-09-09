const express = require('express')
const next = require('next')
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production'
const app = next({
    dev
})
const handle = app.getRequestHandler()
const fs = require('fs');

var serverTools = require('./serverTools')


app.prepare()
    .then(() => {
        const server = express()

        server.use(bodyParser.urlencoded({
            extended: false
        }));

        server.use(bodyParser.json());

        server.post('/update-form', (req, res) => {
            let file = req.body.file;

            let newPhoto = {
                "key": {
                    "id": null,
                    "link": req.body.link,
                    "img": req.body.img,
                    "header": req.body.header,
                    "description": req.body.description,
                    "subHead": req.body.subHead
                }
            }

            serverTools.update(file, newPhoto)

            res.redirect('/json/update-success');
        })

        server.post('/delete-form', (req, res) => {
            let file = req.body.file;

            let id = req.body.id;

            serverTools.delete(file, id)

            res.redirect('/json/delete-success');
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })


        server.listen(3030, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3030')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })