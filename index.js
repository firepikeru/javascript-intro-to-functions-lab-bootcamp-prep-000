function shout (string){
  return string.toUpperCase();
}

function whisper (string){
  return string.toLowerCase();
}

function logShout(string) {
 console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string == string.toLowerCase()){
    return("I can\'t hear you!");
  }
<<<<<<< HEAD
  else if (string == string.toUpperCase()){
    return("YES INDEED!");
  }
  else {
    return("I love you, too.");
=======
  else if (string ==string.toUpperCase()){
    console.log("YES, INDEED!");
  }
  else {
  console.log("I love you, too.");
>>>>>>> 3e08ff984dcac629127646c9b47d7a805d98cc78
  }
}
  