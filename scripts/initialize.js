function setup(x){
    document.querySelector('#message').innerHTML = 'Ready';
    document.querySelector('#message').style.color = 'gold';
    new Audio( 'sound effects/game_start.wav' ).play();

    pacman.style.marginLeft ='253px'
    pacman.style.marginTop ='367px'

    blinky.style.marginLeft ='253px'
    blinky.style.marginTop ='175px'
    
    pinky.style.marginLeft ='253px'
    pinky.style.marginTop ='223px'

    inky.style.marginLeft ='221px'
    inky.style.marginTop ='223px'

    clyde.style.marginLeft ='285px'
    clyde.style.marginTop ='223px'  


    pacman.props = {direction:'left',pointer:'left', name:'pacman'}
    blinky.props = {mode:'scatter', direction:'left' , name:'blinky' , color : 'red' , in_house:false , move_aout:true}
    pinky.props = {mode:'scatter', direction:'down' , name:'pinky' , color : 'hotpink' , in_house:false , move_aout:false}
    inky.props = {mode:'scatter', direction:'up' , name:'inky' , color : 'cyan' , in_house:true , move_aout:false}
    clyde.props = {mode:'scatter', direction:'up' , name:'clyde' , color : 'orange' , in_house:true , move_aout:false}

    if(x=='level' || x=='load'){
        arrange_dots();
        arrange_power();
    }

setTimeout(() => {
    document.querySelector('#message').innerHTML = '';
}, 4500);

}