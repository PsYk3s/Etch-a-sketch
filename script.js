const container = document.getElementById("container");
const startButton = document.getElementById("startButton")

let grid;

startButton.addEventListener('click', () => {
    container.innerText = ""
    grid = Math.min(gridSize(), 100);
    for (let i = 0; i < grid; i++) {
        for (let j = 0; j < grid; j++) {
            const block = document.createElement("div")
            block.classList.add("block-item")
            container.appendChild(block)
            block.style.width = "calc(100% /" + grid + ")"
        }
    }
    startButton.innerText = "Reset?"
})

function gridSize() {
    return prompt("What size would you like to draw on? 1 - 100", "16");
}

