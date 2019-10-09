var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
    res.send("hello world");
})

router.post('/', (req, res)=>{
    console.log("this is excute");
    console.log(req.body);
    res.status(200).send(
        "hello from post req of signup"
    );
});

module.exports = router;