// 1. access each value of the array
// 2. add the values and divide them by the length to get average
// 3. compare which value are greater that the average


function betterThanAverage(arr) {
    var sum = 0;
    var count = []
    // count how many values are greated than the average
    for (var i =0; i < arr.length; i++){
        sum= sum + arr[i];
        }
        var avg = sum/arr.length;
        for (var i =0; i < arr.length; i++){
            if (arr[i] > avg ) 
            count.push(arr[i])
        }

    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
