import { showSearchInput, showHiddenMenu, toggleMenuItem } from './js/header.js';
import { slideMainPrev, slideMainNext } from './js/slideMain.js';
import { runSlide } from './js/slideOffers.js';

document.querySelector('.menu-burger').addEventListener('click', showHiddenMenu)
let link = document.querySelectorAll('.destination  a')
for(let val of link){
    val.addEventListener('click', toggleMenuItem)
}
document.querySelector('#form-search > img').addEventListener('click', showSearchInput)
document.querySelector('.previous-slide-btn').addEventListener('click', slideMainPrev)
document.querySelector('.next-slide-btn').addEventListener('click', slideMainNext)

runSlide()
