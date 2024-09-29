let gridsize = 16;
let IsPaintKeyDown = false;
let IsEraseKeyDown = false;
let IsRandomColorMode = false;
const PAINTKEY = "Shift";
const ERASEKEY = "Control";
const VHRATIO = 80;

const container = document.querySelector(".container");
const newgrid = document.querySelector("#newgrid");
const cleargrid = document.querySelector("#cleargrid");
const togglecolor = document.querySelector("#togglecolor");
const currentmode = document.querySelector("#currentmode");

container.addEventListener('mouseover', (event) => ColorGridUnit(event));
newgrid.addEventListener('click', AlertWrapper);
cleargrid.addEventListener('click', ClearGrid);
togglecolor.addEventListener('click', ToggleColorMode);
document.addEventListener('keydown', (event) => SetKeyDown(event));
document.addEventListener('keyup', (event) => SetKeyUp(event));

function SetKeyDown(event){
    switch (event.key){
        case PAINTKEY: 
            IsPaintKeyDown = true;
            break;
        case ERASEKEY:
            IsEraseKeyDown = true;
            break;
    }
}

function SetKeyUp(event){
    switch (event.key){
        case PAINTKEY: 
            IsPaintKeyDown = false;
            break;
        case ERASEKEY:
            IsEraseKeyDown = false;
            break;
    }
}

function ColorGridUnit(event){
    target = event.target;
    if (target.id = "gridUnit"){
        if (IsEraseKeyDown) target.style.backgroundColor = "white";
        if (IsPaintKeyDown) target.style.backgroundColor = IsRandomColorMode ? RandomColor() : "grey";
    }
}

function RandomColor(){
    return("rgb(" + Math.random() * 256 + "," + Math.random() * 256 + "," + Math.random() * 256 + ")");

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

function ToggleColorMode(){
    IsRandomColorMode = !IsRandomColorMode;
    currentmode.textContent = IsRandomColorMode ? "Random" : "Grey";
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