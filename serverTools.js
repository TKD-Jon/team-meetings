const fs = require('fs')

module.exports = {
    update: function (file, newPhoto) {

        let json = require(`./static/json/${file}`);

        let newID = json.length + 1;

        console.dir(newPhoto)
        console.dir(newPhoto.key.link)

        let updatedPhoto = {
            "key": {
                "id": newID,
                "link": newPhoto.key.link,
                "img": newPhoto.key.img,
                "header": newPhoto.key.header,
                "description": newPhoto.key.description,
                "subHead": newPhoto.key.subHead
            }
        };

        json.push(updatedPhoto)

        // console.dir(photos)

        // photos.newPhoto;

        fs.writeFile(`./static/json/${file}`, JSON.stringify(json), function (err) {
            console.log(err);
            console.dir(updatedPhoto);
        });
    },
    delete: function (file, del) {
        let json = require(`./static/json/${file}`);
        console.log(`json.length: ${json.length}`)

        console.dir(json[3]);
        console.dir(json[3].key.id);

        for (i = 0; i < json.length; i++) {
            if (i == del) {
                delete json.splice(del, 1);
            }
            // if (i > del) {
            //     json[i].id = `${i}`;
            // }
        }
        for (i = 0; i < json.length; i++) {
            json[i].key.id = `${i}`;
        }

        fs.writeFile(`./static/json/${file}`, JSON.stringify(json), function (err) {
            console.log(err);
        });

    }
};