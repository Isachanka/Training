"use strict"

function kalc(a, b){
    let result = 0;
    if(a == b){ return a 
    } else if(a < b){
        for(;a <= b; a++){
            result += a 
        }        
        return result;
    } else{
        for(;b <= a; b++){
            result += b 
        }
        return result;
    }
}

function sumString(a,b,c,d){
    return b + a + c + a + d;
}

// alert(sumString('*', '1', 'b', '1c')); /

function evensAndOdds(n){
    if(n % 2 == 0){
        return n.toString(2);
    }
    return n.toString(16);
}

// alert(evensAndOdds(173124123))

function pyramid(n){
    let k = 0
    let i = 0
    let z = 0
    for(;k < n; i++){
        k += z;
        z++;
    }
    return i
}

//alert(pyramid(178))


function isPowerOfTwo(n){
    for(let i = 1; i < n; i++){
        if(2 ** i == n){
            return true;
        }
    }
    return false;
}

// alert(isPowerOfTwo(4096))

function area_largest_square(n){
    n *= 2;
    return (n ** 2) / 2;
}

//alert(area_largest_square(7))

function sum_primes(a, b){
    if(a > b){
        return 0;
    } else{
        let sum = 0;
        for(; a <= b; a++){
            if(find_primes(a)){
                sum += a;
            }
        }
        return sum;
    }
}


function find_primes(n){
    for(let i = 2; i < n; i++){
        if( n % i == 0){ return false } 
    }
    return true
}

//    alert(sum_primes(1,30));


function cookingTime(a){
    let i = 8
    let k = 5

    for(;a > i; k += 5){
        a -= i;
    }
    return k;
}

// alert(cookingTime(6));


function example(a,b){
    let result = 0
    if(a == b) return a;
    for(; a <= b; a++){
        result += a
    }
    for(; b <= a; b++){
        result += b
    }
    return result;
}

// alert(example(1,5));



/* for(let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
        continue
    }
    console.log(i)
}

*/


let board = "";
let SizeBoard = 8;
for(let i = 0; i <= SizeBoard; i++){
    for(let k = 1; k <= SizeBoard; k++){
        if((i + k) % 2 == 0){
            board += "#";
        }
        else{
            board += " "
        }
    }
    board += "\n"
}

//console.log(board); 


 function minCho(x, i){
     if(x < i){
         return x;
     }
     return i
 }


// alert(minCho(0, -10))


function isEven(n){
    if(n == 0){
        return true;
    }
    else if(n == 1){
        return false;
    }
    else if(n < 0){
        return isEven(-n);
    }
    else{
        return isEven(n - 2);
    }
}

// alert(isEven(-1));

function countBs(x, n){
    let count = 0;
    for(let i = 0; i < x.length - 1; i++){
        if(x.charAt(i) == n){
            count += 1;
        }
    }
    return count;
}


// alert(countBs("Приветвася", "в"))


function range(a, b){
    let array = [];
    for(;a <= b; a++){
        array.push(a);
    }
    return array;
}


// console.log(range(1,10))


function sum(array) {
    let total = 0;
    for (let value of array) {
      total += value;
    }
    return total;
  }

  //console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function identificator(str){
    return str.slice(str.indexOf(`-p-`) + 3, str.lastIndexOf(`-`))
}

// console.log(identificator('http://www.exampleshop.com/dry-water-just-add-water-to-get-water-p-147-24122017.html'))


function evenChars(str){
    let result = []
    if(str.length > 2 && str.length < 100){
        for(let i = 1; i < str.length;){
            result.push(str[i]);
            i += 2
        }
    } else {
        return "Недопустимая строка";
    }
    return result
}

// console.log(evenChars("abcdefghijklm"));


function samoeDlinnoeSlovo(str, n){
    let arrayWord = str.split(` `);
    let result = []
    for(let word in arrayWord){
        if(arrayWord[word].length > n){
            result.push(arrayWord[word]);
        }
    }
    return result;
}

