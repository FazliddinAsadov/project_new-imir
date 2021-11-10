const menLinks = document.querySelector(".brendLink");
const womenLinks = document.querySelector(".popularLink");
const kidsLinks = document.querySelector(".womenLink");

const mains = document.getElementById("main");
const qism2 = document.getElementById("qism2");
const kids = document.getElementById("kids");

menLinks.addEventListener("click",()  => {
    mains.scrollIntoView({behavior: "smooth"});
});



womenLinks.addEventListener("click",()  => {
    qism2.scrollIntoView({behavior: "smooth"});
});

kidsLinks.addEventListener("click",()  => {
    kids.scrollIntoView({behavior: "smooth"});
});





const buybtn = document.getElementById("buy-now-btn");
const btns = document.querySelectorAll(".btn");
const actives = document.querySelector(".active");
const buy_back = document.getElementById("back-out");


function Open () {
    buybtn.classList.add("active");
}

buy_back.addEventListener("click", () => {
    buybtn.classList.remove("active");
})


        
        btns[1].addEventListener("click", Open);
        btns[2].addEventListener("click", Open);
        btns[3].addEventListener("click", Open);
        btns[4].addEventListener("click", Open);
        btns[5].addEventListener("click", Open);
        btns[6].addEventListener("click", Open);
        btns[7].addEventListener("click", Open);
        btns[8].addEventListener("click", Open);

      


const iconc = document.getElementById("nav-menu");
const ul = document.querySelector(".ul");


iconc.addEventListener("click", () => {
    ul.classList.toggle("active");
});




const acciconc = document.getElementById("ac-iconc");
const accaunts = document.getElementById("accaunt");
const backs = document.getElementById("back");
const moon0 = document.getElementById("moon");
const bodys = document.getElementById("body");







acciconc.addEventListener("click", () =>{
    accaunts.classList.add("active");

});

backs.addEventListener("click", () =>{
    accaunts.classList.remove("active");
});

moon0.addEventListener("click", () =>{
    bodys.classList.remove("active");
})








