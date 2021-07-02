function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i=0; i<arr.length; i++){
        var individualArray = arr[i];
        var cutoff=5
        if(individualArray > cutoff){
            filteredArr.push(individualArray);
        }
    }
        return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);
// console.log(result); // we expect back [6, 8, 10, 9]
