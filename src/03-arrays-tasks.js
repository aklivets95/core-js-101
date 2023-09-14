/* ********************************************************************************************
 *                                                                                            *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array     *
 *                                                                                            *
 * NOTE : Please do not use loops! All tasks can be implemented using standard Array methods  *
 *                                                                                            *
 ******************************************************************************************** */


/**
 * Returns an index of the specified element in array or -1 if element is not found
 *
 * @param {array} arr
 * @param {any} value
 * @return {number}
 *
 * @example
 *    ['Ace', 10, true], 10    => 1
 *    ['Array', 'Number', 'string'], 'Date'    => -1
 *    [0, 1, 2, 3, 4, 5], 5    => 5
 */
function findElement(arr, value) {
  return arr.findIndex((item) => item === value);
}

/**
 * Generates an array of odd numbers of the specified length
 *
 * @param {number} len
 * @return {array}
 *
 * @example
 *    1 => [ 1 ]
 *    2 => [ 1, 3 ]
 *    5 => [ 1, 3, 5, 7, 9 ]
 */
function generateOdds(len) {
  function iterration(n, current, acc = []) {
    if (n === len) return acc;
    return iterration(n + 1, current + 2, acc.concat(current));
  }
  return iterration(0, 1, []);
}


/**
 * Returns the doubled array - elements of the specified array
 * are repeated twice using original order
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    ['Ace', 10, true]  => ['Ace', 10, true,   'Ace', 10, true]
 *    [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5,   0, 1, 2, 3, 4, 5]
 *    [] => []
 */
function doubleArray(arr) {
  return [...arr, ...arr];
}


/**
 * Returns an array of positive numbers from the specified array in original order
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, 1, 2, 3, 4, 5 ] => [ 1, 2, 3, 4, 5 ]
 *    [-1, 2, -5, -4, 0] => [ 2 ]
 *    [] => []
 */
function getArrayOfPositives(arr) {
  const newArr = [];
  arr.map((number) => {
    if (number > 0) {
      return newArr.push(number);
    }
    return false;
  });

  return newArr;
}

/**
 * Returns the array with strings only in the specified array (in original order)
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, 1, 'cat', 3, true, 'dog' ] => [ 'cat', 'dog' ]
 *    [ 1, 2, 3, 4, 5 ] => []
 *    [ 'cat, 'dog', 'raccoon' ] => [ 'cat', 'dog', 'raccoon' ]
 */
function getArrayOfStrings(arr) {
  const newArr = [];
  arr.map((string) => {
    if (typeof string === 'string') {
      return newArr.push(string);
    }
    return false;
  });

  return newArr;
}

/**
 * Removes falsy values from the specified array
 * Falsy values: false, null, 0, "", undefined, and NaN.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#Description)
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, false, 'cat', NaN, true, '' ] => [ 'cat', true ]
 *    [ 1, 2, 3, 4, 5, 'false' ]         => [ 1, 2, 3, 4, 5, 'false' ]
 *    [ false, 0, NaN, '', undefined ]   => [ ]
 */
function removeFalsyValues(arr) {
  const newArr = [];
  arr.map((el) => {
    if (el !== false && el !== 0 && !Number.isNaN(el) && el !== null
      && el !== undefined && el.length !== 0) {
      newArr.push(el);
    }
    return false;
  });

  return newArr;
}

/**
 * Returns the array of uppercase strings from the specified array
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 'permanent-internship', 'glutinous-shriek', 'multiplicative-elevation' ]
 *    => [ 'PERMANENT-INTERNSHIP', 'GLUTINOUS-SHRIEK', 'MULTIPLICATIVE-ELEVATION' ],
 *    [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]  => [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
 */
function getUpperCaseStrings(arr) {
  const newArr = [];
  arr.map((el) => newArr.push(el.toUpperCase()));

  return newArr;
}


/**
 * Returns the array of string lengths from the specified string array.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ '', 'a', 'bc', 'def', 'ghij' ]  => [ 0, 1, 2, 3, 4 ]
 *    [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]
 */
function getStringsLength(arr) {
  const newArr = [];
  arr.map((el) => newArr.push(el.length));

  return newArr;
}

