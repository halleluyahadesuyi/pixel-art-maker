// Save input height in variable
const pixelHeightEl = document.getElementById("grid-height");
// Save input width in variable
const pixelWidthEl = document.getElementById("grid-width");
// Save submit-input in variable
const submitEl = document.getElementById("submit-input");
// Color selector element
const colorSelectorEl = document.getElementById("color-selector");
// Save pixel-canvas in variable
const tableEl = document.getElementById("pixel-canvas");

// Call makeGrid function when submitEl is clicked
submitEl.addEventListener('click', (event) => {
    // Prevent form from performing default acton
    event.preventDefault();
    // Delete elements in the table
    tableEl.replaceChildren("");
    // Call the makeGrid function
    makeGrid();
});

// Function to create grid
function makeGrid() {
    // Get the height and width of the grid
    const gridHeight = pixelHeightEl.value;
    const gridWidth = pixelWidthEl.value;

    // Grid construction
    for(let a = 0; a < gridHeight; a++) {
        // Create a table row element
        const tr = document.createElement('tr');
        // Add a class name of container to the table row
        tr.classList.add('container');

        // For each square
        for(let b = 0; b < gridWidth; b++) {
            // Create a table data element
            const td = document.createElement('td');
            // Add a class of square to the table data
            td.classList.add('square');
            // Append the table data element to the table row element
            tr.appendChild(td);
        }
        // Add an event delegation to the table row
        tr.addEventListener( 'click', function(event) {
            // Check if table row's target contains a class 'square'
            if(event.target.classList.contains('square')) {
                // If true, set the target's background color
                // to the color selector element's value
                event.target.style.backgroundColor = colorSelectorEl.value;
            }
        });
    
        // Append table row to the whole table
        tableEl.appendChild(tr);
    }
    
}