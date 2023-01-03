'use strict'
// console.log(twoSum([3, 2, 8, 4], 6))
// // answer = [1,3]
// function twoSum(nums, target) {
//     var map = {};
//     debugger
//     for (var i = 0; i < nums.length; i++) {
//         var n = nums[i]
//         if (n < target) {
//             if (map[target - n] >= 0) {
//                 return [map[target - n], i]
//             }
//             else {
//                 map[n] = i;   //use map to store the value and index position
//             }
//         }
//     }
// }
// a function that receives an array and a number and returns the indexes of the numbers in the array that combined returns the target number

// console.log(isPalindrome(101))
// function isPalindrome(x) {
//     if (x > 0) {
//         x = x + ''
//         for (let i = 0; i < x.length / 2; i++) {
//             if (x.charAt(i) !== x.charAt(x.length - 1 - i)) {
//                 return false
//             }
//         }
//         return true
//     }
//     else return false
// };
// console.log(isPalindrome(11111111111111))
// console.log(isPalindrome(11111111111112))
// function isPalindrome(x) {
//   // x = x.toString()
//   // let i = 0
//   // let j = x.length-1
//   // while (i < j) {
//   //   if (x.charAt(i) !== x.charAt(j)) {
//   //     return false
//   //   }
//   //   i++
//   //   j--
//   // }
//   // return true

//   //     if (x >= 0) {
//   //         return x === +(String(x).split("").reverse().join(""))

//   //         //must be positive number
//   //         //turning it to string to seperate each individual digit
//   //         //splitting it inorder the revers it,then joining it to return it to string to return it to number
//   //         // alternativley you can use == and remove the number
//   //         //not certain that it is a better solution
//   //     }
//   //     else {
//   //         return false
// }
//
// is a number the same when reversed


// https://leetcode.com/problems/container-with-most-water/
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
// function maxArea(height) {
//     // let maxSize = 0
//     // height.forEach((value, index) => {
//     //     let currLeftHeight = value
//     //     for (let i = index; i < height.length; i++) {
//     //         let currRightHeight = height[i]
//     //         const containerHeight = (currLeftHeight > currRightHeight) ? currRightHeight : currLeftHeight
//     //         const width = (i - index)
//     //         const size = containerHeight * width
//     //         if (size > maxSize) maxSize = size
//     //     }
//     // })



//     // return maxSize // my solution
//     let maxArea = 0; 
//     let i = 0;
//     let j = height.length - 1;
//     while (i < j) {
//         maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * (j - i));
//         console.log(Math.min(height[i], height[j]) * (j - i)) // the size that is calculated
//         if (height[i] < height[j]) {
//             i++;
//         } else {
//             j--;
//         }
//     }
//     return maxArea;
// };


// https://leetcode.com/problems/generate-parentheses/
// console.log(generateParenthesis(1))
// console.log(generateParenthesis(2))
// console.log(generateParenthesis(3))
// console.log(generateParenthesis(4))
// function generateParenthesis(n) {
// var combinations
// if (n === 1) {
//   combinations = ['()']
//   return combinations
// } else {
//   combinations = generateParenthesis(n - 1)
//   const newCombinations = combinations.map(combination => `(${combination})`)
//   for (let i = 0; i < combinations.length; i++) {
//     let firstCombination = combinations[i] + '()'
//     let secondCombination = '()' + combinations[i]
//     newCombinations.push(firstCombination)
//     if (secondCombination !== firstCombination) newCombinations.push(secondCombination)
//   }
//   return newCombinations

// }

// }


// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// console.log(lengthOfLongestSubstring("aabaab!bb"))
// function lengthOfLongestSubstring(s) {
//     if (s.length === 1) return 1
//     let length = 0
//     let letters = [s.charAt(0)]
//     for (let char of s) {
//         const idx = letters.indexOf(char)
//         if (idx !== -1) {
//             letters = letters.slice(idx + 1)
//         }
//         letters.push(char)
//         length = Math.max(length, letters.length)
//     }
//     return length
// };

// console.log(reverse(123))
// console.log(reverse(4561))
// console.log(reverse(-400))
// console.log(reverse(1534236469))
// function reverse(x) {
//     x = x.toString()
//     let negativity
//     if (x.includes('-')) {
//         x = x.slice(1)
//         negativity = -1
//     } else negativity = 1
//     let reversedNumStr = ''
//     for (let i = 0; i <= x.length; i++) {
//         reversedNumStr += x.charAt(x.length - i)
//     }
//     if (+reversedNumStr > 2147483647 || +reversedNumStr < -2147483647) return 0
//     else return +reversedNumStr * negativity
// };



// https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/?q=javascript&orderBy=most_relevant
// A pair of indices(i, j),
// where 0 <= i < nums1.length and 0 <= j < nums2.length,// theses are automatic
// is valid if both i <= j and nums1[i] <= nums2[j].The distance of the pair is j - i.
// Return the maximum distance of any valid pair (i, j). If there are no valid pairs, return 0.

// An array arr is non-increasing if arr[i-1] >= arr[i] for every 1 <= i < arr.length.

// Input: nums1 = [55,30,5,4,2], nums2 = [100,20,10,10,5]
// Output: 2
// Explanation: The valid pairs are (0,0), (2,2), (2,3), (2,4), (3,3), (3,4), and (4,4).
// The maximum distance is 2 with pair (2,4).

// function maxDistance(nums1, nums2) {
//     //needs to figure out all indices pairs first then out of all of them
//     // find the largest diff and return it,if the first line results with nothing return 0
//     // first check if nums1[i] <= nums2[j]
//     // foreach index in one array i need to check all indexes of the other array for that index
//     //is there a way maybe to avoid O(n**2)? probably it has to do with the fact that it is non increasing!

// let maxDistance = 0
// nums1.forEach((num1, i) => {
//     for (let j = i; j < nums2.length; j++) {
//         if (nums1 > nums2[j]) break
//         if (num1 <= nums2[j] && i <= j && (j - i > maxDistance)) {
//             maxDistance = j - i
//         }
//     }
// })
// return maxDistance
// };
//case [50,49,48,47] is nums1 and [4,3,2,1] is nums 2 if nums1[last index(which will be i)] < nums2[firstIndex] then i can break all and
// [55, 30, 5, 4, 2], [100, 20, 10, 10, 5]