/**
 * Inserts the item into specified array at specified index
 *
 * @param {array} arr
 * @param {any} item
 * @param {number} index
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2, 1  => [ 1, 2, 3, 4, 5 ]
 *    [ 1, 'b', 'c'], 'x', 0  => [ 'x', 1, 'b', 'c' ]
 */
function insertItem(arr, item, index) {
  arr.splice(index, 0, item);
  return arr;
}

/**
 * Returns the n first items of the specified array
 *
 * @param {array} arr
 * @param {number} n
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2 => [ 1, 3 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'a', 'b', 'c' ]
 */
function getHead(arr, n) {
  const newArr = [];
  arr.map((el, index) => {
    if (index <= n - 1) {
      return newArr.push(el);
    }
    return false;
  });

  return newArr;
}


/**
 * Returns the n last items of the specified array
 *
 * @param {array} arr
 * @param {number} n
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 4, 5 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'b', 'c', 'd' ]
 */
function getTail(arr, n) {
  function recursion(acc, result) {
    if (acc > n) return result;
    return recursion(acc + 1, result.concat(arr.pop()));
  }
  return recursion(1, []).reverse();
}


/**
 * Returns CSV representation of two-dimensional numeric array.
 * https://en.wikipedia.org/wiki/Comma-separated_values
 *
 * @param {array} arr
 * @return {string}
 *
 * @example
 *    [
 *       [  0, 1, 2, 3, 4 ],
 *       [ 10,11,12,13,14 ],
 *       [ 20,21,22,23,24 ],
 *       [ 30,31,32,33,34 ]
 *    ]
 *           =>
 *     '0,1,2,3,4\n'
 *    +'10,11,12,13,14\n'
 *    +'20,21,22,23,24\n'
 *    +'30,31,32,33,34'
 */
function toCsvText(arr) {
  let newStr = '';

  arr.map((el, indexArr) => el.map((number, index) => {
    if (el.length - 1 === index && arr.length - 1 !== indexArr) {
      newStr += `${number}\n`;
    } else if (arr.length - 1 === indexArr && el.length - 1 === index) {
      newStr += number;
    } else {
      newStr += `${number},`;
    }
    return true;
  }));

  return newStr;
}

/**
 * Transforms the numeric array into the according array of squares:
 *   f(x) = x * x
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 0, 1, 2, 3, 4, 5 ] => [ 0, 1, 4, 9, 16, 25 ]
 *   [ 10, 100, -1 ]      => [ 100, 10000, 1 ]
 */
function toArrayOfSquares(arr) {
  const newArr = [];

  arr.map((num) => {
    newArr.push(num ** 2);
    return true;
  });

  return newArr;
}


/**
 * Transforms the numeric array to the according moving sum array:
 *     f[n] = x[0] + x[1] + x[2] +...+ x[n]
 *  or f[n] = f[n-1] + x[n]
 *
 * @param {array} arr
 * @return {array}
 *
 * Example :
 *   [ 1, 1, 1, 1, 1 ]        => [ 1, 2, 3, 4, 5 ]
 *   [ 10, -10, 10, -10, 10 ] => [ 10, 0, 10, 0, 10 ]
 *   [ 0, 0, 0, 0, 0]         => [ 0, 0, 0, 0, 0]
 *   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]
 */
function getMovingSum(arr) {
  const newArr = [];
  arr.map((num, index) => {
    if (index === 0) {
      newArr.push(num);
    } else {
      newArr.push(num + newArr[index - 1]);
    }
    return true;
  });

  return newArr;
}

/**
 * Returns every second item from the specified array:
 *
 * @param {array} arr
 * @return {array}
 *
 * Example :
 * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 2, 4, 6, 8, 10 ]
 * [ 'a', 'b', 'c' , null ]  => [ "b", null ]
 * [ "a" ] => []
 */
function getSecondItems(arr) {
  const newArr = [];
  arr.map((num, index) => {
    if (index % 2 !== 0) {
      newArr.push(num);
    }
    return true;
  });

  return newArr;
}


