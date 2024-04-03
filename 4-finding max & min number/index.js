//find out max number and min number from a given data.
//solution
var data = [98, 73, 36, 1, 100, 67, 21, 84]; //Data Array Initialization
function Min_Max(data) {
    if (data.length === 0) {
        return { Min: undefined, Max: undefined }; //means if there is no data it returns an object of undefined value.
    }
    //if there is data so do it below according to instructions.
    var minvalue = data[0]; //Initializes minvalue and maxvalue to the first element of the data array i.e at zero index.
    var maxvalue = data[0];
    for (var i = 0; i < data.length; i++) {
        //checking data
        if (data[i] < minvalue) { //If the current element is smaller than minvalue then...
            minvalue = data[i]; //minvalue is updated to the current element. 
        }
        else if (data[i] > maxvalue) //If the current element is larger than maxvalue then...
         {
            maxvalue = data[i]; // maxvalue is updated to the current element.
        }
    }
    return { minvalue: minvalue, maxvalue: maxvalue }; //it returns an object
}
var result = Min_Max(data); //invoke function
console.log("Minimum Value In A Given Data Is=", result.minvalue);
console.log("Maximum Value In A Given Data Is=", result.maxvalue);
//Author-Huma Mohsin
