let container = document.querySelector('#container');

for(let i=0; i<=16; i++){
    /*let divGrid = document.createElement('div');
     divGrid.classList.add('divGrid');
     divGrid.style.backgroundColor= 'red';
     divGrid.style.display = 'flex';
     divGrid.style.height ='auto';
     divGrid.style.width = '60px';
     */
    for(let j=0; j<=16; j++){
    let divGrid = document.createElement('div');
     divGrid.classList.add('divGrid');
     divGrid.style.backgroundColor= 'cadetblue';
     divGrid.style.display = 'flex';
     divGrid.style.height = '60px';
     divGrid.style.width = '60px'
     container.appendChild(divGrid);
    }
}
 document.querySelectorAll('.divGrid').forEach(divGrid =>{
    divGrid.addEventListener('mouseover',()=>{
    divGrid.style.backgroundColor = 'white';
     }
    )}
  );

