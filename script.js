var count=document.getElementById("span");
var shape=document.getElementById("box");
var clic=document.getElementById("cli");
var reset=document.getElementById("rest");
var redd=document.getElementById("red");
var bluee=document.getElementById("blue");

console.log(typeof(count))


clic.onclick=function(){
  
    count.textContent++
    if (count.textContent==5){
        shape.style.height="200px"
        shape.style.widht="100px"
        shape.style.borderRadius="0px"
    }
    else if(count.textContent%2!==0){
        
    shape.style.height="200px";
    shape.style.width="200px";
    shape.style.backgroundColor="black";
    }
    else{
        
    shape.style.height="250px";
    shape.style.width="500px";
    shape.style.backgroundColor="black";
    }
}
   
reset.onclick=function(){
    count.textContent=0;
}
redd.onclick=function(){
    shape.style.backgroundColor="red"
}
,bluee.onclick=function(){
    shape.style.backgroundColor="blue"
}