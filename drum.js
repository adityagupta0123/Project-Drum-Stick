


var numberOfDrum = document.querySelectorAll(".drum").length;

for( var i= 0; i < numberOfDrum; i++){

    // document.querySelectorAll(".dum").addEventLiterial("click",function);
    // function drumset() {
    // }  or we can write

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var buttonInnerHtml = this.innerHTML;

       makeSound(buttonInnerHtml);

       activeAnimation(buttonInnerHtml);


    })


}


document.addEventListener("keypress" , function(event){

    makeSound(event.key);

    activeAnimation(event.key);
})


function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("./tom-1.mp3");
            tom1.play(); 

            break;
         
        case "a":
            var tom2 = new Audio("./tom-2.mp3");
            tom2.play(); 
                           
            break;
            
        case "s":
           var tom3 = new Audio("./tom-3.mp3");
           tom3.play(); 
                           
           break;    
    
        case "d":
            var tom4 = new Audio("./tom-4.mp3");
            tom4.play(); 
                           
            break;
            
        case "j":
            var snare = new Audio("./snare.mp3");
            snare.play(); 
                           
            break;

        case "k":
            var snare = new Audio("./crash.mp3");
            snare.play(); 
                           
            break;      
            
        case "l":
            var kick = new Audio("./kick-bass.mp3");
            kick.play();
                           
            break;  

        default: console.log("innerHTML");
            break;
    }
    
}

function activeAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        
        activeButton.classList.remove("pressed");
    } , 100)

}








