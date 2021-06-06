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

// alert(sumString('*', '1', 'b', '1c')) 

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