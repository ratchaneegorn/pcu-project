var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('GET rout on addevent');
});

router.post("/addevent", (req, res) => {
    res.send('POST rout on addevent');
    // const name = req.body.name
    // authorize()
    // .then(oAuth2Client => {
    //     addEvent(oAuth2Client, )
    // })
})
module.exports = router;