// function maxDistance(nums1, nums2) {
//     let maxDistance = 0
//     for (let i = 1; i <= nums1.length; i++) {
//         if (nums1[nums1.length - i] > nums2[nums1.length - i]) break
//         //how can i add a break statement in here if nums1[nums1.length-1] > nums2[] if some index from the end is heigher than the same index in nums2 then break
//         for (let j = nums1.length - i; j < nums2.length; j++) {
//             if (nums1[nums1.length - i] > nums2[j]) break
//             if (nums1[nums1.length - i] <= nums2[j] && j - (nums1.length - i) > maxDistance) {
//                 maxDistance = j - (nums1.length - i)
//             }
//         }
//     }
//     return maxDistance
// };
// console.log(maxDistance([55, 30, 5, 4, 2], [100, 20, 10, 10, 5]))
// function maxDistance(n1, n2) {
//     let maxDistance = 0
//     let i = 0
//     let j = 0
//     while (i < n1.length && j < n2.length) {
//         if (n1[i] > n2[j])
//             ++i;
//         else
//             maxDistance = Math.max(maxDistance, j++ - i)
//     }
//     return maxDistance
// };// i need to get to the bottom of this!
// a concept of progressing on two arrays with just one loop that progreses the array that you nee to progress as much as needed
//when i need to check the diff of indexes in the arrays,like here if i progress sometimes i and j and sometimes just j ot just i
// allso seeing the diffrence between the if else statements what is the intended part to neglect in here i dont mind

// https://leetcode.com/problems/maximum-population-year/

// console.log(maximumPopulation([[1993, 1999], [2000, 2010]]), 1993)
// console.log(maximumPopulation([[1950, 1961], [1960, 1971], [1970, 1981]]), 1960)

// i need to find the smallest number that represents year in which i have the heighest amount of להיכלל
// i think about making an array with each year as a key and eachtime the there is a time the this key is included raise it by one this way i can sort it
//  or i can store an array of all the years sort it in the end and then run by it's length
// function maximumPopulation(logs) {
//     var yearsCount = {}
//     logs = logs.sort((log1, log2) => (log1[0] < log2[0] ? -1 : 1))
//     logs.forEach((log => {
//         //i will have to loop for yearscount and foreach key check if the year is valid making it O(n**2) which is'nt good
//         assignYear(log[0], log[1] - 1)
//     }))
//     console.log(yearsCount)
//     function assignYear(birthYear, deathYear) { // each time i have to refference both timezones to get the range
//         // debugger
//         for (let y in yearsCount) {
//             //life span of currPerson is smaller or includes birthYear an smaller or includes deathyear
//             // going through a certain year say 1950 is the birthyear smaller than it cant be! because it is sorted
//             // y bigger than birthyear is a good sign what about the death year
//             //  <= and smaller ot equal to death year this way it is in the range
//             if (y >= birthYear && y <= deathYear) {
//                 //1950 should be 1
//                 // 1960 be 2
//                 // 1970 be 2
//                 // 1980 be 1
//                 // y is in the range and another person is alive!
//                 // both birthYear an deathYear should get a ++
//                 yearsCount[y]++
//                 yearsCount[birthYear]++
//                 yearsCount[deathYear]++

//             }
//             //raise both stats! and it is not an else statemnt i want to both add if the year
//             // is non existent and both add to all other years available but go once with the range only

//         }
//         if (!yearsCount.hasOwnProperty(birthYear)) yearsCount[birthYear] = 1
//         if (!yearsCount.hasOwnProperty(deathYear)) yearsCount[deathYear] = 1


//     }
// }

// function maximumPopulation(logs) {
//     // 1950 <= birthi < deathi <= 2050 this is the range provided

//     let years = Array(2051).fill(0);

//     for (let i = 0; i < logs.length; i++) {
//         console.log(logs[i][0])
//         console.log(logs[i][1])
//         years[logs[i][0]] += 1;
//         years[logs[i][1]] -= 1;
//     }
//     console.log(years)

//     let maxNum = years[1950];
//     let maxYear = 1950;

//     for (let i = 1951; i < years.length; i++) {
//         years[i] += years[i - 1]; //adding the previous year,if someone died than minus 1 if 10 were
//         //  born adding 10 and knowing that the previous is updated becuase im sorted!  // Generating Prefix Sum

//         if (years[i] > maxNum) {
//             maxNum = years[i];
//             maxYear = i;
//         }
//     }
//     return maxYear;
// };

// https://leetcode.com/problems/largest-values-from-labels/
// const values = [9,8,8,7,6]
// const labels = [1, 3, 3, 3, 2]
// const numWanted = 3
// const useLimit = 2
// console.log(largestValsFromLabels(values, labels, numWanted, useLimit))
// function largestValsFromLabels(values, labels, num_wanted, use_limit) {
//     // label => list with label
//     const map = {}
//     const len = values.length
//     for (let i = 0; i < len; i++) {
//         const val = values[i]
//         const label = labels[i]

//         if (!map[label]) {
//             map[label] = []
//         }
//         const list = map[label]
//         list.push(val)
//     }
//     console.log(map)
//     const items = []
//     for (const list of Object.values(map)) {
//         list.sort((a, b) => b - a)
//         const sublist = list.slice(0, use_limit)
//         items.push(...sublist)
//     }

//     items.sort((a, b) => b - a)
//     console.log(items)
//     let result = 0
//     for (let i = 0, itemsLen = items.length;
//         i < num_wanted && i < itemsLen; i++) {
//         const val = items[i]
//         result += val
//     }

// התרגיל הבא
//     return result
// i surely need to iterate over the string,if it is long probably even more
//  ,i think a while loop is preferrable the first oen will allways want to silence someone
//then it comes up to numbers and order i can defualtly say that if i see each senator should want to silence someone no matter who so for each
// 'r' silence a 'd' and for each 'd' silence a 'r' then it should allways come back to the advantage? no because
// 'RRRRRDDDDDDD' should result in 5 silencing of 'D' leaving only 2 who will silence 2 rs resulting 3 :2 for the rs and
// winning the next round again for order
// RRDDRDDR
// console.log(predictPartyVictory('RD'), 'R')
// console.log(predictPartyVictory("DRRD"), 'D')
// function predictPartyVictory(senate) {
//     //works but it is inefficient
//     let howManyDtoIgnore = 0
//     let howManyRtoIgnore = 0
//     while (senate.includes('R') && senate.includes('D')) {
//         const length = senate.length
//         for (let i = 0; i < length; i++) {

