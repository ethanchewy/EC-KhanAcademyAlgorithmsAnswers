//counter
var counter=1; 

//function for drawing lines
var displaySwaps = function (array, x, y) {
    line(x, 12 + 50*counter,y, 50*(counter+1));
};

//display actual arrays
var displayArray = function(array, xDist, yDist) {
    textFont(createFont("monospace"), 10);
    fill(0,0,0);
    text(array, xDist, yDist);
};

//swap function
var swap = function(array, secondIndex, firstIndex) {
    if(counter < array.length) {
        displaySwaps(array, 15+firstIndex*21, 15+secondIndex*21);
    }  
    displayArray(array, 10, 10 + 50*counter); 
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
    counter++;
};
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
var selectionSort = function(array) {
    var minimum;
    for(var count = 0; count < array.length; count++) {
        minimum = indexOfMinimum(array, count);
        swap(array, count, minimum );
    }
    counter=1;
};


var array1 = [13, 9, -1, -5];
selectionSort(array1);

var array2 = [13, 9, -5, -1];
translate(100, 0);
selectionSort(array2);

var array3 = [-5, 9, -1, 13];
translate(100, 0);
selectionSort(array3);

var array4 = [-5, -1, 13, 9];
translate(100, 0);
selectionSort(array4);
