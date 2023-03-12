var i = 1 ;

const leftBtn = document.querySelector(".larrow");
leftBtn.addEventListener('click' , leftScroll) ;

function leftScroll(){
    var left = document.querySelector(".m2img");
    left.scrollBy(-1550,0);

    if(i > 1){
        var temp = 'd' + i ;
        document.getElementById(temp).style.opacity = 0.5 ;
        i-- ;
        temp = 'd' + i;
        document.getElementById(temp).style.opacity = 1 ;
    } 
}

const rightBtn = document.querySelector(".rarrow");
rightBtn.addEventListener('click' , rightScroll);

function rightScroll(){
    var right = document.querySelector(".m2img");
    right.scrollBy(1550,0);

    if(i < 4){
        var temp = 'd' + i ;
        document.getElementById(temp).style.opacity = 0.5 ;
        i++ ;
        temp = 'd' + i;
        document.getElementById(temp).style.opacity = 1 ;
    }    
}