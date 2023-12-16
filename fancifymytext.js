function handleClick() {
  var txt = document.getElementById("text");

  // Change the font size to 24pt
  txt.style.fontSize = "24pt";
}
function handleRadioChange() {
  var fancyShmancyRadio = document.getElementById("fancyShmancyRadio");
  var boringBettyRadio = document.getElementById("boringBettyRadio");
  var textarea = document.getElementById("text");

  if (fancyShmancyRadio.checked) {
    alert("FancyShmancy is selected");
    textarea.style.fontWeight = "bold";
    textarea.style.textDecoration = "underline";
    textarea.style.color = "blue";
 
  
  } else if (boringBettyRadio.checked) {
    alert("BoringBetty is selected");
    textarea.style.fontWeight = "normal";
    textarea.style.textDecoration = "none";
    textarea.style.color = "black";
  }


  
}
