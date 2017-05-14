
/*---dsfasfa--*/
// var a=3;
// // console.log(++a);
// console.log(a++)

// console.log(a);
//  var b;
// console.log(b);
// console.log(typeof a);
// console.log(typeof Boolean(a));
// var b =true;
// console.log(typeof b);
// var c="dd20dsfdf2";
// console.log(Number(c));
// document.write("基数"+"<br/>");
// var a =window.prompt("你当前的工资")
// document.write(a%2==1)
// var a = 10;
// var b = window.prompt();
// document.write(b==a);
// var a =1;
// var b=1;
// document.write(b==a|(a=2));
// document.write(a);	
// 3>2?alert("adadafa"):alert("afdsfasf");
// document.write(parseInt(a/24)+"天"+a%24+"小时");
// document.write(Math.pow(4,2)+"<br/>");
// document.write(Math.sqrt(3).toFixed(2)+"<br/>");
// document.write("4"==4);


// document.write("5个月以后的工资"+(parseInt(a)+3000));
// console.log(0/0);
// for (var i = 0; i < 61; i++) {
// 	var a = i%7
// 	if(a!=0){
// 		console.log(i);
// 	}
// }
/*
for (var i = 100 ,e=0; i <=900; i++) {
	var a= parseInt(i/100);
	var b= parseInt(i%100/10);
	// console.log(b);
	var c= parseInt(i%10);
	// console.log(c);	
	var d=Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3);
	console.log("d"+d +"i"+i);
	if (i==d) {
		console.log(i);
		e++;
	}
	if (e==4) {
		break;
	}
}*/
/*
for (var i = 1; i < 1000; i++) {
	var b =0;
	for (var a = 1; a <i;  a++) {
		if (i%a==0) {
			b=b+a;
		}
	}
	if (i==b)
	 {
		console.log(i);
	}			

}*/
/*
var c =window.prompt();
for (var i = 2; i < c; i++) {
	if (0==c%i) {
		console.log("是和数");
	}else{
		console.log("是质数");
	}
}*/
/*
for (var i = 0; i < 100; i++) {
	for(var a = 0;a<=100-i;a++){
		var b =100-i-a;
		var c=3*i+2*a+b;
		if (c<=200) {
			console.log(i,a,b,c);
		}
		
	}
}*/
/*
outer:
for (var i = 0; i < 100; i++) {
	for (var a = 0; a < i; a++) {
		console.log(a,i);
		if (a==2) {
			continue outer;
		}
	}	
}*/
// var i=1;
// do{
	
// 	console.log(i);
// 	debugger;
// 	i++;

// }while(i<10);
/*
var b=3;
function a(){
	console.log(b);
	b=4;
	console.log(b);
}
a();
console.log(b);*/
/*
function n(a){
	if (a!=2&&a!=1) {
	 return	n(a-1)+n(a-2);
	}
	if (a==2||a==1) {
		return 1;
	}	
}
console.log(n(4));*/
/*
var c=0;
for (var n = 1; n < 11; n++) {	
	var b =1;
	for (var i = 1; i <= n; i++) {		
		b=b*i;
	}
	c=c+b;
	console.log(c);	
}
console.log(c);*/
/*
function a(b){
	var n =1;
	for(var c=2;c>=1;n++){
		c=b/Math.pow(10,n-1);		
	} 
	console.log(n);
	var g = 0;
	for(var e =1;n>2;e++){
		n--;
		var d = parseInt(b/Math.pow(10,n-2));
		g=g+d%10*Math.pow(10,e-1);
		console.log(g);
	}
}
a(1);
*/

/*
function rev(a){
	var b =0;
	while(a){
		b=a%10+b*10;
		a=parseInt(a/10);
	}
	return b;
}
console.log(rev(1));*/ 
/*
function fun(a,b){
	// arguments[1]=8;
	alert(arguments[2]);
}
fun(7,null,9)*/
/*//闭包的例子
(function(n){
	input.onclick=function(){
		console.log(n);
	}
})(i);
*/

