
let i = 0;
let n = 1;
const btn = document.getElementById('btn');
const plus = document.getElementById('push');
const des = document.getElementById('des');
const num = document.getElementById('num');
const reset = document.getElementById('reset');


btn.addEventListener('click',() =>{
    i = i+n;
    num.textContent = i;
})

plus.addEventListener('click', () =>{
    n = n*2;
    btn.textContent = `+${n}`;
})

des.addEventListener('click', () =>{
    n=n/2;
    btn.textContent = `+${n}`;
})

reset.addEventListener('click', ()=>{
    i = 0;
    n = +1;
    num.textContent = n;
    btn.textContent = `+${n}`;
})
