function cube (a) {
   return a * a * a;
}
function subtract (a) {
  return 10 - a;
}
function add (a) {
  return a + 50;
}
console.log(add(subtract(cube(2))));
