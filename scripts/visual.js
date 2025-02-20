// these are the X and Y positions of the first dot 
function arrange_dots(){
    let start_X = 62;
    let start_Y = 25;

    matrix.forEach((row,index_R) => {
        row.forEach((col,index_C) =>{
            if(matrix[index_R][index_C]== 1){
                let style = `margin-left:${start_X + (index_C*16)}px; margin-top:${start_Y + (index_R*16)}px;`;
                document.querySelector('#maze').insertAdjacentElement('beforeend', `<div class='dot' style='${style}'></div>`);
            }   
});  
});
}