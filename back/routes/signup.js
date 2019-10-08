var express = require('express');
var router = express.Router();

router.post('/', (res, req)=>{
    console.log("this is excute");
    console.log(req.body.name);
    res.send();
});

module.exports = router;