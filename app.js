let side = 16;
let size = 256;
let body;
let container;

const button = document.querySelector("button");
button.addEventListener("click", (e)=> {
   side = prompt("Select Grid Size");
   size = side*side;
   body.removeChild(container);
   canvas();
})
    function canvas(){
  //create div with class container
   body = document.querySelector("body");
   container = document.createElement("div");
  container.classList.add("container");

  body.appendChild(container);

  //create squares inside

  const sqr = [];
  for (let i=0; i<size;i++){
    sqr[i] = document.createElement("div");
    sqr[i].classList.add("square");
    sqr[i].style.width = 800/side+"px";
    sqr[i].style.height = 800/side+"px";
    container.appendChild(sqr[i]);
  }

  //permament hover
  sqr.forEach((item) => {
    item.addEventListener("mouseover", ()=>{
      item.classList.add("hover-square");
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      item.style.backgroundColor = `#${randomColor}`;
    })

  });
}

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  body.removeChild(container);
  canvas();
})


canvas();
