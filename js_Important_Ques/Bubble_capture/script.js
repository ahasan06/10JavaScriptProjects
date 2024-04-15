
const btn = document.getElementById("button");
const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const form = document.getElementById("form");


grandparent.addEventListener("click",listener);
parent.addEventListener("click",listener,{capture:true});
child.addEventListener("click",listener,{capture:true});
form.addEventListener("click",listener);
btn.addEventListener("click",listener);





function listener(e){
    console.log(this.id);
}
