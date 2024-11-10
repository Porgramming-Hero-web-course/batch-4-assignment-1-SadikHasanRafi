{


  class Circle  {
    shape: "circle";
    radius: number;
  
  }
  
  class Rectangle  {
    shape:  "rectangle";
    width: number;
    height: number;
  
  }


const calculateShapeArea = (shape: Circle | Rectangle): number => { 

  let res

  if (  shape.shape === "circle") {
    res = Math.PI * Math.pow(shape.radius, 2);
  } 
  if ( shape.shape === "rectangle") {
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