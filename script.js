// Create a new table element
let table = document.createElement('table');

// Counter variable to store the current number
let counter = 1;

// Create table rows and cells
for (let i = 0; i < 10; i++) {
  let row = table.insertRow(i); // Insert a new row at index 'i'
  
  for (let j = 0; j < 10; j++) {
    let cell = row.insertCell(j); // Insert a new cell at index 'j'
    cell.textContent = counter; // Set cell content to the current number
    counter++; // Increment the counter
  }
}


document.body.appendChild(table);