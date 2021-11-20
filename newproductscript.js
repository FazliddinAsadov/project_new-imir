const menLinks = document.querySelector(".menLink");
const womenLinks = document.querySelector(".womenLink");
const kidsLinks = document.querySelector(".kidsLink");

const mens = document.getElementById("men");
const qism2 = document.getElementById("qism2");
const kids = document.getElementById("kids");

menLinks.addEventListener("click", () => {
  mens.scrollIntoView({ behavior: "smooth" });
});

womenLinks.addEventListener("click", () => {
  qism2.scrollIntoView({ behavior: "smooth" });
});

kidsLinks.addEventListener("click", () => {
  kids.scrollIntoView({ behavior: "smooth" });
});

const iconc = document.getElementById("nav-menu");
const ul = document.querySelector(".ul");

function menu() {
  ul.classList.toggle("active");
}

// iconc.addEventListener("click", () => {
//     ul.classList.toggle("active");
// });

const acciconc = document.getElementById("ac-iconc");
const accaunts = document.getElementById("accaunt");
const backs = document.getElementById("back");

acciconc.addEventListener("click", () => {
  accaunts.classList.add("active");
});

backs.addEventListener("click", () => {
  accaunts.classList.remove("active");
});

//? scroll part starter

const boxes = document.querySelectorAll(".box1");
window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerButtom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerButtom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
//? scroll part end
