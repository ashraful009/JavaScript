// const _ = require('lodash');
// const people = require('./people')
// console.log(people.people);
// console.log(people.a);
// people.test();

// console.log(_.last(people.people));

// const path = require('path')
// const mypath = 'D:/Node_js_learning/index.js';
// console.log(path.basename(mypath));
// console.log(path.dirname(mypath));
// console.log(path.extname(mypath));
// console.log(path.parse(mypath));
//const people = require('./people');


//pp.locals.title = 'my app';

//app.use(express.json());

//app.get('/', people);




// app.post('/', (req, res) => {
//     console.log(req.body);
//     res.send('Got a POST request');
// });




//const admin = express();

// admin.on('mount',(parent) => {
//     console.log('Adminmonted');
//     console.log(parent); // This will log the parent router (the main app in this case)
// })

// admin.get('/dashboard', (req, res) => {
//     console.log(admin.mountpath); // This will log the mount path of the admin router

//     res.send('Admin Dashboard');

// });
//app.use('/admin', admin); // Mount the admin router on the /admin path



// const express = require('express');
// const app = express();



// // app.param('id', (req, res, next, id) => {
// //     const user = {
// //         userId: id,
// //         name: 'Ashraful',
// //     }
// //     req.userDetails = user;
// //     next();
// // });

// app.set('view engine', 'ejs');

// app.get('/about/mission', (req, res) => {
//     res.render('pages/about');
// });

// // app.get('/user/:id', (req, res) => {
// //     console.log(req.userDetails);
// //     res.send('User ID: ' + req.userDetails.userId + ', Name: ' + req.userDetails.name);
// // });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// }); 






////    Request /////

// const express = require('express');
// const cookieParser = require('cookie-parser');
// const app = express();
// app.use(cookieParser());
// app.use(express.json());
// ;
// const adminRoute = express.Router();
// adminRoute.get('/dashboard', (req, res) => { 
// console.log(req.hostname);
// res.send('We are in Admin Dashboard');
// });

// app.use('/admin', adminRoute);

// app.get('/user/:id', (req, res) => { 
// console.log(req.secure);
// res.send('Hello world');
// });

// app.post('/user/', (req, res) => { 
// console.log(req.body);
// res.send('Hello world post');
// });

// app.listen(3000, () => { 
// console.log('listening on port 3000');
// });



// const express = require("express");

// const app = express();

// app.use(express.json());


// app.get("/", (req, res) => {
//    res.send("This is home page with get request");
//  });

// app.post("/", (req, res) => {
//    console.log(req.body);
//    res.send("This is home page with post request");
// });

// app.listen(3000, () => {
//   console.log("listening on port 3000");
// });



// req.baseUrl
// req.originalUrl
// req.path
// req.protocol
// req.secure
// req.ip
// req.hostname
// req.method
// req.query
// req.params
// req.body
// req.cookies
// req.signedCookies



                             //  Response Object /////
const express = require('express');
const app = express();
app.set('view engine', 'ejs');

// res.locals // res.headersSent
// app.get('/about', (req, res) => {
//     console.log(res.headersSent);
//     res.render('pages/about', {
//         name: 'Ashraful',
//         age: 25,
//     });
//     console.log(res.headersSent);
// });


app.get('/about', (req, res) => {
    // res.json({
    //     name: 'Ashraful',
    //     age: 25,
    // });

    //res.sendStatus(403);
    res.format({
        'text/html': () => {
            res.send('<h1>Hello world</h1>');
        },
        'application/json': () => {
            res.json({ name: 'Ashraful', age: 25 });
        },
        'text/plain': () => {
            res.send('Hello world');
        },
        default: () => {
            res.status(406).send('Not Acceptable');
        },
    });

});

// res.statusCode
// res.send()

app.listen(3000, () => {
    console.log('listening on port 3000');
});