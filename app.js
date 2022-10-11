
//create div with class container
const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);

// const sqr = document.createElement("div");
// sqr.classList.add("square");
// container.appendChild(sqr);
const sqr = [];
for (let i=0; i<256;i++){
  sqr[i] = document.createElement("div");
  sqr[i].classList.add("square");
  container.appendChild(sqr[i]);
}

//permament hover
sqr.forEach((item) => {
  item.addEventListener("mouseover", ()=>{
    item.classList.add("hover-square");
  })

});
