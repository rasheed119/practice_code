var arr = [56,45,89,78,98,25,32,12];
var count = 0;
var prime = [];
var max_value = Math.max(...arr);
for(var i = 0 ; i <= arr.length ; i++){
    for(var j = 1 ; j <= max_value ; j++){
        if(arr[i]%j===0){
            count++;
        }
    }
    if(count==2){
        prime.push(arr[i]);
    }
    count = 0;
}
console.log(prime);