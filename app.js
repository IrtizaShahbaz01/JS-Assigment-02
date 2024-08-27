// // Chapter 03 

// // Question 01 

// var age = 16;

// alert("I am " + age + " years old.");


// // Question 02

// var showTimesVisited;
// showTimesVisited = 14;

// alert ("You have visited " + showTimesVisited + " times in our web page");


// // Question 03

// var birthYear;

// birthYear = 2008;

// document.write("<h1>My birth year is " + birthYear + " datatype of decleared value is " + typeof birthYear + "</h1>");


// // Question 04

// var visiterName = "Rahim";
// var prodTitle = "Water Bottle";
// var prodQuantity = 3;

// document.write("<br><br><h1>Visitor Order is:</h1>");
// document.write("<h3>Customer Name: </h3>" + visiterName + "<br> <h3>Customer Product: </h3>" + prodTitle + "<br> <h3>Customer Product Quantity: </h3>" + prodQuantity);





// Chapter 04


// Question 01

// var x, y, z;

// var x = 5, y = 10, z = 15;


// Question 02

// Legal Variable Names:

// var firstName;
// var _age;
// var totalAmount;
// var user2;
// var $price;

// Illegal Variable Names:

// var 2ndUser;
// var user-name;
// var var;
// var total amount ;
// var @price;


// Chapter 05

// Question 01

// let number1 = 5;
// let number2 = 10;
// let result = number1 + number2;

// document.write("<br><br>The result is: " + result);


// Question 02

// Subtraction

// let subtractionResult = number1 - number2;
// document.write("Subtraction: " + number1 + " - " + number2 + " = " + subtractionResult + "<br>");

// // Multiplication
// let multiplicationResult = number1 * number2;
// document.write("Multiplication: " + number1 + " * " + number2 + " = " + multiplicationResult + "<br>");

// // Division
// let divisionResult = number1 / number2;
// document.write("Division: " + number1 + " / " + number2 + " = " + divisionResult + "<br>");

// // Modulus (Remainder)
// let modulusResult = number1 % number2;
// document.write("Modulus: " + number1 + " % " + number2 + " = " + modulusResult + "<br>");


// Question 03

// let num;

// document.getElementById('output').innerHTML = "Value after variable declaration is: " + num + "<br>";

// num = 5;

// document.getElementById('output').innerHTML += "Initial value: " + num + "<br>";

// num++;

// document.getElementById('output').innerHTML += "Value after increment is: " + num + "<br>";

// num += 7;

// document.getElementById('output').innerHTML += "Value after addition is: " + num + "<br>";

// num--;

// document.getElementById('output').innerHTML += "Value after decrement is: " + num + "<br>";

// let remainder = num % 3;

// document.getElementById('output').innerHTML += "The remainder is: " + remainder;


// Question 04

// var costOfTicket = 6000;

// var costOfFiveTickets = costOfTicket * 5;

// document.write("<br>Total Cost to buy 5 tickits is "+ costOfFiveTickets);


// Question 05

// document.write("2 x 1 = 2");
// document.write("2 x 2 = 4");
// document.write("2 x 3 = 6");
// document.write("2 x 4 = 8");
// document.write("2 x 5 = 10");
// document.write("2 x 6 = 12");
// document.write("2 x 7 = 14");
// document.write("2 x 8 = 16");
// document.write("2 x 9 = 18");
// document.write("2 x 10 = 20");

// Question 06

// let celsius = 25;

// let fahrenheit = (celsius * 9/5) + 32;

// document.getElementById('output').innerHTML = celsius + "°C is " + fahrenheit.toFixed(2) + "°F<br>";

// fahrenheit = 77; 

// celsius = (fahrenheit - 32) * 5/9;

// document.write( fahrenheit + "°F is " + celsius + "°C");


// Chapter 07

//  var priceOfItem1 = 15.99; 
//  var priceOfItem2 = 29.99; 


