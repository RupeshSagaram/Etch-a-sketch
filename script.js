let container = document.querySelector('#container');
let btn = document.querySelector('.btn');



for(let i =0; i<16; i++){
    let divRow = document.createElement('div');
    divRow.classList.add('row');
    divRow.style.display = 'flex';
    container.appendChild(divRow);
    for(let j=0; j<16; j++){
        let divColumn = document.createElement('div');
        divColumn.classList.add('column');
        divColumn.style.backgroundColor = 'red';
        divColumn.style.padding = '1.5rem','0';
        divRow.appendChild(divColumn); 
    }
    
     
}
document.querySelectorAll('.column').forEach(divColumn =>{
    divColumn.addEventListener('mouseover',()=>{
        divColumn.style.backgroundColor = 'white';
     }
    )}
  );

  btn.addEventListener('click',()=>{
    squaresPerSide=prompt(`how many squares per side for the new grid?`);
    //return squaresPerSide;
  })



