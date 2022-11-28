var arr = [1,2,3];
var max = arr.reduce(function(a, b) {
    return Math.min(a, b);
});

console.log(max);