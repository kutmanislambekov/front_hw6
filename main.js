
let time = document.getElementById('time');
let count = document.getElementById('count');
let btn = document.getElementById('btn');
let refresh = document.getElementById('refresh');
let countPerSecond = document.getElementById('count-per-second');

let timeout;
let interval;
let i = 0;
let g = time.value;
let timeValue = g;
btn.addEventListener('click', () =>{
    if(i === 1){
        timeout = setTimeout(() => {
            btn.disabled = true;
            clearInterval(interval);
            countPerSecond.textContent = i/timeValue;
        }, time.value * 1000);
        interval = setInterval(() => {
            g--;
            --time.value;
        }, 1000);
    }

    i++
    count.textContent = i
})

refresh.onclick = () =>{
    clearInterval(interval);
    clearTimeout(timeout)
    i = 0;
    g = 10;
    time.value = g;
    count.textContent = i;
    btn.disabled = false;
};