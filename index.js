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

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};

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

//conversion to one unit (celcius)


const day1TempC = (day1TempF - 32) * 5 / 9;
const day3TempC = (day3TempF - 32) * 5 / 9;
const day5TempC = (day5TempF - 32) * 5 / 9;
const day7TempC = (day7TempF - 32) * 5 / 9;
const day9TempC = (day9TempF - 32) * 5 / 9;
const day11TempC = (day11TempF - 32) * 5 / 9;
const day13TempC = (day13TempF - 32) * 5 / 9;
const day15TempC = (day15TempF - 32) * 5 / 9;
const day17TempC = (day17TempF - 32) * 5 / 9;
const day19TempC = (day19TempF - 32) * 5 / 9;
const day21TempC = (day21TempF - 32) * 5 / 9;
const day23TempC = (day23TempF - 32) * 5 / 9;
const day25TempC = (day25TempF - 32) * 5 / 9;
const day27TempC = (day27TempF - 32) * 5 / 9;
const day29TempC = (day29TempF - 32) * 5 / 9;

// Temperatures in Fahrenheit and Celsius
const tempsF = [32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73, 79, 71, 74, 76];
const tempsC = [25, 18, 15, 28, 20, 23, 30, 22, 26, 24, 21, 27, 19, 17, 29];

// Convert all Fahrenheit temperatures to Celsius
const tempsFtoC = tempsF.map(f => (f - 32) * 5 / 9);

// Convert all Celsius temperatures to Fahrenheit
const tempsCtoF = tempsC.map(c => (c * 9 / 5) + 32);

// Calculate total temperatures
const tot_temperature_in_celsius = tempsC.reduce((sum, t) => sum + t, 0) + tempsFtoC.reduce((sum, t) => sum + t, 0);
const tot_temperature_in_fahrenheit = tempsF.reduce((sum, t) => sum + t, 0) + tempsCtoF.reduce((sum, t) => sum + t, 0);

// Calculate average temperatures
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;

// Display results
console.log("Total Temperature in Celsius:", tot_temperature_in_celsius.toFixed(2));
console.log("Total Temperature in Fahrenheit:", tot_temperature_in_fahrenheit.toFixed(2));
console.log("Average Temperature in Celsius:", avg_temperature_in_celsius.toFixed(2));
console.log("Average Temperature in Fahrenheit:", avg_temperature_in_fahrenheit.toFixed(2));

// Export variables for tests
module.exports = {
  tot_temperature_in_celsius,
  tot_temperature_in_fahrenheit,
  avg_temperature_in_celsius,
  avg_temperature_in_fahrenheit
};
