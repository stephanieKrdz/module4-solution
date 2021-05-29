
(function () {
var names = ["Monica", "jonathan", "Areli", "karla", 
"Giovanny", "Joel","Stephanie", "Larry", "Paula", "John", "Jim"];

for (var i = 0; i < names.length; i++) {

  var fLetter = names[i].charAt(0).toLowerCase();
  
   if (fLetter=='j') {
     bye.speak(names[i]);
    } else {
     hello.speak(names[i]);
    }
}
})();