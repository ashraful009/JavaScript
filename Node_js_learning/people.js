
// setTimeout(() => {
//       console.log('test');
// }, 1000)

// var people = ['Ashraful', 'Siam', 'Shanto'];
// var a = 10;
// function test (){
//     console.log("test");
// }

// module.exports = {
//       people: people,
//       a: a,
//       test: test
// };

const people = (req, res) =>{
    console.log(req.app.local.title);
    res.send('This is home page');
}

module.exports = people;