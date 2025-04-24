let add = function (a, b) {
    console.log(a + b);
}
add(2, 3);
setTimeout(function () {
    add(2, 3);
    console.log("After 5 sec");
}, 5000);