//             if (senate[i] === 'R') {
//                 if (howManyRtoIgnore > 0) {
//                     howManyRtoIgnore--
//                     senate = senate.slice(0, i) + '0' + senate.slice(i + 1)
//                 } else howManyDtoIgnore++
//             } else if (senate[i] === 'D') {
//                 if (howManyDtoIgnore > 0) {
//                     howManyDtoIgnore--
//                     senate = senate.slice(0, i) + '0' + senate.slice(i + 1)
//                 } else howManyRtoIgnore++
//             }
//         }

//         senate = senate.replaceAll('0', '')
//     }
//     if (senate.includes('D')) return 'Dire'
//     else return 'Radiant'
// }
// https://leetcode.com/problems/remove-all-occurrences-of-a-substring
// var removeOccurrences = (s, part) => {
//     const partRegex = new RegExp(part)
//     while (s.match(partRegex)) {
//         const idx = s.match(partRegex).index
//         s = s.slice(0, idx) + s.slice(idx + part.length)
//     }
//     return s
// // }
// console.log(removeOccurrences("axxxxyyyyb", "xy"), "ab")

// function removeOccurrences(s, part) {
//     if (s.includes(part)) {
//         s = s.replace(part, '')
//         return removeOccurrences(s, part)
//     } else return s
// }
// const wall1 = [
//     [1, 2, 2, 1],
//     [3, 1, 2],
//     [1, 3, 2],
//     [2, 4],
//     [3, 1, 2],
//     [1, 3, 1, 1]
// ]


// console.log(leastBricks([[1, 2, 2, 1], [3, 1, 2], [1, 3, 2], [2, 4], [3, 1, 2], [1, 3, 1, 1]]), 2)
// //the function needs to draw an imaginary line from top to bottom,crossing the lest amoutn of bricks all bricks are or same height
// // each small array is a line of bricks but the width is mesuared by the number inside.
// // i need to find a similllar sum of items that are in the same range from the left side(or right but it's generally the same because it's a fixed width for each row)
// // say i loop over the first index of all the inner arrays

// // maybe something like while loop,with no condition i can think of as of now,
// // and inside looping through the wall each time diffrent index of the inner arrays who are'nt in the current size,
// // in general i know i need to find the spot in the wall that the distance from the side is equal by most
// // then wall.length-mostEqualsPoint is the awnser


// function leastBricks(wall) {

//   const lines = {}
//   let lineWidth
//   for (let i = 0; i < wall.length; i++) {
//     let sum = 0
//     for (let j = 0; j < wall[i].length; j++) {
//       sum += wall[i][j]
//       lines[sum] = (lines[sum] || 0) + 1
//     }
//     lineWidth = sum

//   }
//   console.log(lines)
//   let mostEquals = 0
//   for (let width in lines) {
//     if (+width === lineWidth) continue
//     mostEquals = Math.max(mostEquals, lines[width])
//   }
//   if (mostEquals === 0) return wall.length
//   return wall.length - mostEquals

// }

// // const s = "0+0"
// // const s = " 3/2 "
// // console.log(calculate(s))
// // function calculate(str) {
// //     str = str.replaceAll(' ', '')
// //     str = str.split('')
// //     let wholeNums = []
// //     let num = ''
// //     for (let i = 0; i < str.length; i++) {
// //         if (!isNaN(+str[i])) {
// //             num += str[i]
// //         } else {
// //             wholeNums.push(num, str[i])
// //             num = ''
// //         }
// //     }
// //     if (num) wholeNums.push(num)
// //     for (let i = 0; i < wholeNums.length; i++) {
// //         if (wholeNums[i] === '*') {
// //             const num = +wholeNums[i - 1] * +wholeNums[i + 1]
// //             wholeNums.splice(i - 1, 3, '', '', num)
// //         } else if (wholeNums[i] === '/') {
// //             const num = +wholeNums[i - 1] / +wholeNums[i + 1]
// //             wholeNums.splice(i - 1, 3, '', '', Math.floor(num))
// //         }
// //     }
// //     wholeNums = wholeNums.filter(num => num !== '')
// //     for (let i = 0; i < wholeNums.length; i++) {
// //         if (wholeNums[i] === '+') {
// //             const num = +wholeNums[i - 1] + +wholeNums[i + 1]
// //             wholeNums.splice(i - 1, 3, '', '', num)
// //         } else if (wholeNums[i] === '-') {
// //             const num = +wholeNums[i - 1] - +wholeNums[i + 1]
// //             wholeNums.splice(i - 1, 3, '', '', Math.floor(num))
// //         }
// //     }
// //     wholeNums = wholeNums.filter(num => num !== '')
// //     return wholeNums[0]

// // };
// // var calculate2 = function (s) {
// //     let stack = []; // an intresting solution using a stack,stacking + or - adding them as positive or negetaive numbers
// //     // for the * or / popping what is in the stack and multipliying it
// //     let num = '';
// //     let sign = null
// //     // we loop till the full length of the array to account for last sign
// //     for (let i = 0; i <= s.length; i++) {
// //         const curr = s[i];
// //         //handle space
// //         if (curr === ' ') continue;
// //         //if char is a number
// //         if (!isNaN(curr)) num += curr;
// //         //if we have a  sign + - / *
// //         if (isNaN(curr)) {
// //             num = Number(num)
// //             switch (sign) {
// //                 case '+':
// //                 case null:
// //                     //we push the initial number into the stack
// //                     stack.push(num)
// //                     break;
// //                 case '-':
// //                     //we push any values after the subtraction sign as negative
// //                     stack.push(-num)
// //                     break;
// //                 case '*':
// //                     //we pop the stack then multiply and push back
// //                     stack.push(stack.pop() * num)
// //                     break;
// //                 case '/':
// //                     //we pop the stack then devide and push back
// //                     stack.push(parseInt(stack.pop() / num, 10))
// //                     break;
// //             }
// //             // sign becomes current sign
// //             sign = curr;
// //             // we reset num
// //             num = '';
// //         }
// //     }
// //     //we reduce the array adding positive and negative numbers
// //     return stack.reduce((a, b) => {
// //         return a + b
// //     }, 0)
// // };
// // console.log(numRabbits([1, 1, 2]), 5)
// // console.log(numRabbits([1, 1, 1, 2]), 7)
// // console.log(numRabbits([10, 10, 10]), 11)
// // function numRabbits(answers) {
// //     // i should return the length of the array plus the numbers that arent in the array
// //     // i wanna know which numbers occur more than once becuase i will suspect duplicates
// //     // if the same number occurs more than one time i need to consider it to be one number that's fo sure
// //     // for [1,1,1,2] how much should it be?
// //     // i know that 4 rabbits answered,that's atleast 4 about the 2 i know that there are defeinetliy 2 that didnt answer so im adding it down
// //     // about the ones 2 can be of the same color but the other one has to be of diffrent color so it should be 7
// //     // 1:3 is a bad value becuase 1 is actually 2 becuase it's one and self
// //     // if ansCount > ans + 1 i should consider diffrently,
// //     // while ans >= ansCount -1 i can just add that and cross the nums

