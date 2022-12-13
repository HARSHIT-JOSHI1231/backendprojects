const express = require('express');
const app = express();
const port = 8000;

//use express router
app.use('/',require('./routes'));

//use express router
app.use('/', require('./routes/index') );


app.listen(port, function(err){
    if(err){
        console.log(`Error in runing the server: ${err}`);
    }

    console.log(`Server is runing inside ${port}`);
});

///module.exports = router;
//module.exports = router;