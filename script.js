let container = document.querySelector('#container');

for(let i=0; i<17; i++){
    let divGrid = document.createElement('div');
     divGrid.classList.add('divGrid');
     divGrid.style.backgroundColor= 'red';
     divGrid.style.display = 'flex';
     divGrid.style.height = '50px';
     divGrid.style.width = '50px';
    for(let j=0; j<17; j++){
    let divGrid = document.createElement('div');
     divGrid.classList.add('divGrid');
     divGrid.style.backgroundColor= 'red';
     divGrid.style.display = 'flex';
     divGrid.style.height = '50px';
     divGrid.style.width = '50px';
     container.appendChild(divGrid);
    }
}