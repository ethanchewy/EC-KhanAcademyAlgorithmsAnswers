//Remember to first look at the pseudocode!! It's very helpful to get a general blueprint of what you are going to code.

/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
var doSearch = function(array, targetValue) {
	//Declare + set variables
	var min = 0;
	
	//Array indexes start at 0. 
	//The Array Length property returns the total amount of elements in an array.
	var max = array.length - 1; //In this case, the length (amount of elements) is 25. The last number (97) is indexed at 24.
	
	// Assigned by prexisting code from Khan Academy
	var guess;
	
	// Counter: used to determine how many times the user guessed. Note that 1 is assigned to num because you don't add to the num variable until after the if statement.
	var num = 1;
	
	// While loops keep on going until the condition (..) equals false.
	// We use min <= max because we want this loop to keep on running until we find the answer + this condition acts as a double checker if you set your min and max correctly.
	while (min <= max){
		// Math.floor insures you have a round number.
		guess = Math.floor((max + min)/2);
		
		//If...Else statement to test if we have the right number
		if (array[guess] === targetValue) {
			//prints # of guesses
			println(num);
			
			//return correct guess (aka the targetValue)
			//exits while loop
			return guess;

		} else if (array[guess] < targetValue){
			// Raises the min to the next higher element (after the guess) because we know the targetValue is not the guess nor anythign lower than it.
			// Leaves the max value alone because we still don't know if one of the numbers before it is the targetvalue.
			min = guess + 1;
			
		} else {
			//Lowers the max to the next lowers (before the guess)because we know the targetValue is not the guess nor anythign higher than it.
			max = guess - 1;
		}
		
		//print the guess value after each loop 
		println(guess);
		
		//increments the counter so that we know how many guesses at the end.
		num ++;
	}
	    
	
	//Default. Used for debugging (if the while loop screws up, this will be returned)
	return -1;
};

//Array of primes that we are sorting through 
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

//Function is called and the result is stored in the variable result
var result = doSearch(primes, 73);

//Prints result
println("Found prime at index " + result);

//Setting Target Value. Note that y in doSearch(primes,x),y) is the index location of x in the array.
Program.assertEqual(doSearch(primes, 73), 20);
Program.assertEqual(doSearch(primes, 79), 21);
Program.assertEqual(doSearch(primes, 83), 22);
