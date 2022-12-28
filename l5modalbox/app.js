var getmodal = document.getElementById("signupmodal");
var getbtnsignup = document.getElementById("btn-signup");
var getbtnclose = document.querySelector(".btn-close");
var getbtnfullscreen = document.getElementById("btn-fullscreen");
var getbtnclosescreen = document.getElementById("btn-closescreen");
var getform = document.querySelector(".form");
var screen = localStorage.getItem('fullscreen');

if(screen){
    fullscreencheck();
}

getbtnsignup.addEventListener('click',function(){
    getmodal.style.display = "block";
});

getbtnclose.addEventListener("click",function(){
    getmodal.style.display = "none";
});

window.onclick = function(e){
    // console.log(e.target);

    if(e.target === getmodal){
        getmodal.style.display = "none";
    }
}

var getde = document.documentElement;
// console.log(getde);

getbtnfullscreen.addEventListener("click",function(){

    localStorage.setItem('fullscreen','open');

    fullscreencheck();
    
    getbtnclosescreen.style.display = "inline-block";

});


getbtnclosescreen.addEventListener("click",function(){
    
    localStorage.removeItem('fullscreen');

    fullscreencheck();
 
    getbtnclosescreen.style.display = "none";

});



function fullscreencheck(){

    let getscreen = localStorage.getItem('fullscreen');

    if(getscreen === 'open'){

        if(getde.requestFullscreen){
            getde.requestFullscreen();
        }else if(getde.msRequestFullscreen){
            getde.msRequestFullscreen();
        }else if(getde.webkitRequestFullscreen){
            getde.webkitRequestFullscreen();
        }

    }else{
        
        if(document.exitFullscreen){
            document.exitFullscreen();
        }else if(document.msExitFullscreen){
            document.msExitFullscreen();
        }else if(document.webkitExitFullscreen){
            document.webkitExitFullscreen();
        }
    }
}


getform.addEventListener('submit', (e) => {
    e.preventDefault();
});





