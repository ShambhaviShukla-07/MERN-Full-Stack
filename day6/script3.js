// DOM Manipulation

var f=document.getElementById("first");
console.log(f);
f.innerHTML="Hii";

let para=document.getElementsByTagName("p")
console.log(para)

console.log(para.length)

// for(let i=0;i<=para.length;i++){
//     para[i].innerHTML=i+" This is para";
// }

let d=document.getElementsByClassName("second");
console.log(d)
console.log(d[0])
d[0].innerHTML="Accessing elements using class";

let e=document.querySelector(".second#test");
console.log(e)

let g=document.querySelector("div.second.box");
console.log(g)

let h=document.querySelectorAll(".second");
console.log(h);
console.log(h[2])

let j = document.querySelectorAll("p")
for(i=0;i<j.length;i++)
    j[i].innerHTML="Hey "+i;