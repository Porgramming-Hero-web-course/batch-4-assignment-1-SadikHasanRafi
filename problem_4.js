{
    var Circle_1 = /** @class */ (function () {
        function Circle(shape, radius) {
            this.radius = radius;
            this.shape = shape;
        }
        return Circle;
    }());
    var Rectangle_1 = /** @class */ (function () {
        function Rectangle(width, height, shape) {
            this.width = width;
            this.height = height;
            this.shape = shape;
        }
        return Rectangle;
    }());
    var calculateShapeArea = function (shape) {
        console.log("🚀 ~ calculateShapeArea ~ shape:", shape);
        var res;
        if (shape instanceof Circle_1) {
            shape = new Circle_1(shape.shape, shape.radius);
            console.log("🚀 ~ calculateShapeArea ~ shape:", shape);
            res = Math.PI * Math.pow(shape.radius, 2);
        }
        if (shape instanceof Rectangle_1) {
            console.log("🚀 ~ calculateShapeArea ~ shape:", shape);
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
