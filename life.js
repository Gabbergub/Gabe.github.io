// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


var words = {};
words['text'] = ['A Designer', 'An Artist', 'A fusion of both worlds'];

typeText(words['text'][0], 'text');

function typeText(text, elementID, i) {

    if (i == undefined) i = 0;

    if (i < text.length) {
        document.getElementById(elementID).innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, 100, text, elementID, i);
    } else {
        setTimeout(clearText, 2000, text, elementID);
    }

}

function clearText(text, elementID, i) {

    if (i == undefined) i = text.length;

    if (i >= 0) {
        document.getElementById(elementID).innerHTML = text.substring(0, i);
        i--;
        setTimeout(clearText, 100, text, elementID, i);
    } else {
        var wordsArray = words[elementID];
        var currentWord = wordsArray.indexOf(text);
        var index = currentWord + 1;
        if (currentWord == wordsArray.length - 1) index = 0;
        text = wordsArray[index];
        setTimeout(typeText, 2000, text, elementID);
    }

}

/*var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000); // Change image every 2 seconds
}*/