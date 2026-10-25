const button=document.querySelector(".button");
const box=document.querySelectorAll(".box");
let index=1;
button.addEventListener("click",(event)=>{
    const IsEmpty=Array.from(box).filter((b)=>
!b.hasChildNodes())
if(IsEmpty.length==0)
{
    alert("finish!!!")
    return;
}  
const box2=document.createElement('div');
box2.style.width="50px";
box2.style.height="50px";
box2.style.backgroundColor="red";
box2.textContent=index++;
box2.style.textAlign="center";
box2.style.justifyContent="center";
const num=Math.floor(Math.random()*box.length);
box[num].appendChild(box2);
})
