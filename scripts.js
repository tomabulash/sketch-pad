    const body = document.getElementById('body');
    const grid = []; 
    let gridSize = 16;
    let color = 'blue';

const sizeButton = document.createElement('button');
sizeButton.textContent = 'CHANGE SIZE';
body.appendChild(sizeButton);

const redButton = document.createElement('button');
redButton.textContent = 'RED';
body.appendChild(redButton);

const blueButton = document.createElement('button');
blueButton.textContent = 'BLUE';
body.appendChild(blueButton);

const gridContainer = document.createElement('div');
gridContainer.id = 'grid';
document.body.appendChild(gridContainer);
    
function makeGrid(gridSize) {
    for(let r=0; r<gridSize; r++) {
        grid[r] = document.createElement('div'); 
        grid[r].classList.add('row');
        gridContainer.appendChild(grid[r]);

        for(let c=0; c<gridSize; c++) {
            grid[r][c] = document.createElement('div');
            grid[r][c].classList.add('column');
            grid[r].appendChild(grid[r][c]);
        } 
    }
}

    function paintColor(e) {
        e.target.style.backgroundColor = color;
    }

    function paintOff() {
        Array.from(document.getElementsByClassName('column')).forEach(occurance => {
        occurance.removeEventListener('mouseover', paintColor);
        });
    }

    function paintOn(e) {
        e.target.style.backgroundColor = color;
        Array.from(document.getElementsByClassName('column')).forEach(occurance => {
        occurance.addEventListener('mouseover', paintColor);
        });
    }

    function changeSize() {
        let temp = gridSize;
        gridSize = prompt("Enter a grid size smaller than 100");
        while(gridSize > 100) {
            gridSize = temp;
            gridSize = prompt("You entered a number bigger than 100. Try again");
        }
        if(gridSize == null) {
            gridSize = temp;
            return;
        };
        gridContainer.textContent = '';
        makeGrid(gridSize);
    }

    makeGrid(gridSize);
    gridContainer.addEventListener('mousedown', paintOn);
    body.addEventListener('mouseup', paintOff);
    body.addEventListener('mouseleave', paintOff);
    
    sizeButton.addEventListener('click', changeSize);

    redButton.addEventListener('click', () => {
        color = 'red';
    });

    blueButton.addEventListener('click', () => {
        color = 'blue';
    });


    
