const container = document.getElementById("container");
const startButton = document.getElementById("startButton")

let grid;

startButton.addEventListener('click', () => {
    grid = Math.min(gridSize(), 100);
    for (let i = 0; i < grid; i++) {
        for (let j = 0; j < grid; j++) {
            const block = document.createElement("div")
            block.classList.add("block-item")
            container.appendChild(block)
        }
    }
})

function gridSize() {
    return prompt("What size would you like to draw on? 1 - 100", "16");
}

