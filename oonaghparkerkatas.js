///Oonagh-Alice Parker Codewars JavaScript Coding Katas

///-------------------------------------------------
///Kata 1- Square Sum Solution

///Define a function squareSum that takes each of the numbers in an array, squares them and sums all the answers
function squareSum(arr) {
    let total = 0
    ///Create a for loop that loops over each of the numbers in any length of array
    for (let i = 0; i < arr.length; i++) {
        ///Square each of the numbers in the array and add them together storing them in the variable total
        total += arr[i] ** 2
    }
    ///Returns the total of the summed square numbers
    return total
}

const squares = [1, 2, 3, 4, 5]
///Print the result square sum of the squares array in the console
console.log(squareSum(squares))

///-------------------------------------------------
///Kata 2- Convert a number to a string

///Define a function that takes in a number variable and uses the .toString() to convert the number
///to a string data type
function numberToString(num) {
    return num.toString()
}

///Sets the variable number to 12
const number = 12

///Print the result of numberToString into the console, however this will still print 12
///and will not appear different
console.log(numberToString(number))
///Use typeof to check that the number is now a string data type
console.log(typeof numberToString(number))

///-------------------------------------------------
///Kata 3- Calculating BMI 

///Define a function bmi that takes in the variables weight and height
function bmi(weight, height) {
    ///Calculate the bmi using the given formula and store it in the variable index
    index = (weight) / (height ^ 2)
    ///Using a series of else if statements the console logs the results of the bmi test
    ///If the index calculated is less than or equal to 18.5, print Underweight in the console
    if (index <= 18.5) {
        return console.log('Underweight')
    }
    ///If the index calculated is less than or equal to 25, print Normal in the console
    else if (index <= 25.0) {
        return console.log('Normal')
    }
    ///If the index calculated is less than or equal to 30, print Overweight in the console
    else if (index <= 30.0) {
        return console.log('Overweight')
    }
    ///If the index calculated is greater than 30, print Obese in the console
    else if (index > 30) {
        return console.log('Obese')
    }
}

///Calls the bmi function with the variables 40, 1.7 and should return 'Underweight' 
///in the console as a result
bmi(40, 1.7)

///-------------------------------------------------
///Kata 4- Total amount of points

///Define a function points that calculates the championship points for Team A
function points(games) {
    let total = 0
    for (const result of games) {
        ///Split the points of each game into two different elements so the scores can be compared
        const array = result.split(":")
        ///If Team A has won they get 3 points added to their total
        if (array[0] > array[1]) {
            total += 3
        }
        ///If Team A loses, no points are added to their total
        else if (array[0] < array[1]) {
            total += 0
        }
        ///If the teams draw, 1 point is added to their total
        else if (array[0] === array[1]) {
            total += 1
        }
    }
    ///Return the total number of points Team A has gained in the championship
    return total
}

///-------------------------------------------------
///Kata 5- Total amount of points

///Define a function solution that takes a string and reverses the elements in that string
function solution(str) {
    ///Create a variable reversed to add the reversed elements of the string to
    var reversed = ""
    ///for loop that takes the last element of the string and adds it to the reversed variable
    ///and continues to do this until it reaches the first element in the string
    for (var i = str.length - 1; i >= 0; i--) { reversed += str[i] }

    ///Return the reversed string
    return reversed
}

///Should return 'dlrow' into the console
console.log(solution('world'))