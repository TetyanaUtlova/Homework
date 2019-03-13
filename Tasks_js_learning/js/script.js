// js hometask

var a = 6; b = 3;
console.log(a>b);

var a = 3; b = 3;
console.log(a==b);

var a = 3; b = 6;
console.log(a!=b);

var a = 1; b = "";
console.log(a===b);

console.log('B'>'A','a'>'Z');

var a = false; b = 0;
console.log(a>=b);

var a = '2' === 2 ? 'ok' : 'not';
console.log(a);


var a = 5; b = 3;
console.log(a>b) && (a===b);
console.log(true && 0 && ('a' < 'Z'));
console.log(a>b) || true || ('2' == 2) || (false == '');
console.log(a<b) && (0 == false);
console.log(!(2==2) || (true && ''));

  // practice 2
// (switch)
	
	// var takeNumber = prompt('press some number');
	// switch (takeNumber) {
	//     case '1':
	//         console.log ('a');
	//         break;
	//     case '2':
	//         console.log ('b');
	//         break;
	//     case '3':
	//         console.log ('c');
	//         break;
	//     default:
	//         console.log ('z');
	// }
	

	//  (for)
	

	// for (var i=1; i<=9; i++) {
	//     console.log (i*i);
	// }
	

	// (while)
	

	// var i=1;
	// while (i<=9) {
	//     console.log (i*i);
	//     i++;
	// }
	

	//   (function)
	

	// function showBigest (x1, x2) {
	//     if (x1>x2) {
	//         return x1;
	//     }
	//     else if (x1==x2) {
	//         return null;
	//     }
	//     else {
	//         return x2;
	//     }
	// }
	// console.log (showBigest (7,5));
	

	//  (random)
	
	// var num1 = Math.floor(Math.random() * 100) + 1;
	//     console.log (x1);
	// function oddEvenNumber () {
	//     var x2 = x1/2;
	//     if (x2 == parseInt(x2)) {
	//         return true;
	//     }
	//     else {
	//         return false;
	//     }
	// }
	// console.log (oddEvenNumber ());
	

	// (arr)
	

	// var arr = ['lorem', 'ipsum', 'is', 'simply', 'dummy'];
	// var newArr = arr.map( function upperFirst (i) {
	//         return i[0].toUpperCase() + i.slice(1);
	// } );
  // console.log(newArr.join(' '));
 ////////////////////////////////////////////////////////////////// 

  // var person = function showName(enterName) {
	//         var getName = function() {
	//         enterName = prompt('Enter name:');
	//                 return enterName;
	//         }
	//         return getName;
	// }
	// personX = person();
	// console.log('Your name is ' + personX());
	

	//   this.calculator
	

	// var calculator = {number1: 5, number2: 4};
	// function sum() {
	//         return this.number1 + this.number2;
	// }
	// function mul() {
	//         return this.number1 * this.number2;
	// }
	// calculator.sum = sum;
	// calculator.mul = mul;
	// console.log(calculator.sum());
	// console.log(calculator.mul());
	

	// calc.constructor
	

	// function calculator(num1, num2) {
	//     this.num1 = num1;
	//     this.num2 = num2;
	//     this.sum = function() {
	//         return num1 + num2;
	//     }
	//     this.mul = function() {
	//         return num1 * num2;
	//     }
	// };
	// var calc = new calculator(7, 5);
	// console.log(calc.sum());
  // console.log(calc.mul());
  

	//  lesson
	

	        // var skill = {
	        //     name: 'html',
	        //     level: 5,
	        //     getStr: function() {
	        //         return String(this.name + ' - ' + this.level);
	        //     }
	        // };
	        // console.log(skill.getStr());
	

		
	        // String.prototype.newString = function() {
	        //     return new String(this[0].toUpperCase() + this.slice(1, -1) + this[this.length - 1].toUpperCase());
	        // }
	        // var str = 'lorem ipsum';
	        // console.log(str.newString());
	

	
	








