//Function Expression has been stored in variable swap; takes in 3 arguments. Goal is to swap numbers
var swap = function(array, firstIndex, secondIndex) {
    	//Declares Dummy Variable "temp" and assigns it to the value of the firstIndex's position.
    	//ex: if first Index = 1 in this array => [9,7,8], temp would equal to 7 
    	var temp = array[firstIndex];
    
	 //Sets the firstIndex position's value equal to secondIndex position's value. firstIndex value is forever changed now
	array[firstIndex] = array[secondIndex];
	
	//Sets secondIndex position's value equal to the firstIndex position's value. 
	array[secondIndex] = temp;
};

//Test array
var testArray = [7, 9, 4];

//Runs Function
swap(testArray, 0, 1);

//Prints Result
println(testArray);

//Uses KhanAcdemy Checker to See If you did it correctly
Program.assertEqual(testArray, [9, 7, 4]);

//Other Tests. Note that the testArray value is based on the most recent array change.
swap(testArray, 0, 2);
println(testArray);
Program.assertEqual(testArray, [4, 7, 9]);

swap(testArray, 0, 2);
println(testArray);
Program.assertEqual(testArray, [9, 7, 4]);


