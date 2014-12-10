$(document).ready(function(){

	//Show value when submitted through input field
	$("#submit").click(function(){

		var value = $("input#number").val();
		var showValue = $("<p>"+value+"</p>");
		var fizz = $("<p>Fizz</p>");
		var buzz = $("<p>Buzz</p>");
		var fizzBuzz = $("<p>Fizz Buzz</p>");


		if (isNaN(value)){
			alert("Come on, bruh, that's not a number!");
		}
	//If number is not divisible by 3 or 5, return value
			else if (value%3 !==0 && value%5 !== 0){
			$("#chosen").before(showValue);
		}
		//If number is divisible by 3, return "fizz"
			else if (value%3 == 0 && value%5 != 0){
			$("#chosen").before(fizz);
		} 
		//If number is divisible by 5, return "buzz"
			else if (value%5 == 0 && value%3 != 0){
			$("#chosen").before(buzz);
		}
			else if (value%3 == 0 && value%5 == 0){
			$("#chosen").before(fizzBuzz);
		}
	});
});