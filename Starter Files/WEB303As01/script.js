/*
	WEB 303 Assignment 1 - jQuery
	{Harvir Singh}
*/

$(document).ready(function () {
	// Get references to the input fields and the amount span
	var yearlySalaryInput = $("#yearly-salary");
	var percentInput = $("#percent");
	var amountSpan = $("#amount");
  
	// Create an event handler for the change event oopsss it doesn't work idkkk, try it with keyup as with conditions
	yearlySalaryInput.on("keyup", calculateAmount);
	percentInput.on("keyup", calculateAmount);
  
	//  event hamdler to calculate the amount spend on tech and update of it.....
	function calculateAmount() {
	  // Get the values from the input fields
	  var salary = parseFloat(yearlySalaryInput.val()) || 0;
	  var percent = parseFloat(percentInput.val()) || 0;
  
	  // Use the built in toFixed() method
	  var amount = (salary * (percent / 100)).toFixed(2);
  
	  // Display the result with a dollar sign
	  amountSpan.text("$" + amount);
	}
  });
  

