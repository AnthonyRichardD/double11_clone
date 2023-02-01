let count = 0
let slider = document.querySelector(".slide")
let arrLeft = document.querySelector(".arr-left-btn")
let arrRight = document.querySelector(".arr-right-btn")
function controleDoSlider(comando){
    if(comando === "proximo"){
        if(count <3){
            count++
            
        }
    }
    else{
        if(count > 0){
            count--
        }
    }
    if(count == 0){
        arrLeft.style.color = "gray"
    }else{
        arrLeft.style.color = "#f2f2f2"
    }
    
    if(count == 3){
        arrRight.style.color = "gray"
    }else{
        arrRight.style.color = "#f2f2f2"
    }
    moveSlider()
}
function moveSlider(){
    if(count == 0){
        slider.style.marginLeft = 0 + "%"
    }
    else if(count == 1){
        slider.style.marginLeft = -25 + "%"
    }
    else if(count == 2){
        slider.style.marginLeft = -50 +"%"
    }
    else if(count == 3){
        slider.style.marginLeft = -75 +"%"
    }
}