//console.log(samoeDlinnoeSlovo('Сегодня отличный день. С самого утра мы пойдем на озеро, купаться.', 5))

function spinWords(string){
    let array = string.split(` `);
    for(let key in array){
      if(array[key].length > 4){
        console.log(array[key]);
        array[key] = array[key].split("").reverse().join("");
      }
    }
    return array.join(` `)
  }

  // console.log(spinWords(`Just kidding there is still one more`))

  function divisors(n) {
    let result = []
    if(isPrime(n)){
        return `${n} is prime`
    }
    for(let i = 2;  i > 1 && i < n; i++){
      if( n % i == 0){
        result.push(i);
      }
    }
    return result;
  };

  function isPrime(n){
      for(let i = 2; i < n; i++){
          if(n % i == 0){
              return false
          }
        return true;
      }
  }

  // console.log(divisors(15));

  
  function ucFirst(str){
      let result = str[0].toUpperCase() + str.slice(1)
      return result
  }

  // console.log(ucFirst('hahaha'));

  function spamCheck(str){
      if(str.toLowerCase().indexOf('viagra') == -1 || str.toLowerCase().indexOf('xxx') == -1){
          return true;
      }
    return false;
  }

  //spamCheck(`fdfdfd`)

  function truncate(str, maxlength){
      let result = 0 
      if(str.length > +maxlength){
        result = str.slice(0, 17) + `...`
      }
      return result ? result : str
  }

  // console.log(truncate("Vsem Privet", 20))

  function sumInput() {

    let numbers = []; 
    while (true) {  
      let value = prompt("Введите число", 0);

      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  // alert(sumInput());

function getMaxSubSum(arr){
    let sum = 0;
    let highestSum = 0;

    for(let key of arr){
      sum += key;
      highestSum = Math.max(highestSum, sum)
      if(sum < 0) sum = 0;
    }

    alert(highestSum);
}


//alert(getMaxSubSum());

function cameLize(str){
    return str.split(`-`).map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1)
    ).join(``)
}

// alert(cameLize("list-style-image"))

function filterRange(arr, a, b){
    let result;
    result = arr.filter((item, index) => item >= a && item <= b)
    return result;
}

//alert(filterRange(arr, 1, 4))

function filterRangeInPlace(arr, a, b){
  for( i = 0; i < arr.length(); i++){
      if(arr[i] <= b || arr[i] >= a){
          arr.slice(i,1);
          i--
      }
  }
}

// asdasdasds

function cameLize(str){
    return str.split(`-`).map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1)
    ).join(``)
}

// alert(cameLize("list-style-image"))

function duplicateEncode(word){
    let array = word.toLowerCase().split(``)
    let newArray = []
    let result = ``
    for(let i = 0; i < array.length ; i++){
      if(array.splice(i,1).includes(array[i])){
        result += `)`
      } 
      else {
        result += `(`
      }
    }
  return result
}

//alert(duplicateEncode("recede"))

function kata(str){
    let array = str.slice(``);
    let result = []
    for(let i = 0; i < array.length; i++){
        array[i] != array[i + 1] ? result.push(array[i]) : 0;
    }
    return result;
}

// alert(kata(`AAABBBCCCDDDDEEEE`))

function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
      var code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) result += (code - 64) + " ";
    }
  
    return result.slice(0, result.length - 1);
  }
  //console.log(alphabetPosition("The sunset sets at twelve o' clock."));

  function iqTest(numbers){
    let arr = numbers.split(` `),

    oddarr = arr.filter( (item) => item % 2 == 0),
    evenarr = arr.filter( (item) => item % 2 != 0)

    return oddarr.length < evenarr.length ? arr.indexOf(oddarr[0]) + 1 : arr.indexOf(evenarr[0]) + 1
  }


// alert( iqTest("2 4 7 8 10"))


