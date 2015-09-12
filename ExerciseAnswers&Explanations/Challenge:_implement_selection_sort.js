//refer to past code for explanation.
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

//refer to past code for explanation.
var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

//New Function. Uses both indexofMinimum and swap function to effectively find and swap values so that it sorts items.
var selectionSort = function(array) {
    //declares local variable
    var b;
    //for loop. Starts at 0 because arrays are indexed at 0. Increases by 1 to go through all of array
    for(var i=0; i < array.length; i++) {
        //assigns b to the result of going through the indexOfMinimum function
        b = indexOfMinimum(array,i);
        //swaps newly found lower value with the old value
        swap(array, i, b);
    }
};

//Test Cases
var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
println("Array after sorting:  " + array);

Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);

var array = [21, 11, 99, 88, 9, 7, 42];
selectionSort(array);
Program.assertEqual(array, [7, 9, 11, 21, 42, 88, 99]);

var array = [21, 19, 99, 88, 9, 7, 42];
selectionSort(array);
Program.assertEqual(array, [7, 9, 19, 21, 42, 88, 99]);
