{
    var Circle = /** @class */ (function () {
        function Circle() {
        }
        return Circle;
    }());
    var Rectangle = /** @class */ (function () {
        function Rectangle() {
        }
        return Rectangle;
    }());
    var calculateShapeArea = function (shape) {
        var res;
        if (shape.shape === "circle") {
            res = Math.PI * Math.pow(shape.radius, 2);
        }
        if (shape.shape === "rectangle") {
            res = shape.width * shape.height;
        }
        return res;
    };
    // Sample Input 1:
    var circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    // Sample Output 1:
    // 78.54;
    // Sample Input 2:
    var rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log("🚀 ~ circleArea:", circleArea);
    console.log("🚀 ~ rectangleArea:", rectangleArea);
    // 24;
    // Sample Output 2:
}