/**
 * Propagates every item in sequence its position times
 * Returns an array that consists of: one first item, two second items, three third items etc.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example :
 *  [] => []
 *  [ 1 ] => [ 1 ]
 *  [ 'a', 'b' ] => [ 'a', 'b','b' ]
 *  [ 'a', 'b', 'c', null ] => [ 'a', 'b','b', 'c','c','c',  null,null,null,null ]
 *  [ 1,2,3,4,5 ] => [ 1, 2,2, 3,3,3, 4,4,4,4, 5,5,5,5,5 ]
 */
function propagateItemsByPositionIndex(arr) {
  const newArr = [];
  arr.map((num, index) => {
    const tempArr = Array(index + 1).fill(num);
    newArr.push(...tempArr);
    return true;
  });

  return newArr;
}


/**
 * Returns the 3 largest numbers from the specified array
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 1, 2 ] => [ 2, 1 ]
 *   [ 1, 2, 3 ] => [ 3, 2, 1 ]
 *   [ 1,2,3,4,5,6,7,8,9,10 ] => [ 10, 9, 8 ]
 *   [ 10, 10, 10, 10 ] => [ 10, 10, 10 ]
 */
function get3TopItems(arr) {
  const newArr = [];
  const copyArr = arr;
  if (copyArr.length !== 0) {
    const maxNumber1 = Math.max(...copyArr);
    newArr.push(maxNumber1);
    const maxIndex1 = copyArr.findIndex((el) => el === maxNumber1);
    copyArr.splice(maxIndex1, 1);
    if (copyArr.length !== 0) {
      const maxNumber2 = Math.max(...copyArr);
      newArr.push(maxNumber2);
      const maxIndex2 = copyArr.findIndex((el) => el === maxNumber2);
      copyArr.splice(maxIndex2, 1);
      if (copyArr.length !== 0) {
        const maxNumber3 = Math.max(...copyArr);
        newArr.push(maxNumber3);
        const maxIndex3 = copyArr.findIndex((el) => el === maxNumber3);
        copyArr.splice(maxIndex3, 1);
      }
    }
  }

  return newArr;
}


/**
 * Returns the number of positive numbers from specified array
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *   [ ]          => 0
 *   [ -1, 0, 1 ] => 1
 *   [ 1, 2, 3]   => 3
 *   [ null, 1, 'elephant' ] => 1
 *   [ 1, '2' ] => 1
 */
function getPositivesCount(arr) {
  let count = 0;
  arr.map((el) => {
    if (typeof el === 'number' && el > 0) {
      count += 1;
    }
    return true;
  });

  return count;
}

/**
 * Sorts digit names
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 'nine','one' ]                 => [ 'one', 'nine' ]
 *   [ 'one','two','three' ]          => [ 'one','two', 'three' ]
 *   [ 'nine','eight','nine','eight'] => [ 'eight','eight','nine','nine']
 *   [ 'one','one','one','zero' ]     => [ 'zero','one','one','one' ]
 */
function sortDigitNamesByNumericOrder(arr) {
  const alphabet = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const newArr = [];
  arr.map((num) => {
    const index = alphabet.findIndex((el) => el === num);
    newArr.push(index);
    return true;
  });

  newArr.sort((a, b) => a - b);
  const resultArr = [];
  newArr.map((num) => resultArr.push(alphabet[num]));

  return resultArr;
}

/**
 * Returns the sum of all items in the specified array of numbers
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *   [] => 0
 *   [ 1, 2, 3 ]           => 6
 *   [ -1, 1, -1, 1 ]      => 0
 *   [ 1, 10, 100, 1000 ]  => 1111
 */
function getItemsSum(arr) {
  let total = 0;
  arr.map((num) => {
    total += num;
    return true;
  });

  return total;
}

/**
 * Returns the number of all falsy value in the specified array
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *  [] => 0
 *  [ 1, '', 3 ] => 1
 *  [ -1, 'false', null, 0 ] => 2
 *  [ null, undefined, NaN, false, 0, '' ]  => 6
 */
function getFalsyValuesCount(arr) {
  let count = 0;
  arr.map((el) => {
    if (el !== false && el !== null && el !== 0 && !Number.isNaN(el) && el !== undefined && el !== '') {
      count += 0;
    } else {
      count += 1;
    }
    return true;
  });

  return count;
}

