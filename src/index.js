import Splide from "@splidejs/splide";
import "bootstrap/dist/css/bootstrap.min.css";
import "@splidejs/splide/dist/css/splide.min.css";
import "./main.css";
import img1 from "./assets/images/coffe1.jpg";
import img2 from "./assets/images/coffe2.jpg";
import img3 from "./assets/images/coffe3.jpg";
import img4 from "./assets/images/coffe4.jpg";

// new Splide(".splide").mount();
document.addEventListener("DOMContentLoaded", () => {
  new Splide(".splide").mount();
});

let srcImages = [img1, img2, img3, img4];

let srcCoffees = srcImages.map((img) => {
  let srcCoffee = document.createElement("img");
  srcCoffee.src = img;
  srcCoffee.style.height = "600px";
  return srcCoffee;
});

let myCoffee1 = document.getElementById("coffee1");
myCoffee1.appendChild(srcCoffees[0]);
let myCoffee2 = document.getElementById("coffee2");
myCoffee2.appendChild(srcCoffees[1]);
let myCoffee3 = document.getElementById("coffee3");
myCoffee3.appendChild(srcCoffees[2]);
let myCoffee4 = document.getElementById("coffee4");

myCoffee4.appendChild(srcCoffees[3]);
