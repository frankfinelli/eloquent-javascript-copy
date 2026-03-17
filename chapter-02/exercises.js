
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called `triangles` that takes in a parameter of a
number. This number determines the "size" of the triangle you need to log. 
HINT: each "level" of the triangle needs to be logged individually.

example: triangles(3);
LOGS =>

#
##
###

example: triangles(5);
LOGS =>

#
##
###
####
#####

*/

function triangles(x) {
  let pound = ''
  for (let y = 0; y < x; y++) {
    pound += '#'
    console.log(pound)
  }  
}

triangles(3)
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called fizzBuzz that takes in two parameters - 
`start`, `end`. `start` and `end` both represent numbers. This function should
access each number from `start` to `end` and log different statements depending
on the number:

  - if the number is divisible by 3, log "fizz"
  - if the number is divisible by 5, log "buzz"
  - if the number is divisible by both 3 & 5, log "fizzbuzz"
  - if the number is not divisible by 3 or 5, log the number
*/

function fizzBuzz(start, end) {
  for (let x = start; x <= end; x++) {
    if (x % 15 === 0) {
      console.log('fizzbuzz');
    } else if (x % 5 === 0) {
      console.log('buzz');
    } else if (x % 3 === 0) {
      console.log('fizz');
    } else {
      console.log(x); 
    }
  }
};

fizzBuzz(1, 10); 
fizzBuzz(3, 20);

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called drawChessboard that takes in a parameter of
`x` that represents the "size" of the chessboard you are going to log. The chessboard
will be a collection of spaces and #'s creating the appearance of a chessboard.

Note: in order to do this correctly, you need to ultimately create a string containing
linebreak characters (\n). For example, if you invoke drawChessboard(3) it should log a
string that looks like this " # \n# #\n # \n# #"

example: drawChessboard(4);
LOGS =>

 # #
# #
 # #
# #

exampmle drawChessboard(3);
LOGS =>

 # 
# #
 #

*/

drawChessboard = (x) => {
  let bored = ''
// and then add line break somewhere
  for (let z = 0; z < x; z++) {
    let rook = ''
    for (let w = 0; w < x; w++) {
      if ((w + z) % 2 === 0) {
        rook += ' '
      } else {
        rook += '#'
      }
    }
    bored += (rook + '\n') //accidentally wrote rook += '\n' instead of just +...and both work
  }
  console.log(bored)
}

console.log(drawChessboard(16))
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}