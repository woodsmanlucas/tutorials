let faceup = true;

function flipCard() {
  if(faceup){
    document.getElementById("Flashcard").innerHTML = "How to save a life";
    faceup = false;  
  }else{
    document.getElementById("Flashcard").innerHTML = "What is the first album by the Fray";
    faceup = true
  }
}

function giveHint() {
  document.getElementById("hint").innerHTML = "Go to wikipedia and find the band The Fray";
}

