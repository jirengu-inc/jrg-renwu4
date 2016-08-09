var obj = {
  name: 'hunger',
  sex: 'male',
  age: 28
}
for (var item in obj) {
  console.log(item + ": " + obj[item]);
}
