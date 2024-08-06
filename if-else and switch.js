function isLeapYear(year) {
    // Leap year conditions:
    // 1. Divisible by 4
    // 2. Not divisible by 100 unless also divisible by 400

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true; // It's a leap year
    } else {
        return false; // Not a leap year
    }
}


function determineTicketPrice() {
    let age = prompt("Enter your age:");
    

    let ticketPrice;

    if (age <= 12) {
        ticketPrice = 10;
    } else if (age >= 13 && age <= 17) {
        ticketPrice = 15;
    } else if (age >= 18) {
        ticketPrice = 20;
    } else {
        console.log("Invalid age entered."); 
       
    }
}