// //     // 10 10 10 is 3 rabbits so 10:3 maybe they are all the same color,
// //     // therefore there is 11 rabbits of that color and in general
// //     const cache = {}
// //     for (let i = 0; i < answers.length; i++) {
// //         cache[answers[i]] = (cache[answers[i]] || 0) + 1
// //     }
// //     let rabbitCount = 0
// //     for (let k in cache) {
// //         if (+k + 1 >= cache[k]) {
// //             rabbitCount += +k + 1
// //         } else {
// //             rabbitCount += (+k + 1) * Math.ceil(cache[k] / +k + 1) // better then the loop
// //             // let rabbitsOfColor = cache[k]
// //             // while (rabbitsOfColor > 0) {
// //             //     rabbitCount += +k + 1
// //             //     rabbitsOfColor -= (+k + 1)
// //             // }
// //         }
// //     }
// //     return rabbitCount
// // }


// // console.log(findMin([4, 5, 1, 2, 3]), 1)
// // // console.log(findMin([4, 5, 6, 7, 0, 1, 2]), 0)
// // // the jumps must be big the thing is i cannot really know if i can ignore half of the array
// // function findMin(nums) {
// //     if (nums.length === 1) return nums[0]
// //     let start = 0
// //     let end = nums.length - 1
// //     let mid = Math.floor((start + end) / 2)
// //     let minNumIdx = -1
// //     for (let i = 0; i < Math.log2(nums.length); i++) {
// //         if (nums[middle] > nums[middle + 1]) {
// //             minNumIdx = middle + 1
// //         } else if (middle === 0 && nums[middle] < nums[nums.length - 1]) {
// //             minNumIdx = middle
// //         }
// //         if (nums[middle] < nums[end]) {
// //             end = middle
// //             middle = Math.floor((start + end) / 2)
// //         } else if (nums[middle] > nums[start]) {
// //             start = middle
// //             middle = Math.floor((start + end) / 2)
// //         }
// //     }

// //     return nums[minNumIdx]
// //     console.log('res?', nums[middle])
// //     console.log('minNumIdx?', nums[minNumIdx])
// // }
// //




// // console.log(minimumSum(2932), 52)

// // // 2932
// // // 2239
// // // 23+29
// // // 5731
// // // 15 37 52
// // function minimumSum(num) {

// //     // convert the number into a string so it can be split into individual digits
// //     let numberString = num.toString()

// //     let numArray = []

// //     for (let i = 0; i < numberString.length; i++) {
// //         numArray.push(numberString[i])
// //     }

// //     // sort the array.  Since they are strings you can just call sort method
// //     numArray.sort()

// //     // grab first & last item & convert into a number
// //     // grab middle items and convert into number
// //     let num1 = parseInt(numArray[0] + numArray[3])
// //     let num2 = parseInt(numArray[1] + numArray[2])

// //     return num1 + num2

// // };

// // console.log(findClosestNumber([2,-1,1]), 1)
// // //sorting takes up O(n) so it wont be more useful the just looping once,but maybe more elegant
// // function findClosestNumber(nums) {
// //     let closestNumber = nums[0]
// //     for (let i = 1; i < nums.length; i++) {
// //         const distanceFromZero = Math.abs(nums[i])
// //         if (distanceFromZero < Math.abs(closestNumber)) {
// //             closestNumber = nums[i]
// //         } else if (distanceFromZero === Math.abs(closestNumber)) {
// //             closestNumber = Math.max(closestNumber, nums[i])
// //         }
// //     }
// //     return closestNumber
// // };

// // console.log(trimMean([6, 0, 7, 0, 7, 5, 7, 8, 3, 4, 0, 7, 8, 1, 6, 8, 1, 1, 2, 4, 8, 1, 9, 5, 4, 3, 8, 5, 10, 8, 6, 6, 1, 0, 6, 10, 8, 2, 3, 4]), 4)
// // function trimMean(arr) {
// //     arr.sort((a, b) => a - b)
// //     arr = arr.slice(0 + arr.length / 20, arr.length - arr.length / 20)
// //     return arr.reduce((acc, num) => acc + num, 0) / arr.length
// // };




// // const nums = [2, 1, 6, 4]//2 6 1 4 if i remove 2 then 1 and 4 are even 6 is even 
// // const nums1 = [1, 1, 1]
// // const nums2 = [1, 2, 3]


// // [0,1,2,3,4,5] 
// //  if i take only odd numbers in a loop
// //1 [0,2:1,3:2,4:3,5:4] 
// // 3 [0,1,2,4:3,5:4] 
// // 5 [0,1,2,3,4]
// // only even numbers in a loop
// // 0 [1:0,2:1,3:2,4:3,5:4]  the current evens are all the odds.
// // 2 [0,1,3:2,4:3,5:4]here up till the index i acts normal after the index all the current odds are the evens
// // 4 [0,1,2,3,5:4]
// // console.log(waysToMakeFair(nums))
// // // like this complexity is constant O(n**2)
// // //need to make it O(n)
// // function waysToMakeFair(nums) {
// //     debugger
// //     let [count, evens, odds] = [0, 0, 0]
// //     for (let i = 0; i < nums.length; i++) {
// //         if (i % 2 === 0) evens += nums[i]
// //         else odds += nums[i]
// //     }
// //     let prevEvens = 0;
// //     let prevOdds = 0;
// //     let postEvens = evens;
// //     let postOdds = odds;
// //     for (let i = 0; i < nums.length; i++) {
// //         if (i % 2) postOdds -= nums[i];
// //         else postEvens -= nums[i];

