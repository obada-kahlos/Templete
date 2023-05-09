let nums=document.querySelectorAll(".stats .number");
let statsNums= document.querySelector(".stats");
let started = false;

window.onscroll=function(){

  if(window.scrollY>=statsNums.offsetTop) {

    if(!started) {
      nums.forEach((num) => counter(num));
    }
    started=true;

  }
  
};




function counter(el) {
  let goal=el.dataset.goal;

  console.log(goal)
  let count=setInterval(() => {
    el.textContent++;
    if(el.textContent==goal) {
      clearInterval(count);
    }

  } ,2000/goal)

}



// console.log(goal)
