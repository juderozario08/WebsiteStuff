counter = document.getElementById("counter");
entries = document.getElementById("entries");
let count = 0;
function countUp(){
    count += 1;
    counter.textContent = count;
}
function countDown(){
    if (count > 0)
        count -= 1;
    counter.textContent = count;
}

function save(){
    entries.textContent += count + " - ";
    console.log(count);
    count = 0;
    counter.textContent = count;
}

function refresh(){
    count = 0;
    counter.textContent = count;
    entries.textContent = "Previous Entries: ";
}