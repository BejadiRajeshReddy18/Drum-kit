// document.querySelectorAll("button").addEventListener("click",handleClick);

// function handleClick(){
//     alert("I'm clicked");
// }



// var numberOfDrums = document.querySelectorAll(".drum").length

// for(i=0;i<numberOfDrums;i++){

//     document.querySelectorAll("button")[i].addEventListener("click",function (){
//         alert("I'm clicked");
//     });

// }

//Detecting button press

var numberOfDrums = document.querySelectorAll(".drum").length

for (i = 0; i < numberOfDrums; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
       
    });

}


// detecting keyboardpress
// event paramter let us to  tap into the event which triggered the event listener
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})



function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play()
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play()
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play()
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play()
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play()
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play()
            break;
        case "l":
            var audio = new Audio('sounds/kick.mp3');
            audio.play()
            break;
        default:
            console.log(buttonInnerHtml);
            break;
    }
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");
    setTimeout(function (){
        activeButton.classList.remove("pressed");
    },100)
}



// var audio = new Audio('sounds/tom-1.mp3');
//         audio.play()