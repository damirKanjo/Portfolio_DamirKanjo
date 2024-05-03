window.onload = hideIcons(0);
window.onload = mobDesk();
window.onresize = hideIcons(0);
window.onresize = width;


function mobDesk(){
    let details = navigator.userAgent;
      
    /* Creating a regular expression
      containing some mobile devices keywords
      to search it in details string*/
    let regexp = /android|iphone|kindle|ipad/i;
      
    /* Using test() method to search regexp in details
      it returns boolean value*/
    let isMobileDevice = regexp.test(details);
      
    if (isMobileDevice) {
        document.querySelector("#message").style.paddingTop = "150px";
    } else {
        document.querySelector("#message").style.paddingTop = "0px";
    }
}

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
        document.querySelector(".tel").style.left = "-100px";
        document.querySelector(".mail").style.left = "-150px";
        document.querySelector(".viber").style.left = "-200px";
        document.querySelector(".linkedin").style.left = "-250px";
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


const buttons = document.querySelectorAll('.close');
buttons.forEach(button => {
    button.addEventListener('click', clear);
});


function clear() {
    about.style.display = 'none'; 
    edu.style.display = 'none'; 
    exp.style.display = 'none'; 
    skill.style.display = 'none';    
}
