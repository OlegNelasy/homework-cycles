let n=prompt("введите число"); 
confirm(n);
let s=prompt("введите степень"); 
confirm(s);
let i=0;
let r=1;
while(i<s){
	r=r*n;
	i++;
}
document.write(n);
document.write('^');
document.write(s);
document.write("=");
document.write(r);