let count = 0
slider = document.querySelector(".slide")

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
    console.log(count)
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