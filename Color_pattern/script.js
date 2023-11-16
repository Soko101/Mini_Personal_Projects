document.addEventListener("DOMContentLoaded", function () {
    const colorGridContainer = document.getElementById("color-grid");

    const generateButton = document.getElementById("generate-button");
    generateButton.addEventListener("click", generateGrid);

    function generateGrid() {
        const rows = parseInt(document.getElementById("rows").value);
        const columns = parseInt(document.getElementById("columns").value);

        colorGridContainer.innerHTML = ''; // Clear the grid container

        // Calculate cell size to fit in the viewport
        const cellSize = Math.min(
            Math.floor(window.innerWidth / columns),
            Math.floor(window.innerHeight / rows)
        );

        for (let i = 0; i < rows; i++) {
            const row = document.createElement("div");
            row.className = "grid-row";

            for (let j = 0; j < columns; j++) {
                appendCell(row, cellSize);
            }

            colorGridContainer.appendChild(row);
        }
    }

    function appendCell(row, size) {
        const colorBox = document.createElement("div");
        colorBox.className = "color-box";
        colorBox.style.backgroundColor = getRandomColor();
        colorBox.style.width = size + "px";
        colorBox.style.height = size + "px";
        row.appendChild(colorBox);
    }

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
