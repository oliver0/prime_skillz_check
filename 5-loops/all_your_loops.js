// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1
var checkz = 0;
for (var i = 0; i < 5; i++) {
  checkz++;
}


// 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2
i = 0;
while (i < 3) {
  checkz -= 2;
  i++;
}
console.log(checkz);
// 3 - Summarize in English what this code is doing.
// Use a multiline comment to do so.
//
var numbers = [1, 2, 3, 4, 5, 6, 7];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);

/*
This code is looping through the numbers array and adding to the
variable total the number that is at index i of the numbers array.
The loop will run 7 times as numbers.length equals 7. It will begin
at 0 and stop when the i turns 7 as 7 is not < than 7. After the loop
has run it is console logging the variable total which will be the sum
of all the numbers in the array numbers.


*/
