



function player1() {

    let random1 = Math.floor(Math.random() * 3 + 1);
    document.querySelector('img').setAttribute('src', 'images/' + random1 + '.png');

    let random2 = Math.floor(Math.random() * 3 + 1);
    document.querySelectorAll('img')[1].setAttribute('src', 'images/' + random2 + '.png');

    var play = new Audio('sounds/startsound.wav')
    play.play()

var result=condition(random1,random2)

}

function condition(n1,n2){
// 1 rock 2 paper 3scissors
if(n1==n2){
    document.querySelector('h3').innerHTML='Draw!';
}
else if(n1==1 && n2==3){
    document.querySelector('h3').innerHTML='You Win!';

}
else if(n1==3 && n2==2){
    document.querySelector('h3').innerHTML='You Win!';

}


else if(n1==2 && n2==1){
    document.querySelector('h3').innerHTML='You Win!';

}
else if(n1==3 && n2==2){
    document.querySelector('h3').innerHTML='You Win!';

}


else{

   
        document.querySelector('h3').innerHTML='You Loose!';

    }       
}















///!!!!!!!!!!!!!!!!!!!!!!!!!!SOUND SECTION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function startSound() {

    var snd = new Audio("sounds/sond.mp3"); // buffers automatically when created
    snd.play()
}