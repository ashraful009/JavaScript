const express = require('express');
const app = express();

app.use(express.json());


function errorHandler(err, req, res, next) {
    if(res.headersSent) {
        return next(err);
    }

    res.status(500).json({Error: err});
}

app.listen(3000, () => {
    console.log('listening on port 3000');
});