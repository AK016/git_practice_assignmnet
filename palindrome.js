let s=121;
let x=s;
let r=0;
while(x>0){
    r=r*10+x%10;
    x=Maths.floor(x/10);
}
if(s==r){
    console.log("Palindrome")
}
else{
    console.log("Not a Palindrome")
}