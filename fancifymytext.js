function handleClick() {
  var txt = document.getElementById("text");

  // Change the font size to 24pt
  txt.style.fontSize = "24pt";
}
function handleRadioChange() {
  var fancyShmancyRadio = document.getElementById("fancyShmancyRadio");
  var boringBettyRadio = document.getElementById("boringBettyRadio");
  var txt = document.getElementById("text");

  if (fancyShmancyRadio.checked) {
    alert("FancyShmancy is selected");
    txt.style.fontWeight = "bold";
    txt.style.textDecoration = "underline";
    txt.style.color = "blue";
 
  
  } else if (boringBettyRadio.checked) {
    alert("BoringBetty is selected");
    txt.style.fontWeight = "normal";
    txt.style.textDecoration = "none";
    txt.style.color = "black";
  }
}

function handleUppercase() {
  var txt = document.getElementById("text");
  var upperCase = txt.value.toUpperCase();
  var sentences = upperCase.split('.'); 
  for (var i = 0; i < sentences.length; i++) {
    var words = sentences[i].trim().split(' '); 
    if (words.length > 0) {
      words[words.length - 1] += '-Moo'; // Add "-Moo" to the last word
      sentences[i] = words.join(' '); // Join words back into a sentence
    }
  }
  txt.value = sentences.join('. ');
}