//  var quantityOfItem1 = 3; 

//  var quantityOfItem2 = 2; 


//  var shippingCharges = 5.99; 

//  var totalCostOfItem1 = priceOfItem1 * quantityOfItem1;
//  var totalCostOfItem2 = priceOfItem2 * quantityOfItem2;
//  var subtotal = totalCostOfItem1 + totalCostOfItem2;
//  var totalCost = subtotal + shippingCharges;


//  document.write("<h2>Receipt</h2>");
//  document.write("<p>Item 1: $" + priceOfItem1.toFixed(2) + " x " + quantityOfItem1 + " = $" + totalCostOfItem1.toFixed(2) + "</p>");
//  document.write("<p>Item 2: $" + priceOfItem2.toFixed(2) + " x " + quantityOfItem2 + " = $" + totalCostOfItem2.toFixed(2) + "</p>");
//  document.write("<p>Subtotal: $" + subtotal.toFixed(2) + "</p>");
//  document.write("<p>Shipping Charges: $" + shippingCharges.toFixed(2) + "</p>");
//  document.write("<p><strong>Total Cost: $" + totalCost.toFixed(2) + "</strong></p>");


// Question 08

// var totalMarks = 500; 
// var marksObtained = 375; 


// var percentage = (marksObtained / totalMarks) * 100;

// document.write("<h2>Result</h2>");
// document.write("<p>Total Marks: " + totalMarks + "</p>");
// document.write("<p>Marks Obtained: " + marksObtained + "</p>");
// document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");


// Question 9
 

// var usdToPkrRate = 104.80;
// var sarToPkrRate = 28;
// var amountInUsd = 10;
// var amountInSar = 25;


// var totalInPkr = (amountInUsd * usdToPkrRate) + (amountInSar * sarToPkrRate);


// document.write("Total in Pakistani Rupees: " + totalInPkr);


// Question 10
 

// var initialNumber = 20;


// var result = (((initialNumber + 5) * 10) / 2);


// document.write("<h1>Result: " + result + "</h1>");

// Question 11
// var currentYear = 2024;
// var birthYear = 1990;

     
// var ageIfBirthdayHasOccurred = currentYear - birthYear;

// var ageIfBirthdayHasNotOccurred = ageIfBirthdayHasOccurred - 1;

        // document.write("<h1>They are either " + ageIfBirthdayHasOccurred + " or " + ageIfBirthdayHasNotOccurred + " years old</h1>");

// Question 12

// var radius = 10; 

          
// var pi = 3.142;
        
                
// var circumference = 2 * pi * radius;
        
// var area = pi * radius * radius;
        
              
// document.write("<h1>The circumference is " + circumference.toFixed(2) + "</h1>");
// document.write("<h1>The area is " + area.toFixed(2) + "</h1>");

// Question 13


// var snack = "chocolates"; 


// var currentAge = 25; 


// var maxAge = 80; 


// var amountPerDay = 2; 


// var yearsLeft = maxAge - currentAge; 
// var totalAmountNeeded = yearsLeft * 365 * amountPerDay; 


// document.write("<h1>You will need " + totalAmountNeeded + " " + snack + " to last you until the ripe old age of " + maxAge + ".</h1>");



// // Chapter 06


// Question 1

// document.write("<h1>Result<h1/>");
// document.write("The value of a is: 10");
// num = 10;
// num++;
// document.write("Now the value of is :", num);

// document.write("The value of a is: 11");
// num = 11;
// num++;
// document.write("Now the value of is :", num);

// document.write("The value of a is: 11");
// num = 12;
// num--;
// document.write("Now the value of is :", num);

// document.write("The value of a is: 11");
// num = 11;
// --num;
// document.write("Now the value of is :", num);

// Question 2

// var a = 2;
// var b = 1;

// var result = --a - --b + ++b + b--;

//             1 - 0 + 2 + 0 = 3

// console.log(result);
