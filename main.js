let printed = 1

function checkOrientation(){
    if (window.innerWidth < window.innerHeight){
        if (printed !== 1)
            console.log("Jeg er høy!"); 
        printed = 1
        
    } else if (printed === 1){
            console.log("Jeg ligger lavt");
            printed = 0
    }
}

window.addEventListener('load', checkOrientation);
window.addEventListener('resize', checkOrientation);