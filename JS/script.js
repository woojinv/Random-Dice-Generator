const imgMsgColor = {
  1:['https://i.imgur.com/VjeQG20.png', "You got a one, that's so fun", "red"],
  2:['https://i.imgur.com/5Yjwn6e.png', "You got MewTwo!", "orange"],
  3:['https://i.imgur.com/FOqNrQT.png', "Three thrice mice rice.", "yellow"],
  4:['https://i.imgur.com/5xr2QJF.png', "Four!!", "green"],
  5:['https://i.imgur.com/uaESiMS.png', "Hive mind rhymes with mind five", "blue"],
  6:['https://i.imgur.com/mPaO13v.png', "Sexy sixes", "violet"]
}

const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const rollDice = () => {
  let randomlyGeneratedNum = generateRandomNum(1, 6);
  const image = document.getElementById("myImg");
  const message = document.getElementById("result");

  //Generate image:
  let urlOfImg = imgMsgColor[randomlyGeneratedNum][0];
  image.setAttribute('src', urlOfImg);
  image.setAttribute('transition-property', 'margin-right')
  
  //Image animation:
  image.classList.toggle('rotate');

  //Generate message:
  let uniqueMessage = imgMsgColor[randomlyGeneratedNum][1];
  message.innerHTML = uniqueMessage;

  //Color message:
  let colorOfMessage = imgMsgColor[randomlyGeneratedNum][2];
  message.style.color = colorOfMessage
};
