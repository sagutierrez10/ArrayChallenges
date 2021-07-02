var x= ("yummy");
var y =(" ")
alwaysHungry ([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
// 1. access the values inside the array (access values of array with index)
// 2. the value must equal food
// 3. print yummy when the value is food



function alwaysHungry (array) {     
    for(var i=0; i< array.length; i++){
        if(array[i]== array[1]){
            console.log(x+y) 
        } 
    else if( array[i] == array[4]){
        console.log("i'm not hungry")
    } 
    }
}







// alwaysHungry ([4,1,5,7,2]);
// this should console log "i'm hungry"