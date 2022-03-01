// 07 December 2021
// Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.

// The inputs will always be two positive integers between 2 and 99.

// Examples
// 20 and 27:

// Factors of 20: 1, 2, 4, 5, 10, 20
// Factors of 27: 1, 3, 9, 27
// Greatest shared factor: 1
// Result: 20 and 27 are coprime
// 12 and 39:

// Factors of 12: 1, 2, 3, 4, 6, 12
// Factors of 39: 1, 3, 13, 39
// Greatest shared factor: 3
// Result: 12 and 39 are not coprimes

function isCoprime(x, y) {
  let array = [];
  let array2 = [];

  for (let i = 0; i <= x; i++) {
    x % i === 0 ? array.push(i) : "";
  }

  for (let i = 0; i <= y; i++) {
    y % i === 0 ? array2.push(i) : "";
  }

  const comprise = array.filter((element) => array2.includes(element));

  return comprise.length > 1 ? false : true;
}

// 08/12/2021
// var data = [
//   {name: 'Joe', age: 20},
//   {name: 'Bill', age: 30},
//   {name: 'Kate', age: 23}
// ]

// getNames(data) // should return ['Joe', 'Bill', 'Kate']

const array = (data) => data.map((item) => item.name);

// I'm afraid you're in a rather unfortunate situation. You've injured your leg, and are unable to walk, and a number of zombies are shuffling towards you, intent on eating your brains. Luckily, you're a crack shot, and have your trusty rifle to hand.

// The zombies start at range metres, and move at 0.5 metres per second. Each second, you first shoot one zombie, and then the remaining zombies shamble forwards another 0.5 metres.

// If any zombies manage to get to 0 metres, you get eaten. If you run out of ammo before shooting all the zombies, you'll also get eaten. To keep things simple, we can ignore any time spent reloading.

// Write a function that accepts the total number of zombies, a range in metres, and the number of bullets you have.

// If you shoot all the zombies, return "You shot all X zombies." If you get eaten before killing all the zombies, and before running out of ammo, return "You shot X zombies before being eaten: overwhelmed." If you run out of ammo before shooting all the zombies, return "You shot X zombies before being eaten: ran out of ammo."

// (If you run out of ammo at the same time as the remaining zombies reach you, return "You shot X zombies before being eaten: overwhelmed.".)

// Good luck! (I think you're going to need it.)

function zombie_shootout(zombies, range, ammo) {
  if (ammo >= zombies) {
    return range * 2 >= zombies
      ? `You shot all ${zombies} zombies.`
      : `You shot ${range * 2} zombies before being eaten: overwhelmed.`;
  } else if (zombies > ammo) {
    if (range * 2 > ammo) {
      return `You shot ${ammo} zombies before being eaten: ran out of ammo.`;
    }

    return range * 2 >= zombies
      ? `You shot ${ammo} zombies before being eaten: ran out of ammo.`
      : `You shot ${range * 2} zombies before being eaten: overwhelmed.`;
  }
}

//19/02/2022
// Task
// You are a lonely frog.

// You live on a coordinate axis.

// The meaning of your life is to jump and jump..

// Two actions are allowed:

// forward: Move forward 1 unit.

// double: If you at x point, then you can move to x*2 point.

// Now, here comes your new task. Your starting point is x, the target point is y.

// You need to jump to the target point with minimal steps. Please tell me, what's the minimal steps?

// 1 <= x <= 10, x < y <= 100000

// Example
// For x = 1, y = 8, the output should be 3.

//  step  from   to      action
//   1:     1 --> 2     forward(or double)
//   2:     2 --> 4       double
//   3:     4 --> 8       double
// For x = 1, y = 17, the output should be 5.

//  step  from    to      action
//   1:     1  --> 2     forward(or double)
//   2:     2  --> 4       double
//   3:     4  --> 8       double
//   4:     8  --> 16      double
//   5:     16 --> 17     forward
// For x = 1, y = 15, the output should be 6.

//  step  from    to      action
//   1:     1  --> 2      forward(or double)
//   2:     2  --> 3      forward
//   3:     3  --> 6      double
//   5:     6  --> 7      forward
//   6:     7  --> 14     double
//   7:     14 --> 15     forward
// For x = 3, y = 12, the output should be 2.

//  step  from    to       action
//   1:     3  --> 6       double
//   2:     6  --> 12      double
// For x = 3, y = 16, the output should be 3.

//  step  from    to       action
//   1:     3  --> 4      forward
//   2:     4  --> 8       double
//   3:     8  --> 16      double

function jumpTo(x, y) {
  let step = 0;
  let nowAt = y;
  while (nowAt > x) {
    if (nowAt % 2 === 0 && nowAt / 2 >= x) {
      nowAt -= nowAt / 2;
    } else {
      nowAt--;
    }
    step++;
  }
  return step;
}

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines
// whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  const string = str.toLowerCase();

  for (let b = 0; b < string.length; b++) {
    for (let i = b + 1; i < string.length; i++) {
      if (string[b] === string[i]) {
        return false;
      }
    }
  }
  return true;
}

//22/02/2022

// The distance formula can be used to find the distance between two points. What if we were trying to walk from point A to point B, but there were buildings in the way? We would need some other formula..but which?

// Manhattan Distance
// Manhattan distance is the distance between two points in a grid (like the grid-like street geography of the New York borough of Manhattan) calculated by only taking a vertical and/or horizontal path.

// Complete the function that accepts two points and returns the Manhattan Distance between the two points.

// The points are arrays or tuples containing the x and y coordinate in the grid. You can think of x as the row in the grid, and y as the column.

// Examples
// * Input [1, 1], [1, 1] => Output 0
// * Input [5, 4], [3, 2] => Output 4
// * Input [1, 1], [0, 3] => Output 3

function manhattanDistance(pointA, pointB) {
  return Math.abs(pointA[0] - pointB[0]) + Math.abs(pointA[1] - pointB[1]);
}

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
  const string2 = [];
  const string1 = words.split(" ");

  const num = words
    .replace(/[^1-9]/g, "")
    .split("")
    .map(Number);

  let j = 1;

  while (string2.length != num.length) {
    for (let i = 0; i < num.length; i++) {
      if (j === num[i]) {
        string2.push(string1[i]);
      }
    }
    j++;
  }
  return string2.join(" ");
}
