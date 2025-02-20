function invertedMountain(n) {
  let pattern = "";
  for (let i = n; i > 0; i--) {
    for(let j=0;j<i;j++){
      pattern += "*"
    }
    if(i!=1){
      pattern +="\n";
    }
  }
  return pattern;
}
function shinyDiamondRug(n) {
  let pattern="";
  for(let i=0; i<n;i++){
    for(let j=0;j<((2*i)-1);j++){
      pattern += "*";
    }
    
  }
  return pattern;
}
function writeLoveLetter(message, name) {
  // Add name at the start of the message and return updated array
  
  message.unshift(name);
  
  return message;
}

console.log(writeLoveLetter(["I","Love","You"],"Aarav" ));

