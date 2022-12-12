const express = require('express');
//const router = require('./routes/index');
const app = express();
const port = 8000;



//use express router
app.use('/', require('./routes/index') );


app.listen(port, function(err){
    if(err){
        console.log(`Error in runing the server: ${err}`);
    }

    console.log(`Server is runing in port ${port}`);
});

///module.exports = router;