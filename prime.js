let n=11;
let count=0;
for(i=2;i<n;i++){
    if(n%i==0){
        count++
    }
}
if(count==0){
    console.log("Prime")
}
else{
    console.log("Not a Prime")
}