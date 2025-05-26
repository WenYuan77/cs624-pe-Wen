# Application Behavior Overview

## 1. Input

1.1 Users can input string data on two screens: Add City and Add Country  
1.2 Each screen contains a form with two input fields:  
- Add City: City Name and Country Name  
- Add Country: Country Name and Currency Name  
1.3 Users submit data by pressing the Submit button on the respective form  
1.4 Users can select an item from the Cities or Countries list to view more information (currently not functional due to missing routes)

## 2. Process

2.1 When a user types into an input field, the program captures the input value in real time  
2.2 On pressing Submit, the following steps occur:  
2.2.1 The program checks if both fields have been filled  
2.2.2 If valid, the data is stored in either the city or country object  
2.2.3 The object is passed through the top-level routing parameters to share data across components  
2.2.4 The form is reset to its blank state  
2.2.5 The user is redirected to the Cities or Countries page, depending on the form used  
2.3 If a user selects a city or country item from a list, the app attempts to navigate to a route named after the item  
2.3.1 This action currently causes an error because the necessary routes are not yet defined

## 3. Output

3.1 On app load, the default screen is the Cities page  
3.1.1 It displays: No saved cities  
3.2 There are four navigation tabs at the bottom  
3.2.1 Cities  
3.2.2 Add City  
3.2.3 Countries  
3.2.4 Add Country  
3.3 The Add City and Add Country screens each show a form with two input fields  
3.3.1 Placeholders inside the fields guide the user on what to input  
3.4 The Countries screen functions similarly to the Cities screen and displays: No saved countries  
3.5 When typing into a field, the placeholder is replaced by user input  
3.6 If the form is submitted with any empty field  
3.6.1 An alert is shown instructing the user to complete both fields  
3.7 After successful submission  
3.7.1 The user is redirected to the corresponding list page  
3.7.2 The new data appears at the bottom of the list  
3.8 Returning to the form page displays a cleared form ready for new input  
3.9 Clicking a list item still causes an error due to undefined navigation routes
