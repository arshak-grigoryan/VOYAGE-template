let counter = 0;
let inter
let waitBackMove = true

function slideMove(){
    // let counter = 0;
    const widthItem = document.querySelector('.slide-grid').offsetWidth + 14 ;
    let slide = document.querySelector('.slider-grids');
    let widthSlide = slide.scrollWidth;
    let widthWindow = window.innerWidth;
    counter++
    // debugger
    if(widthSlide > widthWindow){
        // debugger
        if(waitBackMove && widthSlide > (widthWindow + widthItem * (counter-1))){
            // debugger
            if((widthSlide - (widthWindow + widthItem*(counter-1))) >= widthItem){
                // debugger
                slide.style.transform = `translateX(-${widthItem*counter}px)`
            } else{
                // debugger
                // scrollbar width by default = 16 px and slideItem margin = 14px
                slide.style.transform = `translateX(-${widthSlide - widthWindow + 16 + 14}px)`
                waitBackMove = false
            }
        } else{
                counter -= 2

            if(counter >= 0){
                // debugger
                slide.style.transform = `translateX(-${widthItem*counter}px)`        
            } else{
                waitBackMove = true
            }
        }
    } else{
        // debugger
        clearInterval(inter)
    }
}
function runSlide(){
    inter = setInterval(slideMove, 500);
}
export { runSlide }