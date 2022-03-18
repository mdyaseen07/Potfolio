let btn = document.getElementById('btn');
let readMore = document.getElementById('readMore')

let increaseWidth = () => {
    btn.style.width = '200px';
}
let originalWidth = () => {
    btn.style.width = '';
}
btn.addEventListener('mouseover', increaseWidth);
btn.addEventListener('mouseout', originalWidth);

let changeText = () => {
    readMore.innerHTML = 'Visit';
    readMore.style.backgroundColor = 'black';
}
let OriginalText = () => {
    readMore.innerHTML = 'Read More';
    readMore.style.backgroundColor = '';
}

readMore.addEventListener('mouseover', changeText);
readMore.addEventListener('mouseout', OriginalText);


function colorValue() {
    return Math.floor(Math.random() * 256);
  }
  
  function colorChange(event){
     let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
     event.target.style.backgroundColor = randomColor;
  }
  btn.addEventListener('click', colorChange);