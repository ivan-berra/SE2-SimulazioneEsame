const express = require('express');

function string_square(s) {

    if (typeof s === "string")
        return { "result": s.length * s.length };
    else return { "result": -1 };

}

module.exports = string_square;

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Example app listening on port ' + PORT));

app.get('/square', function(req, res) {

    res.contentType(application / json);

    var stringa = req.query.string;

    var result = string_square(stringa);

    res.status(200);

    res.send(result);

})