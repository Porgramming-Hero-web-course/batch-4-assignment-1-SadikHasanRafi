var sumArray = function (params) {
    var result = 0;
    for (var i = 0; i < params.length; i++) {
        result = params[i] + result;
    }
    return result;
};
console.log(sumArray([1, 2, 3]));
