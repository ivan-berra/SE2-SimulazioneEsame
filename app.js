const express = require('express');

function string_square(s) {

    if (s != null && s.charAt(0) == '"' && s.charAt(s.length - 1) == '"') {
        var stringLength = s.length - 2;
        return { "result": (stringLength * stringLength) };
    } else return { "result": -1 };

}

module.exports = string_square;

const app = express();
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log('Example app listening on port ' + PORT));

app.get('/square', function(req, res) {

    res.setHeader('ContentType', 'application/json');

    var stringa = req.query.string;

    console.log("Received: " + stringa);

    var result = string_square(stringa);

    res.status(200);

    res.send(result);

})