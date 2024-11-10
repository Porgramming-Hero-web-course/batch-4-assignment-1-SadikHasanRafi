{


  class Circle {
    shape: string;
    radius: number;
  
    constructor( shape: string,radius: number,) {
      this.radius = radius; 
      this.shape = shape;   
    }
  }
  
  class Rectangle {
    shape: string;
    width: number;
    height: number;
  
    constructor(width: number, height: number, shape: string) {
      this.width = width;    
      this.height = height;  
      this.shape = shape;    
    }
  }


const calculateShapeArea = (shape: Circle | Rectangle): number => { 
console.log("🚀 ~ calculateShapeArea ~ shape:", shape)

  let res

  if (shape instanceof Circle) {
    shape = new Circle(shape.shape, shape.radius)
    res = Math.PI * Math.pow(shape.radius, 2);
  } 
  if (shape instanceof Rectangle) {
    console.log("🚀 ~ calculateShapeArea ~ shape:", shape)
    res = shape.width * shape.height;
  }
  return res;
}

// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Output 1:
// 78.54;

// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});



console.log("🚀 ~ circleArea:", circleArea)
console.log("🚀 ~ rectangleArea:", rectangleArea)
// 24;
// Sample Output 2:

}