// //         if (prevEvens + postOdds === prevOdds + postEvens) {
// //             count++;
// //         }

// //         if (i % 2) prevOdds += nums[i];
// //         else prevEvens += nums[i];
// //     }
// //     return count
// //     // if i sum both types of numbers say
// //     // 2 and 6 are even and 1 and 4 are odd 
// //     // the thing is the indexes change should i possibly start from the last number then make a new sum
// //     // from the last number there are less index changes happening becuase if it take the last number nothing happens

// // }

// // arr = [1,1,3,5,5], k = 2
// // [6,7,11,7,6,8], k = 5

// // https://leetcode.com/problems/the-k-strongest-values-in-an-array/
// // console.log(getStrongest([1, 2, 3, 4, 5], 2), [5, 1])
// // console.log(getStrongest([1, 1, 3, 5, 5], 2), [5, 5])
// // console.log(getStrongest([6, 7, 11, 7, 6, 8], 5), [11, 8, 6, 6, 7])

// // function getStrongest(arr, k) {
// //     arr.sort((a, b) => a - b)
// //     let i = 0
// //     let j = arr.length - 1
// //     let median = arr[Math.floor((arr.length - 1) / 2)]
// //     while (arr.length + i - j <= k) {
// //         if (median - arr[i] > arr[j] - median) {
// //             i++
// //         } else {
// //             j--
// //         }
// //     }
// //     return arr.slice(0, i).concat(arr.slice(j + 1))
// // }

// // function getStrongest(arr, k) {
// //     arr.sort((a, b) => a - b)
// //     const m = arr[Math.floor((arr.length - 1) / 2)]
// //     arr.sort((a, b) => {
// //         if (Math.abs(a - m) > Math.abs(b - m)) {
// //             return -1
// //         } else if (Math.abs(a - m) === Math.abs(b - m)) {
// //             if (a > b) {
// //                 return -1
// //             } else return 1
// //         }
// //     })
// //     return arr.slice(0, k)
// // }
// // Input: tasks = [[7,10],[7,12],[7,5],[7,4],[7,2]]
// // Output: [4,3,2,0,1]
// // tasks[i] = [enqueueTimei, processingTimei]
// // class PriorityQueue {
// //     constructor() {
// //         this.items = []
// //     }
// //     insert(newItems) {
// //         console.log(newItems)
// //         this.items = [...this.items, ...newItems]
// //         this.items.sort((a, b) => {
// //             if (a.processingTime > b.processingTime) {
// //                 return 1
// //             } else if (a.processingTime < b.processingTime) {
// //                 return -1
// //             } else if (a.processingTime === b.processingTime) {
// //                 return b.index - a.index
// //             }
// //         })
// //     }
// // }
// // // console.log(getOrder([[1, 2], [2, 4], [3, 2], [4, 1]]), [0, 2, 3, 1])
// // // console.log(getOrder([[7, 10], [7, 12], [7, 5], [7, 4], [7, 2]]), [4, 3, 2, 0, 1])
// // // function getOrder(tasks) {
// // //     const indexedTasks = tasks.map((task, index) => ({ enqueueTime: task[0], processingTime: task[1], index })) // this is O(n) so it's not that bad to keep
// // //     const finishedTasks = []
// // //     let currentTime = 0
// // //     const getTask = (currentTime) => {
// // //         let removingIndex = -1
// // //         let nextTask = { enqueueTime: Infinity, processingTime: Infinity }
// // //         for (let i = 0; i < indexedTasks.length; i++) { // this is the problem becuase i need to go through all of the array
// // //             const currTask = indexedTasks[i]
// // //             if (currTask.enqueueTime <= currentTime) {
// // //                 if (currTask.processingTime < nextTask.processingTime) {
// // //                     removingIndex = i
// // //                     nextTask = currTask
// // //                 }
// // //             }
// // //         }
// // //         if (removingIndex !== -1) {
// // //             const [task] = indexedTasks.splice(removingIndex, 1)
// // //             return task
// // //         }
// // //         return null
// // //     }

// // //     while (finishedTasks.length < tasks.length) {
// // //         const task = getTask(currentTime)
// // //         if (task) {
// // //             currentTime += task.processingTime
// // //             finishedTasks.push(task.index)
// // //         } else currentTime++
// // //     }
// // //     return finishedTasks
// // // };

// // function getOrder(tasks) {
// //     const indexedTasks = tasks.map((task, index) => ({ enqueueTime: task[0], processingTime: task[1], index })) // this is O(n) so it's not that bad to keep
// //     const queue = new PriorityQueue()
// //     indexedTasks.forEach(task => {
// //         if (task.enqueueTime <= firstTask.enqueueTime) {
// //             if (task.processingTime < firstTask.processingTime) {
// //                 firstTask = task
// //             }
// //         }
// //     })
// //     // let currentTime = firstTask.enqueueTime + firstTask.processingTime

// //     // while (queue.items.length < tasks.length) {
// //     //     // i want to each time find the tasks 
// //     // }

// //     // queue.insert(indexedTasks)

// //     return queue.items
// //     // let firstTask = { enqueueTime: Infinity, processingTime: Infinity }

// //     // console.log(firstTask)// it is not

// //     // indexedTasks.splice(firstTask.index, 1)
// //     // indexedTasks.splice(0, 0, firstTask)

// //     // do a while loop that compares the length of the queue and the original task array
// //     // each loop i find the next timeline and splice the tasks to the queue,eliminating the time problem
// //     //and letting the queue handle the rest

// //     // console.log(cu)
// //     // console.log(firstTask)
// //     // in the previous solution i thought as the compter and the timer but i dont need to do it 
// //     // i need to just make the path
// // }
// function getAllSubArrays(arr, num) {
//   if (arr.length === 1) return [arr, [num], [arr[0], num]] // stop point
//   // arr = previous arr and being mutated
//   else {
//     const newNum = arr.pop()
//     var newArr = getAllSubArrays(arr, newNum)
//     newArr = [...newArr, [num], ...newArr.map(node => ([...node, num]))]
//     return newArr.filter(miniArr => {
//       return k > miniArr.reduce((acc, innerNum) => { return acc * innerNum }, 1)
//     })
//   }
//   // return arr.concat(arr.map(minArr => ([...minArr, num]))).concat([num])
// }



// console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100), 8)
// function numSubarrayProductLessThanK(nums, k) {
//   if (k === 0) return 0;

