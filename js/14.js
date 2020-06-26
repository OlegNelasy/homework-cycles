let n1=prompt("введите число №1"); 
confirm(n1);
let n2=prompt("введите число №2"); 
confirm(n2);

let d=2;
let r=1;
let b;

if(n1<n2) b=n1;
else b=n2; 

while(d<=b){
	if ((n1%d==0)&&(n2%d==0))
	document.writeln(d);
	d++;
}

