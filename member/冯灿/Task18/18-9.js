function ageSort(human) {
  human.sort(function(a, b) {
    return a.age - b.age;
  })
}
var john = {
  name: "John Smith",
  age: 23
}
var mary = {
  name: "Mary Key",
  age: 18
}
var bob = {
  name: "Bob-small",
  age: 6
}
var people = [john, mary, bob]
ageSort(people);
console.log(people); // [ bob, mary, john ]
