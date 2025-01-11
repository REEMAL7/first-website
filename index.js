let counter = document.getElementById("element");
let incresebtn = document.getElementById("incrementbtn");
let savebtn = document.getElementById("savebtn");
let resulttag = document.getElementById("resulttag");
let count = 0;
incresebtn.onclick = function () {
    count += 1;
    counter.textContent = count;
};

savebtn.onclick = function () {
    let result = count + " - ";
    resulttag.textContent += result;
    count = 0;
    counter.textContent = 0;
};
