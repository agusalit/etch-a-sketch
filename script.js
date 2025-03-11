const container = document.querySelector("#container");
let drawing = false;
let eraseMode = false;


function gridGenerator(){
    let gridNumber = document.querySelector("#gridNumber").value;
    console.log(gridNumber);
    gridNumber = Number(gridNumber) || 16;
    console.log(gridNumber);

    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    for(let i = 0; i < gridNumber; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);

        for(let j = 0; j < gridNumber; j++){
            const col = document.createElement("div");
            col.classList.add("col");

            col.addEventListener("mousedown", (event) =>{
                if(event.button === 0){
                    drawing = true;
                    eraseMode = false;
                    col.style.backgroundColor = "black";
                }else if(event.button === 2){
                    drawing = true;
                    eraseMode = true;
                    col.style.backgroundColor = "white";
                    event.preventDefault();
                }
            });

            col.addEventListener("mouseover", () =>{
                if(drawing){
                    col.style.backgroundColor = eraseMode ? "white" : "black";
                }
            });

            col.addEventListener("contextmenu", (event) =>{
                event.preventDefault();
            });

            row.appendChild(col);
        }
    }
}

document.addEventListener("mouseup", () =>{
    drawing = false;
});

gridGenerator();