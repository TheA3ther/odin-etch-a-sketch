let gridsize = 16;
const VHRATIO = 80;

const container = document.querySelector(".container");
const newgrid = document.querySelector("#newgrid");
const cleargrid = document.querySelector("#cleargrid");

container.addEventListener('mouseover', (event) => ColorGridUnit(event));
newgrid.addEventListener('click', AlertWrapper);
cleargrid.addEventListener('click', ClearGrid);

function ColorGridUnit(event){
    target = event.target;
    target.style.backgroundColor = "grey";
}

function AlertWrapper(){
    newgridsize = parseInt(prompt("New grid size:"));
    if (isNaN(newgridsize) || newgridsize > 100 || newgridsize < 1){
        alert("You must provide a number between 1 and 100!");
    }
    else {
        GenerateGrid(newgridsize);  
    }
}

function ClearGrid(){
    container.childNodes.forEach(gridRow => {
        gridRow.childNodes.forEach(gridUnit => {
            gridUnit.style.backgroundColor = "white";
        })
    });
}

function DeleteGrid(){
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
}

function GenerateGrid(size){
    DeleteGrid();
    for (i = 0; i < size; i++){
        const gridRow = document.createElement("div");
        gridRow.classList.add("gridRow");
        for (j = 0; j < size; j++){
            const gridUnit = document.createElement("div");
            gridUnit.classList.add("gridUnit");
            gridUnit.style.maxWidth = (VHRATIO/size) + 'vh';
            gridRow.appendChild(gridUnit);
        }
        container.appendChild(gridRow);
    }
}

//generate grid on load
document.body.onload = () => {GenerateGrid(gridsize)};