////convertor
////----------------------------task 1
//
function convertor(amount) {
    const convertor = amount* 26;
    return `${convertor.toFixed(2)} dolars`;
}

console.log(convertor(18));

//reverse string
//-------------------------------task 2

function reverse(str) {
    const reverseWorld = str.split('').reverse().join('');
    return `${reverseWorld} reverse your world`;
}

console.log(reverse("hello"));

//-------------------------------task3
//build stairs
//
function buildStairs(n) {
   let stairs = "";
    for(let i =0; i < n; i++){
        console.log(stairs+='#');
    }
}
buildStairs(4);

//-------------------------------task4
//range

function range(start, end) {
    let a = 0;
    for(let i = start; i <= end; i++) {
        a += i;
    }
    return console.log(a);
}

range(2, 4);
range(5, 6);

//-------------------------------task5
//min 

function min(a, b, c) {
    let strMin = arguments[0];
    for (i = 0; i < arguments.length; i++) {
        (strMin > arguments[i]) ? strMin = arguments[i]: false;
    }
    return strMin;
}

console.log(min(4, 5, 8));

//-------------------------------task6
//piramid

function piramid(e){
    let stairs = '';
    for(let i = 0; i < e; i++){
        let backdown=((e*2)-(i*2))/2;
        let a = ' ';
        stairs +=' ';
        console.log(a.repeat(backdown),stairs+='#');
    }
}

piramid(3);


//--------------------------------task7
//first and last uppercase

function firstAndLastToUpper(str) { 
	let lastLetter = str.length - 1;
	let strFirstLastBig = str[0].toUpperCase() + str.slice(1,lastLetter) + str[lastLetter].toUpperCase();
	console.log(strFirstLastBig);
}
firstAndLastToUpper("abcccc");

//--------------------------------task8

function func(str) {
    let a = str;
    for( let i =0; i < str.length; i++){
    if(~str.indexOf("ironman") || ~str.indexOf("cursor") || ~str.indexOf("ostap")){
        return true;
    } else {
        return false;
    }
    }
}
console.log(func("ironwomen olo"));


function intensive(str) {
    let arrStr = str.split(' ');
    console.log(arrStr);
    for(let i = 0; i < arrStr.length; i++) {
        if(arrStr[i] === "ostap" || arrStr[i] === "cursor") {
            return true;
        } 
    }
    return false;
}

console.log(intensive("hello ostap"));


//----------------------------tas9
//all world uupercase

function allUppercase(str) {
    let uppercase =str.toUpperCase();
    return uppercase;
}
console.log(allUppercase("hello"));

//------------------------------------------task10

function find_unique_characters(str) {
  var unique = '';
  for (var i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
      unique += str[i];
    }
  }
  return unique;
}

console.log(find_unique_characters('baraban'));
console.log(find_unique_characters('anaconda'));

function removeDuplicateCharacters(string) {
  return string
    .split('')
    .filter(function(item, pos, self) {
      return self.indexOf(item) == pos;
    })
    .join('');
}
console.log(removeDuplicateCharacters('baraban'));


//---------------------------task11
//fibonachi

function fibonacci(n) {
    let arrNumbers = [0, 1, 1];
    let strFinal;
    for (i = 0; i < n + 1; i++) {
        if (i >= 3) {
            arrNumbers.push(arrNumbers[i - 1] + arrNumbers[i - 2]);
        }
    }
    (n === 0) ? strFinal = 'Value must be greater than "0"': strFinal = arrNumbers[n];

    return strFinal;
}

console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(7));










