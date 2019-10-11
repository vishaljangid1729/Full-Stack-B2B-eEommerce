var express = require('express');
var router = express.Router();
const data = {
    name: "vishal",
    age: 20
}
router.get('/', (req, res)=>{
    res.status(200).send(data);
});

module.exports = router;