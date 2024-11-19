// Initialize the inventory array
let inventory = [
    { id: 1, name: 'Apple', quantity: 10, price: 0.5 },
    { id: 2, name: 'Banana', quantity: 20, price: 0.2 }
];

// Function to add an item to the inventory
function addItem(inventory, item) {
    inventory.push(item);
}

// Function to update an item in the inventory
function updateItem(inventory, id, newDetails) {
    const item = inventory.find(item => item.id === id);
    if (item) {
        Object.assign(item, newDetails);
    }
}

// Function to delete an item from the inventory
function deleteItem(inventory, id) {
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        inventory.splice(index, 1);
    }
}

// Function to get an item by ID
function getItem(inventory, id) {
    return inventory.find(item => item.id === id);
}

// Function to print the inventory in a readable format
function printInventory(inventory) {
    console.log(JSON.stringify(inventory, null, 2));
}

// Demonstrate the use of each function
console.log("Initial Inventory:");
printInventory(inventory);

console.log("\nAdding item:");
addItem(inventory, { id: 3, name: 'Orange', quantity: 15, price: 0.7 });
printInventory(inventory);

console.log("\nUpdating item:");
updateItem(inventory, 2, { quantity: 30 });
printInventory(inventory);

console.log("\nDeleting item:");
deleteItem(inventory, 1);
printInventory(inventory);