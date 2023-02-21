
//Detecting Button press
var numOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonClickedInnerHTML = this.innerHTML;
        makeSound(buttonClickedInnerHTML);
        buttonAnimation(buttonClickedInnerHTML);
    });
}
document.addEventListener("keydown", function (keyDownEventThatOccurred) {
    //function gets called passing in the event that triggered the keypress
    //and that event contains a property called key (see in log using console.log(keyDownEventThatOccurred))
    //it has a property key that containes the letter which was pressed Ex. key:'d' if d key was pressed 
    // which tells us which keyboard
    //key was pressed
    // console.log(keyDownEventThatOccurred);
    makeSound(keyDownEventThatOccurred.key);
    //the above line logs the key that was pressed

    buttonAnimation(keyDownEventThatOccurred.key);
});

function makeSound(thingThatHapenned) {
    switch (thingThatHapenned) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;
        case "l":
            var kickBass = new Audio("sounds/kick-bass.mp3")
            kickBass.play();
            break;
        default: console.log(buttonClickedInnerHTML);
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    // setTimeout(function, milliseconds, param1, param2, ...)
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}






// document.querySelector("button").addEventListener("click",handleClick)
// function handleClick(){
//     alert("I got clicked")
// }
// THE ABOVE LINE STORES THE CONTENT PRESENT INSIDE THE CLICKED BUTTON

//anonymous function : the above commented lines can also be written as
// document.querySelectorAll(".drum")[i].addEventListener("click",function (){
//     alert("I got clicked")
// what to do when click detected
