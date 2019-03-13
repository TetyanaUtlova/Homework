
// 
// var a ='some', b='Text'
// c = a + b;
// alert (c)
// c +=a;
// alert(c)
// console.log(a); 

// alert(11%2);
// alert(36%3);
// alert("5"+2);
// alert("Hello" + 5);
// var a=1;
// ++a;
// alert(a);
// a++
// alert(a)

// console.log(null);

// var title=2;
// var defoult=5;
// result = prompt (title, defoult);

//  result =confirm ("How many years are you?");

// var title = 'input your digits';
// var result = prompt(title);
// if (result == '10'){
//     console.log(result);
// }
// else if (result == null){
//      console.log("null");
// }
// else{
//     console.log(result);
// }


// var title = 'input your digits';
// var result = prompt(title);
// if (true){
//     console.log(result);
// }
// else if (result == null){
//      console.log("null");
// }
// else{
//     console.log(result);
// }


// var age = '19';
// var sucsess = true;
// if (age > 18) {
//     access = true;
//     console.log (sucsess)
// }else{
//     access = false;
//     console.log (false)
// }

// var age = 19;
// var access = true;
// access = (age > 18) ? true :false;
// console.log( 'access' );


// var title = 'input number';
// var result = prompt(title);

//  if (result >'0'){
//  console.log(1);
//  }
//  else if (result <'0'){
//       console.log(-1);
//  }
//  else{
//     console.log(0);
//  }


// var a = 2 ;

// switch (a) {
//     case 3:
//     alert ('Maluvato');
//     break;
//     case 4:
//     alert ('V tochku');
//     break;
//     case 5:
//     alert ('Perebir');
//     break;
//     default:
//     alert ('Ya takyx znachen ne znayu')
// }

// var n = 0;
// for(var i=0; i<=5; i++){
//     n+=i;
//     console.log(n);
// }

// var i = 0;
// while (i < 5) {
//     alert( i );
//     i++;
// }

// var i = 0;
// while (i < 5) {
//     console.log( i );
//     i++;
// }

// var arr =['a', 2, 3];
// for (var i=1; i<3; i++); {
//     console.log(arr[i]);
// }

// var arr=[1,2,3,5];
// for (var elem of arr){
//     console.log(elem);
// }

// function getfloat(var x)
// {
//     console.log(x - 0.1);
// }
// getVar(3);


//                                                                                     LESSON 15//

// function Sum(n){
//     var sum = 0;
//     for(var i=0; i<n; i++){
//         sum +=i;
//     }
//     console.log(sum);
// }
// Sum(1000)




// function Sum(n){
//     var sum = 0;
    
//     for(var i=0; i<n; i++){
//         sum +=i;
//         cnt=i;
//     }
//        return sum;
// }
// console.log(Sum(10));


// var getSum =function(n){
//     var sum=0; 
//     if (n<0){
//         return -1;
//     }
//     for (var i=1;i<n;i++){
//         sum+=i;
//         cnt = i;
//     }
//     return sum;
// }
// console.log(Sum(10));

//домашка, ще зробити на менше//

// function isBigger(x,y){
//     var x
//     if (x>y){
//     return x
//    }
//    else if (x===y){
//       return -1;   
//    }
//    else{
//     return y;
//    }
//    return x;
// }
// console.log (isBigger(5,10));
// homework

// function isBigger(x2,y2){
//     var x = parseInt(x2);
//     var y = parseInt(y2);
//     if (x>y){
//     return x
//    }
//    else if (x==y){
//       return -1;   
//    }
//    else{
//     return y;
//    }
//    return x;
// }
// console.log (isBigger('5','10'));

// var rnd = Math.random();
// console.log (rnd.toFixed(2));


// var now =new Date();
// alert ( now );

// console.log (new Date (2011, 0, 1, 0, 0, 0, 0 ));

// var now = new Date();
// console.log (now.getMonth()+'.'+now.getFullYear());

//                                                                                 LESSON 16

// var array = ['html', 'css', 'javascript'];   not ok
// array[0] // 'html'
// array[1] // 'css'
// array[2] // 'javascript'
// array[3]='jquery';
// console.log(array[2]);


// var array = new Array ('html', 'css', 'javascript');
// array[0]//html



// var arr = ['html', 'css', 'javascript'];              OK
// arr.pop(); //'javascript'
// alert(arr); // ['html','css']

// arr.push('jquery');
// alert(arr); // ['html','css','javascript','jquery']


// var matrix = [
//     [1, 2, 3],
//     [4 ,5, 6],
//     [7, 8, 9]
// ];
// alert (matrix [1] [1]); 

// var arr = [3,2,5,6];
// var sum = 0;
// for (var i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
// console.log(sum);



//  var m = [ [1, 2, 3], [4 ,5, 6], [7, 8, 9] ];      //OK
//  var sum=0;
//  for( let i = 0; i<3; i++){
//     for( let j = 0; j<3; j++)
//      sum +=m[i][j];
//  }
//  console.log(sum);


//  var names = 'html, css, javascript';                  
//  var arr = names.split(', ');
//  var arr=0;
//  for ( var i = 0, i< 3, i++) {
//     console.log(arr.i)
//  }

//  alert (arr); // ['html', css', javascript']

// var arr = 'html, css, javascript';
// var str = arr.join('/ ');
//  console.log(arr);

//  alert (arr); // ['html', css', javascript']//

 
var s = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
var m = s.split(' ');
var cnt = 0;
var cnt2 = 0;
var cnt3 = 0;
for (var i=0; i < m.length; i++){
    if (m[i].length > 5) {
     console.log(m[i]);
     cnt++;
    }
     else if (m[i].length < 5) {
        cnt2++;
      }
    else {
        cnt3++;
    }

}
console.log (cnt);
console.log (cnt2);
console.log (cnt3);


var s = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
var m = s.split(' ');
var cnt = 0;
var cnt2 = 0;
var cnt3 = 0;
for (var i=m.length -1; i >= 0; i--){
    // console.log(m[i]);
    if (m[i].length > 5) {
        // console.log(m[i]);
     cnt++;
    }
     else if (m[i].length < 5) {
        cnt2++;
      }
     else {
        cnt3++;
    }

}
console.log (cnt);
console.log (cnt2);
console.log (cnt3);


var a = prompt ('enter value');
var arr = [a];
for ( var a = 0, a< 100  
  , i++) {
  //     console.log(arr.i) arr.push('jquery')
console.log(arr);