//   let ans = 0;
//   let prod = 1;
//   // sort of a window approach to find the range of numbers that have a correct product
//   // you start stacking the items and lengthen to the right with j 
//   // when the product is too big it is becuase the items on the back are not fit anymore,so you know you need to cut them down
//   // for each iteration you know the distance between i and j which is the number of solutions right for this iteration
//   // you do this without iterating again really.

//   for (let i = 0, j = 0; j < nums.length; j++) {
//     prod *= nums[j];
//     while (i <= j && prod >= k) {
//       prod /= nums[i++];
//     }
//     ans += j - i + 1;
//     console.log(ans)
//   }
//   return ans;
// }

// // console.log(largestSumOfAverages([1, 2, 3, 4, 5, 6, 7], 4), 20.5)
// function largestSumOfAverages(nums, k) {
//   // maybe start with all the subarrays existing and one only that 0 and one only n
//   // then start exchanging 

//   // i need k-1 stops on the array,that splits it.

//   //the bigger the number the more likelihood i want to leave it in an array alone.
//   // let's play with k
//   // if k is one 
//   // [1, 2, 3, 4, 5, 6, 7] largest sum is 28/7 === 4
//   // if k is 2
//   // [1, 2, 3, 4, 5, 6, 7] largest sum is 7+21/6 ===10.5
//   // but for [1, 2, 3, 7, 5, 6, 4] it will be 4 +24/6 === 8
//   // if i go with two pointers. checking the last and the first values,it should generally be the plan.
//   // because only 0 and n can be alone (not really,dpends on how much i k)
//   // while (k>0) keep searching.

//   // what is the best way to gather the subarrays?
//   //how to i decide where to comporomise?
//   // if i do make a sorted version just to be alerted to the amount of big numbers?
// };
// // let forbidden = [14, 4, 18, 1, 15], a = 3, b = 15, x = 9;
// // let forbidden = [8, 3, 16, 6, 12, 20], a = 15, b = 13, x = 11;
// // let forbidden = [1, 6, 2, 14, 5, 17, 4], a = 16, b = 9, x = 7;
// // let forbidden = [18, 13, 3, 9, 8, 14], a = 3, b = 8, x = 6;



// // i am missing the option to surpass x by alot and then returning.
// // allso i am not conditioning against negetaive numbers


// // the bug jumps forward as defualt,if he passes the x he should have to return sometime,
// // if the next position to jump to is forbidden he have to jump backwards.

// // (bugIdx > x)
// // const noReasonToGoForward = the distance from the bug to the point is not reachable
// // there is a point in the bug's road that he could either go forward or backwards and only one will be correct.
// //so he should have the ability to jump forward



// // https://leetcode.com/problems/rank-teams-by-votes/description/
// //things to note and to take from this problem,
// // sorting should be with divide and conquer attitude,i have to sort a whole array,
// // by knowing how to compare 2 elements from that array and that's all i need to know.

// // using very specific data structures for an excresice is good,
// // i need to start developing a better thinking process to do so against the data i get.


// // console.log(rankTeams(["WXYA", "XYZA", "YAWX"]), 'YXWA')
// // function rankTeams(votes) {
// //   if (1 === votes.length) return votes[0]
// //   const ranks = {}
// //   const votesLength = votes[0].length
// //   for (const char of votes[0]) {
// //     ranks[char] = Array(votesLength).fill(0)
// //   }
// //   for (let i = 0; i < votes.length; i++) {
// //     for (let j = 0; j < votesLength; j++) {
// //       const vote = votes[i].charAt(j)
// //       const order = j
// //       ranks[vote][order]++
// //     }
// //   }
// //   return votes[0].split('')
// //     .sort((a, b) => {
// //       for (let i = 0; i < votesLength; i++) {
// //         const bVotes = ranks[b][i]
// //         const aVotes = ranks[a][i]
// //         if (aVotes > bVotes) {
// //           return -1
// //         } else if (aVotes < bVotes) {
// //           return 1
// //         }
// //       }
// //       return a < b ? -1 : 1
// //     }).join('')
// // }
// // a = 7, b = 1, c = 0


// // console.log(longestDiverseString(2, 2, 1), 'aabbc')
// function longestDiverseString(a, b, c) {
//   let arr = [['a', a, 0], ['b', b, 0], ['c', c, 0]]; // letter, amount, frequency
//   arr.sort((a, b) => b[1] - a[1]);

//   let result = '';
//   let count = a + b + c;
//   let last = '';

//   while (result.length < count) {
//     let k = 0;
//     while (k < 3) { // make sure that the ones who hasnt occured last will be reset
//       if (last != arr[k][0]) {
//         arr[k][2] = 0
//       }
//       k++
//     }
//     let i = 0;
//     while (i < 3 && arr[i][2] == 2) { // choose the next one bases on who is'nt the last one chosen
//       i++;
//     }
//     if (arr[i] && arr[i][1] > 0) { // if it have enough, in the place where it is'nt 2 
//       result += arr[i][0]; //add to result
//       last = arr[i][0]; // declare the last one
//       arr[i][1]--; //decrement the optional letters left for the letter
//       arr[i][2]++; // increase the last occurneces
//       arr.sort((a, b) => b[1] - a[1]); // sort the remianing array.
//     } else {
//       return result;
//     }
//   }
//   return result;
// }

// console.log(func([3, 4, 16, 8,2,32,64]))
// function func(nums) {

//   nums.sort((a, b) => a - b)
//   let dp = [1];
//   let maxVal = 1;

//   for (let i = 1; i < nums.length; i++) {
//     let max = 0;
//     for (let j = 0; j < i; j++) {
//       console.log(nums[i], nums[j])
//       if (nums[i] % nums[j] === 0) {
//         max = Math.max(max, dp[j])
//       }
//     }
//     dp[i] = max === 0 ? 1 : max + 1;
//     maxVal = Math.max(maxVal, dp[i])
//   }
//   let result = [];
//   let prev = -1
//   for (let i = dp.length - 1; i >= 0; i--) {
//     if (dp[i] === maxVal && (prev === -1 || prev % nums[i] === 0)) {
//       result.push(nums[i]);
//       maxVal--;
//       prev = nums[i]
//     }
//   }
//   return result
// }

// let values = [5, 4, 3, 2, 1], labels = [1, 1, 2, 2, 3], numWanted = 3, useLimit = 1

