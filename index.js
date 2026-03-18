//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work



const day1TempF = 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TempC = 28;
const day9TempF = 68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day30TempC = 29;
 
let day2TempF = (day2TempC * 9 / 5) + 32
let day4TempF = (day4TempC * 9 / 5) + 32
let day6TempF = (day6TempC * 9 / 5) + 32
let day8TempF = (day8TempC * 9 / 5) + 32
let day10TempF = (day10TempC * 9 / 5) + 32
let day12TempF = (day12TempC * 9 / 5) + 32
let day14TempF = (day14TempC * 9 / 5) + 32
let day16TempF = (day16TempC * 9 / 5) + 32
let day18TempF = (day18TempC * 9 / 5) + 32
let day20TempF = (day20TempC * 9 / 5) + 32
let day22TempF = (day22TempC * 9 / 5) + 32
let day24TempF = (day24TempC * 9 / 5) + 32
let day26TempF = (day26TempC * 9 / 5) + 32
let day28TempF = (day28TempC * 9 / 5) + 32
let day30TempF = (day30TempC * 9 / 5) + 32


let day1TempC = (day1TempF - 32) * 5 / 9
let day3TempC = (day3TempF - 32) * 5 / 9
let day5TempC = (day5TempF - 32) * 5 / 9
let day7TempC = (day7TempF - 32) * 5 / 9
let day9TempC = (day9TempF - 32) * 5 / 9
let day11TempC = (day11TempF - 32) * 5 / 9
let day13TempC = (day13TempF - 32) * 5 / 9
let day15TempC = (day15TempF - 32) * 5 / 9
let day17TempC = (day17TempF - 32) * 5 / 9
let day19TempC = (day19TempF - 32) * 5 / 9
let day21TempC = (day21TempF - 32) * 5 / 9
let day23TempC = (day23TempF - 32) * 5 / 9
let day25TempC = (day25TempF - 32) * 5 / 9
let day27TempC = (day27TempF - 32) * 5 / 9
let day29TempC = (day29TempF - 32) * 5 / 9
let tot_temperature_in_fahrenheit =
  day1TempF + day2TempF + day3TempF + day4TempF + day5TempF +
  day6TempF + day7TempF + day8TempF + day9TempF + day10TempF +
  day11TempF + day12TempF + day13TempF + day14TempF + day15TempF +
  day16TempF + day17TempF + day18TempF + day19TempF + day20TempF +
  day21TempF + day22TempF + day23TempF + day24TempF + day25TempF +
  day26TempF + day27TempF + day28TempF + day29TempF + day30TempF

let tot_temperature_in_celsius =
  day1TempC + day2TempC + day3TempC + day4TempC + day5TempC +
  day6TempC + day7TempC + day8TempC + day9TempC + day10TempC +
  day11TempC + day12TempC + day13TempC + day14TempC + day15TempC +
  day16TempC + day17TempC + day18TempC + day19TempC + day20TempC +
  day21TempC + day22TempC + day23TempC + day24TempC + day25TempC +
  day26TempC + day27TempC + day28TempC + day29TempC + day30TempC

let avg_temperature_in_celsius = tot_temperature_in_celsius /30;
let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit /30;
moduleExports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius}; 
    console.log("Total Fahrenheit:", tot_temperature_in_fahrenheit)
console.log("Total Celsius:", tot_temperature_in_celsius)

console.log("Average Fahrenheit:", avg_temperature_in_fahrenheit)
console.log("Average Celsius:", avg_temperature_in_celsius)
console.log(day2TempF)