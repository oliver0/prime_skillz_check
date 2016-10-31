// 1 - Create an object constructor
// for RightTriangle that takes 3 arguments
// - side1
// - side2
// - base
// The object should have two functions
// - area() returns the area of this triangle
// - perimeter() returns the perimeter of this triangle
function RightTriangle(side1, side2, base){
  function area(){
    return (side1 * base) / 2;
  }
  function perimeter(){
    side1 + side2 + base;
  }
}
// 2 - Create two instances of the RightTriangle
// object. Console log the results of calling
// both functions on both instances.
var triangle1 = new RightTriangle(5, 5, 5);
var triangle2 = new RightTriangle(5, 5, 5);
console.log(triangle1.area(), triangle1.perimeter());
console.log(triangle2.area(), triangle2.perimeter());
