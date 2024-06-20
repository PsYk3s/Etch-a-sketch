const container = document.getElementById("container");
const startButton = document.getElementById("startButton")

let grid;

//Create grid using loops
startButton.addEventListener('click', () => {
    container.innerText = ""

    //Retrieve user grid size at a maximum of 100
    grid = Math.min(gridSize(), 100);
    let block;
    for (let i = 0; i < grid * grid; i++) {
        block = document.createElement("div")
        block.classList.add("block-item")
        block.addEventListener("mouseenter", function () {
            this.style.opacity > 0? this.style.opacity -= 0.1:0;
        });
        container.appendChild(block)
        block.style.opacity = "1"
        block.style.width = "calc(100% /" + grid + ")"
    }
    startButton.innerText = "Reset?"
})

function gridSize() {
    return prompt("What size would you like to draw on? 1 - 100", "16");
}