function longestConsec(strarr, k) {
    let max = 0;
    let result;
    let sumString;
    if(strarr.length == 0 || k < strarr.length || k <= 0 ) return ""
    for(let i = 0; i < strarr.length - 1; i++){

      for(let pp = 0; pp < k; pp++){

        sumString = strarr[i] + strarr[i + 1]

        if(sumString.length > max){

            max = strarr[i].length + strarr[i + 1].length

            result = strarr[i] + strarr[i + 1];
        }
      }
    }
  return result
}

// alert(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))

function persistence(num) {
    let arr = num.toString().split(``)
    let i;
    for(i = 0; arr.length > 1; i++){
    arr.reduce((value, item, index) => arr = value*item,1).roString().split(``);
    arr = arr.toString().split(``) 
    } 
    return i 
 }

// persistence(21323)


function order(words){
    let arr = words.split(` `);
    let newArray = [];
    for(let i = 1 ; i <= 9; i++){   // you can change `9` for `arr.length if you need optimization  
      for(let word of arr){         
        if(word.includes(i.toString())) newArray.push(word)
      }
    }
    return newArray.length != 0 ? newArray.join(` `) : ""
  }

// alert(order("4of Fo1r pe6ople g3ood th5e the2"))


function tower_builder(floors){
    let space,star, tower = [];
    for(let i = 1; i <= floors; i++){
      space = " ".repeat(floors - i);
      star  = "*".repeat((2*i) - 1);
      tower.push(`${space}${star}${space}`);
    }
    return tower;
  }

// console.log(tower_builder(6))

function validParentheses(parens){
    let value = 0;
    for(let letter of parens){
      letter == "(" ? value++ : value--
      if(value < 0) return false
    }
    return value == 0
  }

// alert(validParentheses( "(()())" ))


function whoIsNext(names, r){
    let lastPerson;
    for(let i = 1; i <= r; i++){
        lastPerson = names[0]
        names.push(names[0]);
        names.push(names[0]);
        names.shift();
    }
    return lastPerson;
}

// alert(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951))


function validSolution(board){
    for(let line of board){
      for(let  i = 1; i <= line.length; i++){  
        if(line.includes(i) == false || line.includes(0)){
            return false;
        }
      }
    }
    for(let k = 0; k < 9; k++){
        kruta : for(let p = 1; p <= 9; p++){
            for(let i = 0; i < board.length; i++){

                if(board[i][k] == p ){
                p++;
                break kruta;
                }
            }
            return false;
        }
    }
    return true;
}
  

/* alert(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]]))

*/

var maxSequence = function(arr){
    if(arr.length == 0) return 0;
    let max = 0, sum = 0;
    for(let item of arr){
      sum = sum + item
      max = Math.max(sum, max)
      sum = sum < 0? 0 : sum;
    }
    return max;
  }

// alert(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));


let arr = [5, 3, 8, 1]


function sdas(ar, a, b){
    arr = ar.filter((item) => item <= b && item >= a);
}

//sdas(arr, 1, 4);


function pigIt(str){
    return str.split(` `).map((item) => item = item.length == 1 ? item : item.slice(1) + item[0] + `ay`).join(` `);
  }

// alert(pigIt('Pig latin is cool'))


function unique(arr){
    let result = [];
    for(let item of arr){
        if(result.includes(item)) continue;
        result.push(item);
    }
    return result;
}

// alert( unique(strings) )


function unique(arr) {
    return Array.from(new Set(arr));
  }


// alert(unique());


function aclean(arr){
    let map = new Map();

    for(let word of arr){
        let key = word.toLowerCase().split(``).sort().join(``);
        map.set(key, word);
    }
    return map;
}


//

function sumTo(n){
    if(n = 1){
        return 1;
    }
    else{
        return n * sumTo(n - 1);
    }
}



alert( sumTo(5) );

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  alert( factorial(5) ); // 12
