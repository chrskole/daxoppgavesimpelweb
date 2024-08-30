function checkOrientation(){
    if (window.innerWidth < window.innerHeight){
        console.log("Jeg er høy!");
    } else {
        console.log("Jeg ligger lavt");
    }
}

window.addEventListener('load', checkOrientation);
window.addEventListener('resize', checkOrientation);
