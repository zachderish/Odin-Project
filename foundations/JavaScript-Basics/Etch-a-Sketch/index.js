const grid = document.querySelector("#grid");

const TOT_BORDER_WIDTH = 4;

function new_grid(grid_size) {
    grid.replaceChildren();

    for (let i = 0; i < grid_size; i++) {
        for (let j = 0; j < grid_size; j++) {

            let div = document.createElement("div");
            div.classList.add("item");
            div.style.width = `${Math.floor(960/grid_size) - TOT_BORDER_WIDTH}px`;
            div.style.height = `${Math.floor(960/grid_size) - TOT_BORDER_WIDTH}px`;
            div.style.border = "solid black 2px";
            grid.appendChild(div);
    
            div.addEventListener("mouseover", function() {
                div.style.backgroundColor = "gray";
            });
        }
    }
}

const btn = document.querySelector("#new-grid");
btn.addEventListener("click", function() {
    let grid_size = parseInt(prompt("New grid size: ", "16"));

    if (grid_size > 100 || grid_size < 1) {
        alert("Invalid grid size!");
        return;
    } 
    if (isNaN(grid_size)) {
        alert("Not a number!");
        return;
    }

    new_grid(grid_size);
});

