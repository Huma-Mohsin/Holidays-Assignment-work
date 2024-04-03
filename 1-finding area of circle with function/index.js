//Q-1 Finding an area of circle.
// CREATING A DYNAMIC FUNCTION.
var pi = 3.142;
function AreaOfCircle(radius) {
    var formula = pi * (radius * radius);
    return Math.round(formula);
}
console.log("\n");
console.log("Area of circle is", AreaOfCircle(4.5), " ", "units");
console.log("\n");
console.log("Area of circle is", AreaOfCircle(4), " ", "units");
console.log("\n");
console.log("Area of circle is", AreaOfCircle(4.2), " ", "units");
