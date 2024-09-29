const GRIDSIZE = 16;

const container = document.querySelector(".container");

container.addEventListener('mouseover', (event) => ColorGridUnit(event));

function ColorGridUnit(event){
    target = event.target;
    target.style.backgroundColor = "grey";
}

function GenerateGrid(size){
    for (i = 0; i < size; i++){
        const gridRow = document.createElement("div");
        gridRow.classList.add("gridRow");
        for (j = 0; j < size; j++){
            const gridUnit = document.createElement("div");
            gridUnit.classList.add("gridUnit");
            gridRow.appendChild(gridUnit);
        }
        container.appendChild(gridRow);
    }
}

//generate grid on load
document.body.onload = () => {GenerateGrid(GRIDSIZE)};