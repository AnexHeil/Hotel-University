let imgs = document.querySelectorAll('.slider-img');

setInterval(changeImg, 8000);

function changeImg() {
    let index;
    for(let i = 0; i < imgs.length; i++){
        if(!imgs[i].classList.contains('unshown')){
            index = i;
            break;
        }
    }
    imgs[index].classList.add('unshown');
    if(index == imgs.length -1){
        imgs[0].classList.remove('unshown');
    }
    else
        imgs[index+1].classList.remove('unshown');
        
}