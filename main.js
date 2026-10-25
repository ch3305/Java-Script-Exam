const button=document.querySelector(".button");
const box=document.querySelectorAll(".box");


button.addEventListener("click", (event) => {
    const IsEmpty = Array.from(box).filter((b) => !b.hasChildNodes());
    if (IsEmpty.length == 0) {
        alert("finish!!!??");
    }

    const box2 = document.createElement('div');
    box2.style.width = "30px";
    box2.style.height = "30px";
    box2.style.backgroundColor = "white";
    box2.textContent = index++;
    box2.style.textAlign = "center";
    box2.style.justifyContent = "center";
    const num = Math.floor(Math.random() * box.length);
    box[num].appendChild(box2);
});


