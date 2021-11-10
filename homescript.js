const buybtn = document.getElementById("buy-now-btn");
const btns = document.querySelectorAll(".btn");


console.log(btns);
btns[0].addEventListener("click" ,() => {
    console.log(btns);
    buybtn.classList.add("active");
});
