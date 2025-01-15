window.onresize = width;

function width() {
    let a = window.innerWidth;
    return a;
}


function showAbout(){
  clearScreen();
  document.querySelector('.about').style.display = 'block';
  document.querySelector('.about').style.animation = 'moving-top 1.75s linear forwards';
  document.querySelector('.img').style.animation = 'img-show 2.25s linear forwards';
}

function showEducation(){
  clearScreen();
  document.querySelector('.education').style.display = 'block';
  document.querySelector('.timeline').style.animation = 'slide-in2 2s linear forwards';
  document.querySelector('.ev1').style.animation = 'slide-in 1.75s linear forwards';
  document.querySelector('.ev2').style.animation = 'slide-in1 1.75s linear forwards';
  document.querySelector('.ev3').style.animation = 'slide-in 1.75s linear forwards';
}

function showExperience() {
  clearScreen();
  document.querySelector('.experience').style.display = 'flex';
  document.querySelector('.experience').style.animation = 'apear 2.5s ease-in-out forwards';
}

function showSkills() {
  clearScreen();
  document.querySelector('.skills').style.display = 'block';
  let x = document.querySelectorAll(".move");
  for (let i = 0; i < x.length; i++) {
    x[i].style.animation = 'slide-bottom 3s ease-in-out forwards';
  }
}

function clearScreen(){
  document.querySelector('.typewriter').style.display = 'none';
  document.querySelector('.about').style.display = 'none';
  document.querySelector('.education').style.display = 'none';
  document.querySelector('.experience').style.display = 'none';
  document.querySelector('.skills').style.display = 'none';
}

document.querySelector(".navbar-toggler").addEventListener('click', () => {
  document.querySelector('.typewriter').style.display = 'none';
  if(document.querySelector('.navbar-collapse').style.height >= '10px'){
    document.querySelector('.navbar').style.marginBottom = '320px';
  } else{
    document.querySelector('.navbar').style.marginBottom = '0px';
  }
});