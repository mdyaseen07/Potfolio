let doorImage1 = document.getElementById('door1');
let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let doorImage2 = document.getElementById('door2');
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg'
let doorImage3 = document.getElementById('door3');
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg'
const startButton = document.getElementById('start');
let openDoor1;
let openDoor2;
let openDoor3;
let numClosedDoors = 3;
let currentlyPlaying = true;

doorImage1.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)){
       doorImage1.src = openDoor1;
       playDoor(doorImage1);
   }   
}


doorImage2.onclick = () => {
     if(currentlyPlaying && !isClicked(doorImage2)){
       doorImage2.src = openDoor2;
       playDoor(doorImage2);
    }
}

doorImage3.onclick = () => {
     if(currentlyPlaying && !isClicked(doorImage3)){
       doorImage3.src = openDoor3;
       playDoor(doorImage3);
   } 
}

startButton.onclick = () => {
  if(currentlyPlaying === false){
  startRound();
}
}

let randomChoreDoorGenerator = () => {
  
  const choreDoor = Math.floor(Math.random()*numClosedDoors);
  if( choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;

  }else if (choreDoor === 1){
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;

  }else {
    openDoor3 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }
};

let isBot = (door) => {
  if(door.src === botDoorPath) {
    return true;
  } else {
    return false;
}
}

let isClicked = (door) => {
   if (door.src === closedDoorPath) {
     return false;
   } else {
      return true;
  }
}

const gameOver = (status) => {
  if (status === 'win') {
  startButton.innerHTML = 'You win! Play again?';
} else {
      startButton.innerHTML = 'Game Over! PLAY AGAIN';
}
currentlyPlaying = false;
}

let playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
      gameOver('win');
    } else if (isBot(door)){
      gameOver();
    } 
}

let startRound = () => {
 numClosedDoors = 3;
 doorImage1.src = closedDoorPath; 
 doorImage2.src = closedDoorPath; 
 doorImage3.src = closedDoorPath; 
 startButton.innerHTML = 'Good Luck!'
 currentlyPlaying = true;
 randomChoreDoorGenerator();
}

startRound();











