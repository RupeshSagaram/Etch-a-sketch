let container = document.querySelector('#container');
let btn = document.querySelector('.btn');

//randomizing the square colors.

function randomColor(){

    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let randomRGB = "rgb(" + x + ','+ y + ',' + z +')';
    return randomRGB;
}

for(let i =0; i<=16; i++){
    let divRow = document.createElement('div');
    divRow.classList.add('row');
    divRow.style.display = 'flex';
    container.appendChild(divRow);
    for(let j=0; j<=16; j++){
        let divColumn = document.createElement('div');
        divColumn.classList.add('column');
        divColumn.style.backgroundColor = 'cadetblue';
        divColumn.style.padding = '1.5rem','0';
        divRow.appendChild(divColumn); 
    }  
     
}
document.querySelectorAll('.column').forEach(divColumn =>{
    divColumn.addEventListener('mouseover',()=>{
        divColumn.style.backgroundColor = randomColor();
     }
    )}
  );

  //the following is the repeated for condition for the button event.
  btn.addEventListener('click',()=>{
    
    squaresPerSide= +prompt(`how many squares per side for the new grid?`);

    document.querySelectorAll('.row').forEach(divRow =>{
        
        container.removeChild(divRow)
    }
  );

  document.querySelectorAll('.column').forEach(divColumn =>{
        
    container.removeChild(divColumn);
} )
if(squaresPerSide<100){
        for(let i =0; i<squaresPerSide; i++){
            let divRow = document.createElement('div');
            divRow.classList.add('row');
            divRow.style.display = 'flex';
            divRow.style.width = '960px';
            container.appendChild(divRow);
            for(let j=0; j<squaresPerSide; j++){
                let divColumn = document.createElement('div');
                divColumn.classList.add('column');
                divColumn.style.backgroundColor = 'cadetblue';
                divColumn.style.padding = '1rem','0';
                divColumn.style.flex = '1';
                divRow.appendChild(divColumn); 
            }
        }
        document.querySelectorAll('.column').forEach(divColumn =>{
            divColumn.addEventListener('mouseover',()=>{
                divColumn.style.backgroundColor = randomColor();
             }
            )}
          );
    
  } else{
    squaresPerSide= alert(`sorry! only values under 100 is acceptable`);
    }
        });






  



