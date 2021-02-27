// 1. Get 1 to 255
function count(startNum){
    var newArray = [];
    for(var num = startNum; num<=255; num++){
    newArray.push(num)
    }
    return newArray;
}
var y = count(1);
console.log(y)
// 2. Get even 1000
var sum = 0;
function even(){
    for(i=0; i<=1000; i++){
        if(i % 2 == 0)
        sum+=i
    }
}
even();
console.log(sum)
// 3. Sum odd 5000
var sum = 0;
function odd(){
    for (i=0; i<=5000; i++){
        if(i % 2 != 0)
        sum+=i
    }
}
odd();
console.log(sum)
// 4. Iterate an array
var array = [1, 2, 3, 7, 8];
sum = 0
function iteratearray(){
    for(i=0; i<=array.length-1; i++){
        sum+= array[i];
    }
}
iteratearray();
console.log(sum)
// 5. Find max 
var array = [1, 4, 7, 9, 8]
var arrayMax = 0
function max(){
    var arrayMax = array.length-1
    return array[arrayMax]
}
var y = max();
console.log(y);
// 6. Find Average 
var array = [1, 2, 3, 4, 5];
var sum = 0;
var a = 0;
function average(){
    for(i=0; i<=array.length-1; i++){
    sum+= array[i]
    }
    a = sum/array.length
}
average();
console.log(a);
// 7. Array odd 
var array = [];
function odd() {
    var oddArray = []
    for(i=0; i<=50; i++){
        if(i % 2 != 0) {
        oddArray.push(i);
        }
    }
    return oddArray;
}
var y = odd();
console.log(y)
// 8. Greater than Y 
var array = [1, 3, 5, 7]
function greaterY(y){
    var newArray = [];
    for(i=0; i<=array.length-1; i++){
        var x = array[i];
        if(x > y){
            newArray.push(x);
        }
    }
    return newArray;
}
var Y = greaterY(3)
console.log(Y)
// 9. Squares 
var array = [1, 3, 5, 7]
function squares(){
    var squareArray = [];
    for(i=0; i<=array.length-1; i++){
        var y = array[i];
        y = y*y
        squareArray.push(y);
        }
    return squareArray;
    }
var z = squares()
console.log(z)
// 10. Negatives 
var array = [1,5,10,-2,-20]
function negatives(){
    var newArray = [];
    for(i=0; i<=array.length-1; i++) {
        if(array[i]>0){
            newArray.push(array[i]);
        }
        else{
            newArray.push(array[i]*-0);
        }
    }
    return newArray;
}
var y = negatives()
console.log(y)
// 11. Max/Min/Avg 
var array = [1,5,10,-2]
var sum = 0;
var a = 0;
function maxmin(){
    var newArray=[];
    var max = Math.max(...array)
    newArray.push(max)
    var min = Math.min(...array)
    newArray.push(min)
    for(i=0; i<=array.length-1; i++){
        sum+= array[i]
        }
        a = sum/array.length
        newArray.push(a)
    return newArray;
}
var m = maxmin();
console.log(m)
// 12. Swap Values 
var array = [1,2,3,4]
function swap(){
    var i = array.length-1;
    var y = array[0];
    var x = array[i];
    array[0] = x;
    array[array.length-1] = y;
    console.log(array)
}
swap();
// 13. Number to String 
var array = [-1, -3, 2]
function string(){
    var newArray = [];
    for(i=0; i<=array.length-1; i++){
        if(array[i]>0){
            newArray.push(array[i]);
        }
        else(array[i]<0)
            newArray.push('Dojo');
        }
    return newArray;
    }
var y = string();
console.log(y);
