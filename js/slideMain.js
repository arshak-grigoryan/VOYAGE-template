let counter = 0;

function slideMainNext(){
    let slideshowContainer = document.getElementsByClassName('slideshow-container')[0]
    let leng = slideshowContainer.children.length
    if(counter >= 0 && counter < leng-1){
        counter++
        slideshowContainer.style.transform = `translateX(-${counter}00%)`
    } else{
        counter = leng-1
    }
}

function slideMainPrev(){
    let slideshowContainer = document.getElementsByClassName('slideshow-container')[0]
    let leng = slideshowContainer.children.length
    if(counter > 0 && counter < leng){
        counter--
        slideshowContainer.style.transform = `translateX(-${counter}00%)`
    } else{
        counter = 0
    }
}

export { slideMainPrev, slideMainNext }
