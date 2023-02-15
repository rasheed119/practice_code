var name = prompt("Enter the String or Name : ").split(" ");
var caps = [];
for(var i = 0 ; i < name.length ; i++){
    if(name[i].charCodeAt(0)>=97 && name[i].charCodeAt(0)<=122){
        const c = name[i].charCodeAt(0);
        caps[i] = name[i].replace(name[i][0],String.fromCharCode(c-32));
    }
    else{
        caps.push(name[i]);
    }
}
console.log(caps.join(" "));