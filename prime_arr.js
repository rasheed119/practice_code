const prime_value = function (arr){
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
    return prime;
}
var arr = [56,45,89,78,98,25,32,12];
console.log(prime_value(arr));