// console.log(func(values, labels, numWanted, useLimit))
// function func(values, labels, numWanted, useLimit) {
//   const newValues = {}
//   for (let i = 0; i < values.length; i++) {
//     const currentLabel = labels[i]
//     const currentValue = values[i]
//     if (!newValues[currentLabel]) newValues[currentLabel] = []
//     newValues[currentLabel].push(currentValue)
//   }
//   const potentialValues = []
//   for (let label in newValues) {
//     newValues[label].sort((a, b) => b - a)
//     potentialValues.push(...newValues[label].slice(0, useLimit))
//   }
//   potentialValues.sort((a, b) => b - a)
//   let maxScore = 0
//   for (let i = 0; i < numWanted; i++) {
//     maxScore += potentialValues[i]
//   }
//   return maxScore
// }

// console.log(numRabbits([0, 0, 1, 1, 1]))
// function numRabbits(answers) {
//   const uniqueColoredRabbits = {}
//   for (let i = 0; i < answers.length; i++) {
//     const ans = answers[i]
//     uniqueColoredRabbits[ans] = (uniqueColoredRabbits[ans] || 0) + 1
//   }
//   let minimumRabbits = 0
//   for (let ans in uniqueColoredRabbits) {
//     minimumRabbits += (+ans + 1) * Math.ceil(uniqueColoredRabbits[ans] / (+ans + 1))
//   }
//   return minimumRabbits
// };


// https://leetcode.com/problems/daily-temperatures
// console.log(dailyTemp([73, 74, 75, 71, 69, 72, 76, 73]))
// function dailyTemp(T) {
//   const len = T.length;
//   const result = [0];
//   const stack = [{ temp: T[len - 1], days: 0, index: len - 1 }]
//   for (let i = len - 2; i >= 0; i--) {
//     const temp = T[i]
//     while (stack.length) {
//       const stackHead = stack[stack.length - 1]
//       if (temp < stackHead.temp) {
//         const days = stackHead.index - i
//         stack.push({ temp, days, index: i })
//         result.unshift(days)
//         break
//       } else if (temp === stackHead) {
//         if (stackHead.days === 0) {
//           stack.push({ temp, days: 0, index: i })
//           result.unshift(0)
//         } else {
//           const days = stackHead.index - i + stackHead.days
//           stack.push({ temp, days, index: i })
//           result.unshift(days)
//         }
//         break
//       } else {
//         stack.pop()
//       }
//     }
//     if (!stack.length) {
//       stack.push({ temp, days: 0, index: i })
//       result.unshift(0)
//     }
//   }
//   return result
// }


// var bulbSwitch = function (n) {
//   const lightbulbs = Array(n).fill(true)
//   let i = 1
//   while (i < n) {
//     for (let j = i; j < n; j += i + 1) {
//       lightbulbs[j] = !lightbulbs[j]
//     }
//     i++
//   }
//   return lightbulbs.reduce((acc, lightbulb) => {
//     if (lightbulb) acc++
//     return acc
//   }, 0)
// };


// console.log(largestDivisibleSubset([1, 2, 20, 4, 5,]))
// [1,2,4,5,8,10,20,36]
// the solution is 
// sort the numbers from smallest to largest.
// for each number check previous numbers for currentNum % eachPrevoiusNum ===0
//  and for each number save the last number(largest) that is divisible
// find the number with the largest amount of divisable numbers.
// untill you reach a previous of null,push all the prvious numbers starting from the largest one.
// return
// function largestDivisibleSubset(nums) {
//   nums.sort((a, b) => a - b)
//   const dividingInfos = nums.map(() => ({ largestDivisibleNumberIdx: null, divisibleCount: 1 }))
//   let maxIdx = 0, maxDivisible = 0
//   for (let i = 0; i < nums.length; i++) {
//     const currNum = nums[i]
//     const currNumPosition = dividingInfos[i]
//     for (let j = 0; j < i; j++) {
//       const currentPreviousNum = nums[j]
//       if (currNum % currentPreviousNum === 0 &&
//         dividingInfos[j].divisibleCount + 1 > dividingInfos[i].divisibleCount) {
//         // the second condition checks if the previous number have the same divisable untill it,
//         // ex 1 2 4 5 20 [1,2,4,20]so when 20 reaches 5 in general 5 makes the condition
//         // ,but becuase 5 has less then 20, we know that 5 does'nt make the condition with all the numbers that 20 do.
//         currNumPosition.largestDivisibleNumberIdx = j
//         currNumPosition.divisibleCount++
//       }
//     }
//     if (maxDivisible < currNumPosition.divisibleCount) {
//       maxDivisible = currNumPosition.divisibleCount
//       maxIdx = i
//     }
//     //compare 
//   }
//   // i need to find now the index of the number with the largest divisibleCount and gather the linked list it creates

//   const result = [nums[maxIdx]]
//   let curr = dividingInfos[maxIdx]
//   for (let i = 1; i < maxDivisible; i++) {
//     result.push(nums[curr.largestDivisibleNumberIdx])
//     curr = dividingInfos[curr.largestDivisibleNumberIdx]
//   }
//   return result
// }

