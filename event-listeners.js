const navContainer = document.querySelector('.nav');

navContainer.addEventListener('mouseover', function(element) {
  element.target.style.color = '#FFFAFA';
  element.target.style.backgroundColor = "#696969";
});

navContainer.addEventListener('mouseout', function(element) {
  element.target.style.color = '#FF7F50';
  element.target.style.backgroundColor = "#242943"
  
});

const header = document.querySelector('.intro');

const leftBtn = document.querySelector('.left-button');

leftBtn.addEventListener('click', function (element) {
  element.target.style.color = '#FF7F50';
  element.target.style.border.display = 'block';
});

const rightBtn = document.querySelector('.right-button');

rightBtn.addEventListener('click', function (element) {
  element.target.style.color = '#FF7F50';
  element.target.style.border.display = 'block';
});

const divContainer = document.querySelector('.container');
divContainer.addEventListener('mouseenter', function(element) {
  console.log(`Your mouse position - X: ${element.offsetX}, Y: ${element.offsetY}`);
})