/**
 * Returns a number of all occurrences of the specified item in an array
 *
 * @param {array} arr
 * @param {any} item
 * @return {number}
 *
 * @example
 *    [ 0, 0, 1, 1, 1, 2 ], 1 => 3
 *    [ 1, 2, 3, 4, 5 ], 0 => 0
 *    [ 'a','b','c','c' ], 'c'=> 2
 *    [ null, undefined, null ], null => 2
 *    [ true, 0, 1, 'true' ], true => 1
 */
function findAllOccurrences(arr, item) {
  let count = 0;
  arr.map((num) => {
    if (num === item) {
      count += 1;
    }
    return true;
  });

  return count;
}

/**
 * Concatenates all elements from specified array into single string with ',' delimiter
 *
 * @param {array} arr
 * @return {string}
 *
 * @example
 *    [0, false, 'cat', NaN, true, '']  => '0,false,cat,NaN,true,'
 *    [1, 2, 3, 4, 5]                   => '1,2,3,4,5'
 *    ['rock', 'paper', 'scissors']     => 'rock,paper,scissors'
 */
function toStringList(arr) {
  return arr.join(',');
}


/**
 * Sorts the specified array by country name first and city name
 * (if countries are equal) in ascending order.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Saint Petersburg' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Belarus', city: 'Brest' }
 *    ]
 *                      =>
 *    [
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Russia',  city: 'Saint Petersburg' }
 *    ]
 */
function sortCitiesArray(arr) {
  const sortArr = arr.sort((a, b) => {
    if (a.country[0] > b.country[0]) {
      return 1;
    } if (a.country === b.country) {
      if (a.city[0] > b.city[0]) {
        return 1;
      }
      return -1;
    }
    return -1;
  });

  return sortArr;
}

/**
 * Creates an identity matrix of the specified size
 *
 * @param {number} n
 * @return {array}
 *
 * @example
 *     1  => [[1]]
 *
 *     2 => [[1,0],
 *           [0,1]]
 *
 *          [[1,0,0,0,0],
 *           [0,1,0,0,0],
 *     5 =>  [0,0,1,0,0],
 *           [0,0,0,1,0],
 *           [0,0,0,0,1]]
 */
function getIdentityMatrix(n) {
  const matrix = [];
  const tempArr = Array(n).fill(0);
  tempArr.map((_, index) => {
    const columnArr = Array(n).fill(0);
    columnArr.splice(index, 1, 1);
    matrix.push(columnArr);
    return true;
  });

  return matrix;
}

/**
 * Creates an array of integers from the specified start to end (inclusive)
 *
 * @param {number} start
 * @param {number} end
 * @return {array}
 *
 * @example
 *     1, 5  => [ 1, 2, 3, 4, 5 ]
 *    -2, 2  => [ -2, -1, 0, 1, 2 ]
 *     0, 100 => [ 0, 1, 2, ..., 100 ]
 *     3, 3   => [ 3 ]
 */
function getIntervalArray(start, end) {
  const resultArray = [];
  function recursionPush(number) {
    if (resultArray[resultArray.length - 1] === end) return resultArray;
    resultArray.push(number);
    return recursionPush(number + 1);
  }
  return recursionPush(start);
}

/**
 * Returns array containing only unique values from the specified array.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 1, 2, 3, 3, 2, 1 ] => [ 1, 2, 3 ]
 *   [ 'a', 'a', 'a', 'a' ]  => [ 'a' ]
 *   [ 1, 1, 2, 2, 3, 3, 4, 4] => [ 1, 2, 3, 4]
 */
function distinct(arr) {
  const newArr = [];
  arr.map((el) => {
    if (!newArr.includes(el)) {
      newArr.push(el);
    }
    return true;
  });

  return newArr;
}

