document.addEventListener('keydown' ,(e)=>{
    if (e.key === 'Enter' &&  !pacman.props){
        setup('load');
    }
})