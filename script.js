const next = document.getElementById("Next")
const prev = document.getElementById("Prev")
const progress = document.getElementById("progress")
const circles = document.querySelectorAll(".circle")
let currentActive = 1
next.addEventListener('click',()=>{
    currentActive++
    if( currentActive>circles.length){
        currentActive=circles.length
    }
    update()
})
prev.addEventListener('click',()=>{
    currentActive--
    if(currentActive<1){
        currentActive=1
    }
    update()
    circles[currentActive].classList.remove('active')
    progress.style.width=(((currentActive-1)/3)*100) +'%'
})
function update(){
    hold = currentActive-1
    for(let i=0;i<=4;i++){
        if(i<currentActive){
            circles[i].classList.add('active')
        }
    }
    progress.style.width=((hold/3)*100) +'%'
    if(currentActive!==1){
        prev.disabled =false
    }else{
        prev.disabled =true
    }
    if(currentActive===4){
        next.disabled=true
    }else{
        next.disabled=false
    }

}