/**
 * Groups elements of the specified array by key.
 * Returns multimap of keys extracted from array elements via keySelector callback
 * and values extracted via valueSelector callback.
 * See: https://en.wikipedia.org/wiki/Multimap
 *
 * @param {array} array
 * @param {Function} keySelector
 * @param {Function} valueSelector
 * @return {Map}
 *
 * @example
 *   group([
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Russia', city: 'Omsk' },
 *      { country: 'Russia', city: 'Samara' },
 *      { country: 'Belarus', city: 'Grodno' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland', city: 'Lodz' }
 *     ],
 *     item => item.country,
 *     item => item.city
 *   )
 *            =>
 *   Map {
 *    "Belarus" => ["Brest", "Grodno", "Minsk"],
 *    "Russia" => ["Omsk", "Samara"],
 *    "Poland" => ["Lodz"]
 *   }
 */
function group(array, keySelector, valueSelector) {
  const result = array.reduce((acc, curr) => {
    const key = keySelector(curr);
    if (!acc.get(key)) {
      acc.set(keySelector(curr), [valueSelector(curr)]);
    } else {
      const arr = acc.get(key);
      arr.push(valueSelector(curr));
      acc.set(keySelector(curr), arr);
    }
    return acc;
  }, new Map());
  return result;
}


/**
 * Projects each element of the specified array to a sequence
 * and flattens the resulting sequences into one array.
 *
 * @param {array} arr
 * @param {Function} childrenSelector, a transform function to apply to each element
 *                                     that returns an array of children
 * @return {array}
 *
 * @example
 *   [[1, 2], [3, 4], [5, 6]], (x) => x     =>   [ 1, 2, 3, 4, 5, 6 ]
 *   ['one','two','three'], (x) => x.split('')  =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
function selectMany(arr, childrenSelector) {
  const newArr = [];
  arr.map((el) => {
    newArr.push(...childrenSelector(el));
    return true;
  });

  return newArr;
}


/**
 * Returns an element from the multidimensional array by the specified indexes.
 *
 * @param {array} arr
 * @param {array} indexes
 * @return {any} element from array
 *
 * @example
 *   [[1, 2], [3, 4], [5, 6]], [0,0]  => 1        (arr[0][0])
 *   ['one','two','three'], [2]       => 'three'  (arr[2])
 *   [[[ 1, 2, 3]]], [ 0, 0, 1 ]      => 2        (arr[0][0][1])
 */
function getElementByIndexes(arr, indexes) {
  const copyArr = indexes;
  function recursionGetElement(copyArr1, arr1) {
    if (copyArr1.length === 1) {
      return arr1;
    }
    copyArr.splice(0, 1);
    return recursionGetElement(copyArr, arr1[copyArr[0]]);
  }
  return recursionGetElement(copyArr, arr[copyArr[0]]);
}


/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start.
 * The middle element (if exists) leave on the same position.
 *
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   [ 1, 2 ]  => [ 2, 1 ]
 *   [ 1, 2, 3, 4, 5, 6, 7, 8 ]   =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *
 */
function swapHeadAndTail(arr) {
  const copyArr = arr;
  let head = [];
  let tail = [];
  const middle = [];
  let length = 0;
  arr.map((_, index) => {
    if (index === arr.length - 1) {
      length += index + 1;
    }

    return true;
  });

  if (arr.length % 2 !== 0) {
    length = arr.length - 1;
    head = copyArr.splice(0, length / 2);
    tail = copyArr.splice(1, length / 2);
    middle.push(...copyArr);
  } else {
    head = copyArr.splice(0, length / 2);
    tail = copyArr.splice(0, length / 2);
  }

  return [...tail, ...middle, ...head];
}


module.exports = {
  findElement,
  generateOdds,
  doubleArray,
  getArrayOfPositives,
  getArrayOfStrings,
  removeFalsyValues,
  getUpperCaseStrings,
  getStringsLength,
  insertItem,
  getHead,
  getTail,
  toCsvText,
  toStringList,
  toArrayOfSquares,
  getMovingSum,
  getSecondItems,
  propagateItemsByPositionIndex,
  get3TopItems,
  getPositivesCount,
  sortDigitNamesByNumericOrder,
  getItemsSum,
  getFalsyValuesCount,
  findAllOccurrences,
  sortCitiesArray,
  getIdentityMatrix,
  getIntervalArray,
  distinct,
  group,
  selectMany,
  getElementByIndexes,
  swapHeadAndTail,
};
