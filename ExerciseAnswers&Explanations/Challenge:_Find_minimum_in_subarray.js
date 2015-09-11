var indexOfMinimum = function(array, startIndex) {
    // Set initial values for minValue and minIndex,
    // based on the leftmost entry in the subarray:  
    var minValue = array[startIndex];
    var minIndex = startIndex;

    // Loop over items starting with startIndex, 
    // updating minValue and minIndex as needed:
    //For Loop
    for(var minIndex = minIndex + 1; minIndex < array.length; minIndex){
        //Tests to see if next value is smalller than the value to the left of it on the array
        if(array[minIndex] < minValue){
            //increments minIndex, allowing the sort function to check the next values
            minIndex = minIndex + 1;
            //sets new value
            minValue = array[minIndex];
            break;
        }
    }
    return minIndex;
}; 

var array = [18, 6, 66, 44, 9, 22, 14];   
var index = indexOfMinimum(array, 2);

//  For the test array [18, 6, 66, 44, 9, 22, 14], 
//  the value 9 is the smallest of [..66, 44, 9, 22, 14]
//  Since 9 is at index 4 in the original array, 
//  "index" has value 4
println("The index of the minimum value of the subarray starting at index 2 is " + index + "."  );
Program.assertEqual(index, 4);
Program.assertEqual(indexOfMinimum(array,0),2);
Program.assertEqual(indexOfMinimum(array,8),9);