// // console.log(setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]))
// function setZeroes(matrix) {
//   const columsToDelete = new Set()
//   const rowsToDelete = new Set()
//   const rowLength = matrix[0].length
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < rowLength; j++) {
//       if (matrix[i][j] === 0) {
//         columsToDelete.add(j)
//         rowsToDelete.add(i)
//       }
//     }
//   }

//   const c = Array.from(columsToDelete)
//   const r = Array.from(rowsToDelete)
//   console.log(c, r)
//   for (let i = 0; i < r.length; i++) {
//     matrix[r[i]] = new Array(rowLength).fill(0)

//   }
//   for (let i = 0; i < c.length; i++) {
//     for (let j = 0; j < matrix.length; j++) {
//       matrix[j][c[i]] = 0
//     }
//   }
//   return matrix


// }
// console.log(gameOfLife([
//   [0, 1, 0],
//   [0, 0, 1],
//   [1, 1, 1],
//   [0, 0, 0]]),
//   [[0, 0, 0],
//   [1, 0, 1],
//   [0, 1, 1],
//   [0, 1, 0]])



// function gameOfLife(board) {

//   function countNeighbors(board, x, y) {
//     let count = 0
//     for (let i = Math.max(x - 1, 0); i <= Math.min(x + 1, board.length - 1); i++) {
//       for (let j = Math.max(y - 1, 0); j <= Math.min(y + 1, board[i].length - 1); j++) {
//         if (i === x && j === y) continue
//         if (board[i][j] === 1) count++
//       }
//     }
//     return count
//   }

//   function shouldLive(value, neighborsCount) {
//     if (neighborsCount === 3) return 1
//     else if (value && neighborsCount > 3) return 0
//     else if (value && neighborsCount > 1) return 1
//     else return 0
//   }

//   const changes = []
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[i].length; j++) {
//       const cell = board[i][j]
//       const neighbors = countNeighbors(board, i, j)
//       const val = shouldLive(cell, neighbors)
//       const previousVal = cell
//       if (val !== previousVal) changes.push({ i, j, val })
//     }
//   }
//   for (let change of changes) {
//     const { i, j, val } = change
//     board[i][j] = val
//   }

// };

// function maxSatisfied(customers, grumpy, minutes) {
//   const unGrumpyMinutes = []
//   let customersMissed = 0
//   let i = 0
//   while (i < minutes) {
//       const isGrumpy = !!(grumpy[i])
//       unGrumpyMinutes.push({ min: i, isGrumpy })
//       if (isGrumpy) customersMissed += customers[i]
//       i++
//   }
//   let maxCustomersMissed = customersMissed
//   heighestIdx = i - minutes
//   while (i < customers.length) {
//       const isGrumpy = !!(grumpy[i])
//       unGrumpyMinutes.push({ min: i, isGrumpy })
//       if (isGrumpy) customersMissed += customers[i]
//       const shiftedMinute = unGrumpyMinutes.shift()
//       if (shiftedMinute.isGrumpy) {
//           customersMissed -= customers[shiftedMinute.min]
//       }
//       if (maxCustomersMissed < customersMissed) {
//           heighestIdx = i - minutes + 1
//           maxCustomersMissed = customersMissed
//       }
//       i++
//   }
//   for (let i = heighestIdx; i < heighestIdx + minutes; i++) {
//       grumpy[i] = 0
//   }
//   let maximumCustomers = 0

//   for (let i = 0; i < customers.length; i++) {
//       if (!grumpy[i]) maximumCustomers += customers[i]
//   }
//   return maximumCustomers
// };
// https://leetcode.com/problems/jump-game/description/


// function canJump(nums) {

//     // here i dont backtrack which is better,because you dont need to account on that when using thie method.
//     function canIndexBeReached(index) {
//         for (let i = index - 1; i >= 0; i--) {
//             if (nums[i] + i >= index) {
//                 return i
//             }
//         }
//         return -1
//     }

//     if (nums.length === 1) return true
//     let currentNodeIdx = nums.length - 1
//     while (true) {
//         const nextAttempt = canIndexBeReached(currentNodeIdx)
//         if (nextAttempt === -1) return false
//         if (nextAttempt === 0) return true
//         else currentNodeIdx = nextAttempt
//     }
// }
//backtracking attempt that failed some the middle case,
// function canJump(nums) {
// function canJump(nums, currentPosition, jumpingDistance) {
//     const nextJumpVal = nums[currentPosition + jumpingDistance]
//     if (nextJumpVal === 0 && nums.length - 1 === currentPosition + jumpingDistance) return true // ugly
//     else return !!nextJumpVal
// }

//     function iterateJumps(nums, currentPosition) {
//         if (currentPosition === nums.length - 1) return true
//         const maximumJump = Math.min(nums[currentPosition], nums.length - 1 - currentPosition)
//         // how can i return false eariler?
//         // each time it goes -1 but in the end it doesnt
//         for (let i = maximumJump; i > 0; i--) {
//             const canIJump = canJump(nums, currentPosition, i)
//             if (canIJump) {
//                 const canReachEnd = iterateJumps(nums, currentPosition + i)
//                 if (canReachEnd) return true
//             }
//         }
//         return false
//     }
//     //firstly run through the array once,check if there is even a way to reach the end,at some point start from the end.


//     for (let i = nums.length; i >= 0; i--) {
//         if (i + nums[i] >= nums.length - 1) {
//             return iterateJumps(nums, 0)
//         }
//     }
//     return false
// };
// i want to tag places thhati jumped to and i dont include the starting position,but i include 0
// the diffrence between jumps and positions is positions will allways be one more.
// var jump = function (nums) {
//     let n = nums.length;
//     let oldMax = 0;
//     let newMax = 0;
//     let cnt = 0;

//     for (let i = 0; i < n - 1; i++) {
//         newMax = Math.max(nums[i] + i, newMax);
//         if (newMax >= nums.length) return ++cnt
//         console.log(newMax)
//         if (i === oldMax) {
//             cnt++;
//             oldMax = newMax;

//         }
//     }
// };
// console.log(jump([2, 10, 9, 32, 9, 9, 1, 3, 9, 0, 1, 2, 9, 0, 3]))

// https://leetcode.com/problems/search-in-rotated-sorted-array/discussion/
// console.log(search([5, 1, 2, 3, 4], 1), 1)
// function search(nums, target) {
//     let right = nums.length - 1
//     let left = 0
//     let mid
//     while (left <= right) {
//         mid = Math.floor((right + left) / 2)
//         console.log(left, mid, right)
//         if (nums[mid] === target) return mid
//         if (nums[left] <= nums[mid]) {
//             // list is sorted , than ->
//             // check if target in range ->
//             if (nums[left] <= target && target <= nums[mid]) {
//                 // go left
//                 right = mid - 1
//             }

//             else left = mid + 1
//             // go right

//         } else {
//             // right is sorted,than
//             // check if target in range ->
//             if (nums[mid] <= target && target <= nums[right]) {
//                 left = mid + 1
//                 // go right
//             }
//             //
//             else right = mid - 1
//             // go left
//         }
//     }
//     return -1
// }

var uniquePaths = function (m, n) {
    const DP = [];
    for (let i = 0; i <= m; i++) {
        DP[i] = [];
    }

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 || j === 0) {
                DP[i][j] = 0;
            } else if (i === 1 && j === 1) {
                DP[i][j] = 1;
            } else {
                const sum = DP[i - 1][j] + DP[i][j - 1];
                DP[i][j] = sum;
            }
        }
    }
    console.log(DP)
    return DP[m][n];

};
console.log(uniquePaths(2, 2))