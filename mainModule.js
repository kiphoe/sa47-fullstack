//learning export

//flat import
const subModuleA = require ('./subModuleA');
console.log(subModuleA);

//flat import invoke functions inside the sub module
//individual exports functions
const subModuleB = requore('./subModuleB');
console.log(subModuleB.sayHelloInEnglish());
console.log(subModuleB.sayHelloInMalay());
console.log(subModuleB.sayHelloInChinese());

//import sub module within a export block
const subModuleC = requore('./subModuleC');
console.log(subModuleC.sayHelloInEnglish());
console.log(subModuleC.sayHelloInMalay());
console.log(subModuleC.sayHelloInChinese());

//pass in value from the require of a submodule
const subModuleC2 = requore('./subModuleC2')('Kenneth','Phang');

//import classes from submodule
const subModuleC3 = require('./subModuleC3');
const apple = new subModuleC3.Apple(3);
const apple = new subModuleC3.Orange(5.6);

Apple.peel();
Orange.peel();