/*
for (var i = 0; i < 3; i++) {
	var a = function(n){
				setTimeout(
					function(){
						alert(n)
					},1000)
			}
	a(i);
}*/
/*
function outer(){
	var n=1;
	var inner =function(){
		console.log(n++);
	}
	return inner;
}
var inn = outer();
inn();
inn();
inn();
*/
/*
var arr=[];
var i=0;
var input;
for(;(input=prompt())!="exit";i++){
	arr[i]=input;
}
console.log(arr);	*/
/*
for (var i = 0,a=0; i <3,a<4; i++,a++) {
	console.log(a,i)
}
var a=[];*/
/*
function fun(arr){
	var max;
	for(var b =0;b<arr.length-1;b++){
		for (var i = 0; i < arr.length-1-b; i++) {
			if(arr[i]>arr[i+1]){
				max=arr[i];
				arr[i]=arr[i+1];
				arr[i+1]=max;
			}
		}
	}
}
var arr =[10,4,3,19,5,6,10];
fun(arr);
console.log(arr);
*/
/*
var arr =["1",2,2,3,,"4",,5,4];
var a=4
function fun(arr,a){
	for (var i = 0; i < arr.length; i++) {
		if(arr[i]===a){
			console.log(i);
		}
	}
}
fun(arr,a);
*/
/*
var a = isNaN;
var b = NaN;
console.log(a+b);*/
/*关联数组
var a=[];
a["ha"]=100;
a["he"]=90;
a["aa"]=22;
console.log(a);*/
// console.log("11"+1-null);
// console.log(1-"2"+11)
/*
var a = [];
var b = false;
console.log(a==b);*/
/*
for (var i = 0; i < 10; i++) {
	var a =[];
	a[i]=function(n){
		console.log(n);
	}
	a[i](i);
}*/

// var arr=[[1,2,3,14,5,3,3],[]];
// var arr1 =[2,4,6]
// var  arrString=arr.toString();
// var arrString = arr.join("");
// var arr2=arr.concat("",arr1,"").join("");//在arr后添加括号内的字符串然后赋值给新的数组；
// var arr2=arr1.slice(-2,5);//如果第一个值是负的话表示倒shu
// console.log(arr1);
// var arr2 = arr.splice(1,4,"2");
// var arr2 = arr.indexOf(3,3);
// var arr2 = arr.sort();
// var  arr2 = arr.push(234);
// var  arr2 = arr.pop();
// var  arr2 = arr.unshift(0);
// var  arr2 = arr.shift();
// console.log(arr[1][10]);
/*
function aa(n){
	var a=[];
	for (var i = 0; n>0; i++) {
		a[i] =n%2;
		n=parseInt(n/2);
	}	
	a.reverse("");
	console.log(a.join(''));
}
aa(12);*/
/*
var aa = [[1,2,3],[1,3,,4],[1,42,42,42,2,4]]
for (var i = 0; i < aa.length; i++) {
	for (var a = 0; a < aa[i].length; a++) {
		console.log(aa[i][a])
	}
}*/
// var str="aBcad"
// console.log(str.slice(-4));

// var youxiang  ="no zuo no die";
// var i = youxiang.indexOf("@");
// console.log(youxiang.charCodeAt(1));
// console.log(youxiang.slice(i+1)); 
// console.log(youxiang.substring(i+1))
// console.log(youxiang.substr(i+1));
/*
var a =youxiang.split(" ");
var b=[];
for (var i = 0; i < a.length; i++) {
		b[i] =a[i].charAt(0).toUpperCase();
	for (var c = 1; c < a[i].length; c++) {
		b[i] +=a[i].charAt(c)
	}	
}
console.log(b);	

console.log(youxiang.split("").reverse().join(""));
*/
// console.log(youxiang.replace("no","can"));
// var a =youxiang.split(" ");
// a.splice(2,1,"N")
// console.log(Math.pow(2,3));;
// var arr=[1,3,3,32,1]
// console.log(Math.min.apply(Math,arr));
// console.log(Math.random());
// var aa = new Date();
// console.log(aa.getMonth());
// console.log(aa.getDay());
// console.log(aa.getFullYear());
// console.log(aa.getDate());
// console.log(aa.getHours());
// console.log(aa.getMinutes());
// console.log(aa.getSeconds());
// console.log(window.location);
// console.log(window);
// console.log(location);
// console.log(screen);
// console.log(event);
// console.log(history);
// console.log(navigator);
// console.log(document);

// console.log(window.innerHeight);
// console.log(screen.availHeight);
// console.log(window.innerWidth);
// console.log(location.href);
// console.log(location.pathname);
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}
function startMove(obj,json){
	obj.timmer=setInterval(function(){
		for(attr in json){
			var iCur= parseInt(getStyle(obj,attr));
			document.title=iCur;
			var speed = (json[attr]-iCur)/8;
			console.log(speed);
			speed>0?speed=Math.ceil(speed):speed=Math.floor(speed);
			console.log(speed);
			if (iCur == json[attr]) {
				clearInterval(obj.timmer);
				console.log("success");
			}else{
				obj.style[attr]=(iCur+speed)+"px";
			}
		}
	},30)
}
for (var i = 0; i < Things.length; i++) {
	Things[i]
}