window.onload = hideIcons(0);
window.onresize = hideIcons(0);
window.onresize = width;

function width() {
    let a = window.innerWidth;
    return a;
}

function showIcons(y) {
    if (width() >= 480) {
        document.querySelector(".tel").style.left = "5px";
        document.querySelector(".mail").style.left = "10px";
        document.querySelector(".viber").style.left = "15px";
        document.querySelector(".linkedin").style.left = "20px";
        hideIcons(y);
    }
}

function hideIcons(x) {
    setTimeout(() => {
        document.querySelector(".tel").style.left = "-150px";
        document.querySelector(".mail").style.left = "-160px";
        document.querySelector(".viber").style.left = "-170px";
        document.querySelector(".linkedin").style.left = "-230px";
    }, x);
}


let about = document.querySelector("#about");
let edu = document.querySelector("#education");
let exp = document.querySelector("#experience");
let skill = document.querySelector("#skills");

function myFunction(x) {
    let a = x;
    if (a == 1) {
        clear();
        document.querySelector('.section').appendChild(about);
        about.style.display = 'block';
    }
    if (a == 2) {
        clear();
        document.querySelector('.section').appendChild(edu);
        edu.style.display = 'block';
    }
    if (a == 3) {
        clear();
        document.querySelector('.section').appendChild(exp);
        exp.style.display = 'block';
    }
    if (a == 4) {
        clear();
        document.querySelector('.section').appendChild(skill);
        skill.style.display = 'block';
    }
}

function clear() {
    about.style.display = 'none'; 
    edu.style.display = 'none'; 
    exp.style.display = 'none'; 
    skill.style.display = 'none';    
}



