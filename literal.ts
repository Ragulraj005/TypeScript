// Literal types
let day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
day = 'Monday'; // Valid
// day = 'Saturday'; // Error: Type '"Saturday"' is not assignable to type '"Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday"'.

// Function with literal types
function getDayOfWeek(day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday'): string {
    return `Today is ${day}.`;
}

console.log(getDayOfWeek('Wednesday')); // Output: Today is Wednesday.
// console.log(getDayOfWeek('Saturday')); // Error: Argument of type '"Saturday"' is not assignable to parameter of type '"Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday"'.
