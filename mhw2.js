
/* click bottone */

/*
function ClickButton2(event){
    const btn2=event.currentTarget;
    btn2.dataset.color="enabled";
    btn2.classList.remove('disabled');
    btn2.classList.add('enabled');

    const btn1=document.querySelector('#b-1');
    const btn3=document.querySelector('#b-3');

    btn1.classList.remove('enabled');
    btn3.classList.remove('enabled');
    btn1.classList.add('disabled');
    btn3.classList.add('disabled');

    const hero=document.querySelector('#hero');
    hero.style.backgroundImage = "url('jordan 4 off.png')";
    document.querySelector('#text-shoes').innerHTML ='Jordan 4 x Off-White' +'<br />'+'"Sail"';
    
    
}


const btn2= document.querySelector('#b-2');
btn2.addEventListener('click',ClickButton2);
*/

/*hover su login icon*/
function onHoverIcon(event){
    const login_icon=event.currentTarget;
    login_icon.classList.add('LGgo');
    login_icon.classList.remove('LGstop');
    
}

function offHoverIcon(event){
    const login_icon=event.currentTarget;
    login_icon.classList.add('LGstop');
    login_icon.classList.remove('LGgo');
 
}


const login_icon =document.querySelector("#LG");
login_icon.addEventListener('mouseover',onHoverIcon);
login_icon.addEventListener('mouseout',offHoverIcon);

/*image slider*/
let wrapper=querySelector('.wrapper');

let pressed=false;
let startX=0;

box.addEventListener('mousedown', function(e){
    pressed=true;
    startX=e.clientX;

    console.log(startX);
});

box.addEventListener('mouseleave', function(e){
    pressed=false;
});

window.addEventListener('mouseup', function(e){
    pressed=false;
});

box.addEventListener('mousemove', function(e){

    if(!pressed){
        return
    }

    this.scrollLeft += startX -e.clientX;
});

