function getInfo(name, age, sex) {
    console.log('name:', name);
    console.log('age:', age);
    console.log('sex:', sex);
    console.log(arguments);
    arguments[0] = 'valley';
    console.log('name', name);
}
getInfo('hunger', 28, '男');
getInfo('hunger', 28);
getInfo('男');
