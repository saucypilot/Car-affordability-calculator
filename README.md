### What is this program?
This program calculates how much you would need to afford a car. It basically tells you how much you need to make a year to afford any car you want, without sacrificng your quality of life.
### Code explanation
This code defines a JavaScript function that calculates the monthly payment for a car loan based on several input values: the cost of the car, the borrower's yearly income, the value of the trade-in, the down payment, the borrower's credit score, and the loan duration in months.

The code first defines several variables that represent different credit score ranges. These variables are set to a boolean value indicating whether the credit score falls within the specified range.

Then, the `processInputValues` function is defined to retrieve the values from the input fields in the HTML form. These values are returned as an object.

The `removeUnwantedStrings` function is defined to remove any non-numeric characters from the input values. This function takes the object returned by `processInputValues` as an argument, and returns a new object with the cleaned-up values.

The `convertToNumbers` function is defined to convert the input values to integers. It takes the object returned by `removeUnwantedStrings` as an argument, and returns a new object with the values as integers.

The `calculate` function is defined to perform the actual calculation of the monthly payment. It takes the object returned by `convertToNumbers` as an argument and calculates the monthly payment based on the input values. The function also determines the interest rate based on the borrower's credit score, using the credit score range variables defined earlier. The function returns an object containing the calculated values for the 20% of the borrower's income, the monthly payment, and the credit score range.

Finally, the `displayResults` function is defined to display the calculated values to the user. It takes the object returned by calculate as an argument and updates the corresponding elements in the HTML with the calculated values.
