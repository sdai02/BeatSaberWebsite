let $buy = document.getElementById("buy")
let $panel = document.getElementById("panel");

let $album = document.querySelectorAll(".body .sondtrack .img_album span");
let $btnLeft = document.querySelector(".body .sondtrack .img_album .left button");
let $btnRight = document.querySelector(".body .sondtrack .img_album .right button");


let $album1 = document.querySelectorAll(".body .sondtrack .img_album2 span ");
let $btnLeft1 = document.querySelector(".body .sondtrack .img_album2 .left2 button");
let $btnRight1 = document.querySelector(".body .sondtrack .img_album2 .right2 button");

let $Mpanel = document.getElementById("panel_menu");
let $btnPanel = document.getElementById("btnpanel");


$btnPanel.addEventListener('click', function(){
    $Mpanel.classList.toggle("ON");
});

// buy now btn

let $switch = 1;

$buy.addEventListener('click', function () {
    if( $switch > 0){
    $panel.classList.remove("buy_off");
    $panel.classList.add("buy_on");
    $switch =- 1;
}else{ 
    $panel.classList.remove("buy_on");
    $panel.classList.add("buy_off");
    $switch =+ 1;}
});








let index = 0;
let index1 = 1;
let index2 = 2;


$btnRight.addEventListener('click', function(){
    if(window.matchMedia("(max-width: 970px)").matches){
    $btnRight.style.display='block';
    $btnLeft.style.display='block';
    if(index < 4 ){
    $album[index].classList.remove('sound_on');
    $album[index1].classList.remove('sound_on1');
    $album[index2].classList.remove('sound_on1');

    index += 1 ;
    index1 += 1;
    index2 += 1;
    
    if (index > ($album.length -1)) {
        index = 0;
    }
    
    
    if (index1 > ($album.length -1)) {
        index1 = 0;
    }
    
    
    if (index2 > ($album.length -1)) {
        index2 = 0;}
    

    $album[index].classList.add('sound_on');
    $album[index1].classList.add('sound_on1');
    $album[index2].classList.add('sound_on1');}
    else {
        $btnRight.style.display='none';
        
        $btnLeft.style.display='block';
    
    }

    
    

}else{

$btnRight.style.display='block';
    $btnLeft.style.display='block';
    if(index != 2){
    $album[index].classList.remove('sound_on');
    $album[index1].classList.remove('sound_on1');
    $album[index2].classList.remove('sound_on1');

    index += 1;
    index1 += 1;
    index2 += 1;
    
    if (index > ($album.length -1)) {
        index = 0;
    }
    
    
    if (index1 > ($album.length -1)) {
        index1 = 0;
    }
    
    
    if (index2 > ($album.length -1)) {
        index2 = 0;}
    

    $album[index].classList.add('sound_on');
    $album[index1].classList.add('sound_on1');
    $album[index2].classList.add('sound_on1');}
    else {
        $btnRight.style.display='none';
        
        $btnLeft.style.display='block';
    }}
});










$btnLeft.addEventListener('click', function () {
    
        
    $btnRight.style.display='block';
    $btnLeft.style.display='block';
    if(index != 0){
    $album[index].classList.remove('sound_on');
    $album[index1].classList.remove('sound_on1');
    $album[index2].classList.remove('sound_on1');

    index -= 1;
    index1 -= 1;
    index2 -= 1;
    if (index < 0) {
        index = $album.length - 1;
    }
    if (index1 < 0) {
        index1 = $album.length - 1;
    }
    if (index2 < 0) {
        index2 = $album.length - 1;
    }

    $album[index].classList.add('sound_on');
    $album[index1].classList.add('sound_on1');
    $album[index2].classList.add('sound_on1');}
    else{$btnLeft.style.display='none';}
    });









let Index = 0;
let Index1 = 1;
let Index2 = 2;







$btnRight1.addEventListener('click', function(){
    
    if(window.matchMedia("(max-width: 970px)").matches){
        $btnRight1.style.display='block';
        $btnLeft1.style.display='block';
        if(Index != 4){
        $album1[Index].classList.remove('sound_on2');
        Index += 1;
        if (Index > ($album1.length -1)) {
        Index = 0;
        }
        $album1[Index].classList.add('sound_on2');}
        else{
        $btnRight1.style.display='none';
            
        $btnLeft1.style.display='block';
        }
       

    }else{
    $btnRight1.style.display='block';
    $btnLeft1.style.display='block';
    if(Index != 2){
    $album1[Index].classList.remove('sound_on2');
    $album1[Index1].classList.remove('sound_on3');
    $album1[Index2].classList.remove('sound_on3');

    Index += 1;
    Index1 += 1;
    Index2 += 1;

    if (Index > ($album1.length -1)) {
        Index = 0;
    }
        
        
    if (Index1 > ($album1.length -1)) {
        Index1 = 0;
    }
        
        
    if (Index2 > ($album1.length -1)) {
        Index2 = 0;
    }

    $album1[Index].classList.add('sound_on2');
    $album1[Index1].classList.add('sound_on3');
    $album1[Index2].classList.add('sound_on3');}else{
        $btnRight1.style.display='none';
            
        $btnLeft1.style.display='block';
    }}
    
});

$btnLeft1.addEventListener('click', function () {
    
    $btnRight1.style.display='block';
    $btnLeft1.style.display='block';
    if(Index != 0){
        
    $album1[Index].classList.remove('sound_on2');
    $album1[Index1].classList.remove('sound_on3');
    $album1[Index2].classList.remove('sound_on3');
    
    Index -= 1;
    Index1 -= 1;
    Index2 -= 1;
    if (Index < 0) {
        Index = $album.length - 1;
    }
    if (Index1 < 0) {
        Index1 = $album.length - 1;
    }
    if (Index2 < 0) {
        Index2 = $album.length - 1;
    }

    $album1[Index].classList.add('sound_on2');
    $album1[Index1].classList.add('sound_on3');
    $album1[Index2].classList.add('sound_on3');
    }else{$btnLeft1.style.display='none';}
});