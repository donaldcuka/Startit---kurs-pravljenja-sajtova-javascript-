// var user = prompt('unesi jedan prirodan broj');
// var sum = 0;
// for (i=0; i<user; i++){
// 	sum = sum + i;
// }

// document.write(sum);
var user = Number(prompt('unesi jedan prirodan broj'));
var sum = 0;
for (i=user; i>0; i--){
    sum += i;
}

document.write(sum);