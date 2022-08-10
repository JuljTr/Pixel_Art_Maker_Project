// Select color input
const color = document.querySelector("#colorPicker")
// Select size input
const width = document.querySelector("#inputWidth");
const height = document.querySelector("#inputHeight");
const table = document.querySelector("#pixelCanvas");
const btn = document.querySelector("#button");

// When size is submitted by the user, call makeGrid()
function makeGrid(width, height) {
    table.innerHTML = [];
    for (let i = 0; i < height; i++) {
        const createRow = document.createElement("tr");
        table.appendChild(createRow);
        for (let j = 0; j < width; j++) {
            const createCell = document.createElement("td");
            createRow.appendChild(createCell)
        }
    }
}

// Add Event Listeners 
btn.addEventListener("click", (e) => {
    e.preventDefault()
    const valueWidth = width.value
    const valueHeight = height.value
    makeGrid(valueWidth, valueHeight)
})

table.addEventListener("click", (e) => {
    e.preventDefault()
    const valueColor = color.value
    if (e.target.tagName === "TD") {
        let td = e.target
        td.style.backgroundColor = valueColor
    }
})


